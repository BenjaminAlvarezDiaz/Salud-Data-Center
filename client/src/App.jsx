import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Perfil_Doctor from "./pages/Perfil_Doctor";
import Login from "./pages/Login";
//import Login from "./pages/Iniciar_Sesion";
import Perfil_Empresa from "./pages/Perfil_Empresa"; // Agrega la importación
import Help from "./pages/Help";
import Stats from "./pages/stats";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/stadistics" element={<Stats />} />
        <Route path="/Perfil" element={<Perfil_Doctor />} />
        <Route path="/PerfilEmp" element={<Perfil_Empresa />} />
        <Route path="/Help" element={<Help />} />
      </Routes>
    </div>
  );
}
export default App;
