import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { verificarDoctorPorCredenciales } from "../Redux/actions";
import "../styles/Iniciar_Sesion.css";
import { useNavigate } from "react-router-dom";

const Iniciar_Sesion = () => {
  const [matricula, setMatricula] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [error, setError] = useState(""); // Nuevo estado para manejar mensajes de error

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleIngresarClick = async (e) => {
    e.preventDefault();
    
    try {
      const response = await dispatch(verificarDoctorPorCredenciales({ matricula, contrasena })) //.then(() => 
       console.log( "Status:" + response.status);
        if(matricula==""&&contrasena==""){
          console.log("CAMPOS VACIOS");
          setError("contraseña y matricula vacios")
        }else if(response&&response.status === 200){
          console.log('Redireccionando a /Perfil');
          navigate("/Perfil"); // Redirecciona al perfil del doctor
        }else{
          console.log("DATOS NO EXISTENTES");
          setError("contraseña y matricula no existentes")
        }
      }catch(error)  {
        console.error("Error al verificar usuario:", error);
        if (error.response && error.response.status === 404) {
          setError("Error interno del servidor. Por favor, intenta de nuevo más tarde.");
        } else if(error.response.status === 400){
          setError("contraseña y matricula no existentes")
        }
      };
  };

  return (
    <div className="CajaDoctor">
      <h1>Por favor ingrese sus datos como Doctor</h1>
      <form>
        <p>Matrícula:</p>
        <input
          type="text"
          value={matricula}
          onChange={(e) => setMatricula(e.target.value)}
        />
        <p>Contraseña:</p>
        <input
          type="password" // Cambiado a type="password"
          value={contrasena}
          onChange={(e) => setContrasena(e.target.value)}
        />
        <br />
        <br />
        <button onClick={handleIngresarClick}>Ingresar</button>
      </form>

      {error && <p className="MensajeError">{error}</p>}
    </div>
  );
};

export default Iniciar_Sesion;
