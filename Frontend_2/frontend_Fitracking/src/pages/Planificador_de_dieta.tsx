import { BalanceNutrientes } from '../components/PlanificadorDieta/BalanceNutrientes';

import '../styles/Asesor_salud.css'; 


const Planificador_Dieta = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12 font-sans">
      <BalanceNutrientes />
    </div>
  );
}

export default Planificador_Dieta;