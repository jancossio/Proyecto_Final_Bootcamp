import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import Recomendaciones from "../components/Recomendaciones";
import { HealthFormData } from "../types/health";

const Recomendacion = () => {
  const { user } = useAuth(); // Asegura que el usuario esté autenticado
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<HealthFormData | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!user || !user.id) {
      alert("Debes iniciar sesión para ver esta página.");
      navigate("/Login");
      return;
    }

    // Fetch de recomendaciones
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://localhost:8080/users/${user.id}/recomendacion`,
          { method: "GET", credentials: "include" }
        );

        if (!response.ok) {
          throw new Error("Error al obtener recomendaciones.");
        }

        const result: HealthFormData = await response.json();
        setData(result);
      } catch (err) {
        console.error("Error fetching recommendations:", err);
        setError("Ocurrió un error al obtener las recomendaciones.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [user, navigate]);

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>{error}</p>;
  if (!data) return <p>No se encontraron recomendaciones.</p>;

  return (
    <div className="flex items-center justify-center h-screen bg-gray-50">
      <Recomendaciones datos={data} />
    </div>
  );
};

export default Recomendacion;