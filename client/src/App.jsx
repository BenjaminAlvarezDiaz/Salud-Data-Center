import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Perfil_Doctor from "./pages/Perfil_Doctor";
import Login from "./pages/Login";
//import Login from "./pages/Iniciar_Sesion";
import Perfil_Empresa from "./pages/Perfil_Empresa"; // Agrega la importación
import Help from "./pages/Help";
import Customers from "./pages/Customers";
import Stats from "./pages/stats";
import Products from "./pages/Products";
import Orders from "./pages/Orders";
import SignUp from "./pages/SignUp";
import SignUpDoctor from "./pages/SignUpDoctor";
import SignUpCompany from "./pages/SignUpCompany";
import Patients from "./pages/Patients";
import PatientProfile from "./pages/PatientProfile";
import PatientCreate from "./pages/PatientCreate";
import PatientSymptoms from "./pages/PatientSymptoms";
import PatientMedicalFile from "./pages/PatientMedicalFile";
import PatientSuggestProduct from "./pages/PatientSuggestProduct";
import Settings from "./pages/Settings";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element = {<Login />} />
        <Route path="/Perfil" element = {<Perfil_Doctor />} />
        <Route path="/PerfilEmp" element = {<Perfil_Empresa />} />
        <Route path="/Products" element = {<Products />} />
        <Route path="/Orders" element = {<Orders />} />
        <Route path="/stadistics" element = {<Stats />} />
        <Route path="/Customers" element = {<Customers />} />
        <Route path="/Settings" element = {<Settings />} />
        <Route path="/Help" element = {<Help />} />
        <Route path="/SignUp" element = {<SignUp />} />
        <Route path="/signupdoctor" element = {<SignUpDoctor />} />
        <Route path="/signupcompany" element = {<SignUpCompany />} />
        <Route path="/patients" element = {<Patients />} />
        <Route path="/patientProfile" element = {<PatientProfile />} />
        <Route path="/createPatient" element = {<PatientCreate />} />
        <Route path="/patientSymptoms" element = {<PatientSymptoms />} />
        <Route path="/patientMedicalFile" element = {<PatientMedicalFile />} />
        <Route path="/patientSuggestProduct" element = {<PatientSuggestProduct />} /> 
      </Routes>
    </div>
  );
}
export default App;
