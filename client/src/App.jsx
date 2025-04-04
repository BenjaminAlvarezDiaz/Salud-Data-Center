import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Perfil_Doctor from "./components/Perfil_Doctor";
import Iniciar_Sesion from "./components/Inicio_Se";
import Perfil_Empresa from "./components/Perfil_Empresa"; // Agrega la importación

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Iniciar_Sesion />} />
        <Route path="/Perfil" element={<Perfil_Doctor />} />
        <Route path="/PerfilEmp" element={<Perfil_Empresa />} />
      </Routes>
    </div>
  );
}
export default App;
