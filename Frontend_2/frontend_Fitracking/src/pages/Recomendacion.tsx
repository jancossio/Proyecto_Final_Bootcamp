import React, { useEffect, useState } from "react";
import { useUserContext } from "../context/useUserContext";
import Recomendaciones from "../components/Recomendaciones";

const Recomendacion = () => {
  const { user } = useUserContext();
  console.log("User context at mount:", user);
  const [healthData, setHealthData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!user || !user.id) {
      console.error("User context not ready.");
      setError("User not logged in. Please log in again.");
      setLoading(false);
      return;
    }

    const fetchHealthData = async () => {
      try {
        console.log("Fetching health data for user ID:", user.id);
        const response = await fetch(`http://localhost:8080/users/${user.id}/recomendacion`, {
          method: "GET",
          credentials: "include", // Include cookies in this request
        });
        if (!response.ok) {
          throw new Error(`Failed to fetch data: ${response.statusText}`);
        }
        const data = await response.json();
        console.log("Health data fetched:", data);
        setHealthData(data);
      } catch (err) {
        console.error("Error fetching health data:", err);
        setError(err instanceof Error ? err.message : "Unknown error");
      } finally {
        setLoading(false);
      }
    };

    fetchHealthData();
  }, [user]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!healthData) return <p>No health data available</p>;

  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Recomendaciones de Salud</h1>
      <div className="max-w-3xl mx-auto">
        <Recomendaciones datos={healthData} />
      </div>
    </main>
  );
};

export default Recomendacion;