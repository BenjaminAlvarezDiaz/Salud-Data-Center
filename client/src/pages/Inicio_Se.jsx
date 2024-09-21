import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { verificarDoctorPorCredenciales, verificarEmpresaPorCredenciales, } from "../redux/actions/actions.js";
import "../styles/Iniciar_Sesion.css";
import { useNavigate } from "react-router-dom";

const Iniciar_Sesion = () => {
  const [seleccionVisible, setSeleccionVisible] = useState(true);
  const [tipoCaja, setTipoCaja] = useState(null);
  const [name, setName] = useState("");
  const [matricula, setMatricula] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [error, setError] = useState(""); // Nuevo estado para manejar mensajes de error

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleButtonClick = (tipo) => {
    setSeleccionVisible(false);
    setTipoCaja(tipo);
  };

  const handleVolverClick = () => {
    setSeleccionVisible(true);
    setTipoCaja(null);
  };

  const handleIngresarClick = async (e) => {
    e.preventDefault();
    if (tipoCaja == "doctor") {
      try {
        const response = await dispatch(
          verificarDoctorPorCredenciales({ matricula, contrasena })
        ); //.then(() =>
        console.log("Status:" + response.status);
        if (matricula == "" && contrasena == "") {
          console.log("CAMPOS VACIOS");
          setError("Contraseña y matricula vacios");
        } else if (response && response.status === 200) {
          console.log("Redireccionando a /Perfil");
          navigate("/Perfil"); // Redirecciona al perfil del doctor
        } else {
          console.log("DATOS NO EXISTENTES");
          setError("Contraseña y matricula no existentes");
        }
      } catch (error) {
        console.error("Error al verificar usuario:", error);
        if (error.response && error.response.status === 404) {
          setError(
            "Error interno del servidor. Por favor, intenta de nuevo más tarde."
          );
        } else if (error.response.status === 400) {
          setError("Contraseña y matricula no existentes");
        }
      }
    }
    if (tipoCaja == "empresa") {
      try {
        const response = await dispatch(
          verificarEmpresaPorCredenciales({ name, contrasena })
        ); //.then(() =>
        console.log("Status:" + response.status);
        if (name == "" && contrasena == "") {
          console.log("CAMPOS VACIOS");
          setError("Contraseña y nombre vacios");
        } else if (response && response.status === 200) {
          console.log("Redireccionando a /PerfilEmp");
          navigate("/PerfilEmp"); // Redirecciona al perfil del doctor
        } else {
          console.log("DATOS NO EXISTENTES");
          setError("Contraseña y nombre no existentes");
        }
      } catch (error) {
        console.error("Error al verificar usuario:", error);
        if (error.response && error.response.status === 404) {
          setError(
            "Error interno del servidor. Por favor, intenta de nuevo más tarde."
          );
        } else if (error.response.status === 400) {
          setError("Contraseña y matricula no existentes");
        }
      }
    }
  };

  return (
    <>
      {seleccionVisible && (
        <div className="Seleccion">
          <h1>Seleccione cómo desea ingresar</h1>
          <input
            type="button"
            value="Doctor"
            className="BotonDoc"
            onClick={() => handleButtonClick("doctor")}
          />
          <input
            type="button"
            value="Empresa"
            className="BotonEmp"
            onClick={() => handleButtonClick("empresa")}
          />
        </div>
      )}

      {tipoCaja === "doctor" && (
        <div className="CajaDoctor">
            <br />
          <button onClick={handleVolverClick}>Volver</button>
          <h1>Por favor ingrese sus datos como Doctor</h1>
          <form>
            <div className="passinp">
            <p>Matrícula:</p>
            <input
              type="text"
              value={matricula}
              placeholder="Matricula"
              onChange={(e) => setMatricula(e.target.value)}
            />
            </div>
            <div className="passinp">
            <p>Contraseña:</p>
            <input
              type="password" // Cambiado a type="password"
              value={contrasena}
              placeholder="Contraseña"
              onChange={(e) => setContrasena(e.target.value)}
            />
            </div>
            <br />
            <button onClick={handleIngresarClick}>Ingresar</button>
            <br />
          </form>
          {error && <p className="MensajeError">{error}</p>}
          <br />
        </div>
      )}

      {tipoCaja === "empresa" && (
        <div className="CajaEmpresa">
            <br />
          <button onClick={handleVolverClick}>Volver</button>
          <h1>Por favor ingrese sus datos como Empresa</h1>
          <form>
            <div className="passinp">
            <p>Nombre de usuario:</p>
            <input
              type="text"
              value={name}
              placeholder="Nombre de usuario"
              onChange={(e) => setName(e.target.value)}
            />
            </div>
            <div className="passinp">
            <p>Contraseña:</p>
            <input
              type="password"
              value={contrasena}
              placeholder="Contraseña"
              onChange={(e) => setContrasena(e.target.value)}
            />
            </div>
            <br />
            <button onClick={handleIngresarClick}>Ingresar</button>
            <br />
          </form>
          {error && <p className="MensajeError">{error}</p>}
          <br />
        </div>
      )}
    </>
  );
};

export default Iniciar_Sesion;
