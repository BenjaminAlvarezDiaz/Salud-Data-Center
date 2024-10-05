import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Perfil_Doctor from "./pages/Perfil_Doctor";
import Iniciar_Sesion from "./pages/Inicio_Se";
import Perfil_Empresa from "./pages/Perfil_Empresa"; // Agrega la importación
import Help from "./pages/Help";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Help />} />
        <Route path="/Perfil" element={<Perfil_Doctor />} />
        <Route path="/PerfilEmp" element={<Perfil_Empresa />} />
        <Route path="/Help" element={<Help />}/>
      </Routes>
    </div>
  );
}
export default App;
