import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { verificarEmpresaPorCredenciales } from "../redux/actions/actions.js";
import "../styles/Iniciar_Sesion.css";
import { useNavigate } from "react-router-dom";

const Iniciar_Sesion = () => {
  const [name, setName] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [error, setError] = useState(""); // Nuevo estado para manejar mensajes de error

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleIngresarClick = async (e) => {
    e.preventDefault();

    try {
      const response = await dispatch(
        verificarEmpresaPorCredenciales({ name, contrasena })
      ); //.then(() =>
      console.log("Status:" + response.status);
      if (name == "" && contrasena == "") {
        console.log("CAMPOS VACIOS");
        setError("contraseña y nombre vacios");
      } else if (response && response.status === 200) {
        console.log("Redireccionando a /Perfil");
        navigate("/Perfil"); // Redirecciona al perfil del doctor
      } else {
        console.log("DATOS NO EXISTENTES");
        setError("contraseña y nombre no existentes");
      }
    } catch (error) {
      console.error("Error al verificar usuario:", error);
      if (error.response && error.response.status === 404) {
        setError(
          "Error interno del servidor. Por favor, intenta de nuevo más tarde."
        );
      } else if (error.response.status === 400) {
        setError("contraseña y matricula no existentes");
      }
    }
  };
  return (
    <div className="CajaEmpresa">
      <h1>Por favor ingrese sus datos como Empresa</h1>
      <form>
        <p>Nombre de usuario:</p>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <p>Contraseña:</p>
        <input
          type="text"
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
