import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { verificarDoctorPorCredenciales } from "../Redux/actions";
import "../styles/Iniciar_Sesion.css";
import { useNavigate } from "react-router-dom";

const Iniciar_Sesion = () => {
  const [seleccionVisible, setSeleccionVisible] = useState(true);
  const [tipoCaja, setTipoCaja] = useState(null);
  const [usuario, setUsuario] = useState("");
  const [matricula, setMatricula] = useState("");
  const [contrasena, setContrasena] = useState("");

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

  const handleIngresarClick = () => {
    dispatch(verificarDoctorPorCredenciales({ matricula, contrasena }))
      .then(() => {
        if (tipoCaja === "doctor") {
          console.log(contrasena, matricula);
          navigate("/Perfil");
        } else if (tipoCaja === "empresa") {
          navigate("/PerfilEmp");
        }
      })
      .catch((error) => {
        console.error("Error al verificar usuario:", error);
        if (error.response && error.response.status === 404) {
          alert("No existe un doctor con esas credenciales.");
        }
      });
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
          <button onClick={handleVolverClick}>Volver</button>
          <h1>Por favor ingrese sus datos como Doctor</h1>
          <form action="">
            <p>Matrícula:</p>
            <input
              type="text"
              value={matricula}
              onChange={(e) => setMatricula(e.target.value)}
            />
            <p>Contraseña:</p>
            <input
              type="text"
              value={contrasena}
              onChange={(e) => setContrasena(e.target.value)}
            />
            <button onClick={handleIngresarClick}>Ingresar</button>
          </form>
        </div>
      )}

      {tipoCaja === "empresa" && (
        <div className="CajaEmpresa">
          <button onClick={handleVolverClick}>Volver</button>
          <h1>Por favor ingrese sus datos como Empresa</h1>
          <form action="">
            <p>Nombre de usuario:</p>
            <input
              type="text"
              value={usuario}
              onChange={(e) => setUsuario(e.target.value)}
            />
            <p>Contraseña:</p>
            <input
              type="text"
              value={contrasena}
              onChange={(e) => setContrasena(e.target.value)}
            />
            <button onClick={handleIngresarClick}>Ingresar</button>
          </form>
        </div>
      )}
    </>
  );
};

export default Iniciar_Sesion;
