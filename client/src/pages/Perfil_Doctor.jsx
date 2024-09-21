import React from 'react';
import { useSelector } from 'react-redux';
import "../styles/Perfil_Doctor.css";
/* import { UseSelector, useSelector } from 'react-redux';
 */

const Perfil_Doctor = () => {
  const nombreDoctor = useSelector((state) => state.auth.user.nombre); // Ajusta según la estructura real del estado global
  /*const auth = useSelector ((state) => state.auth)*///forma de extraer estados globales, solo estoy extrayendo el auth

  return (
    <>
      <div className='caja1'>
      <h1>BIENVENIDO, {nombreDoctor}</h1>
        <h1 className='titulo1'>Selecciona qué vas a realizar:</h1>
          <a className="caja2" href="">Ver pacientes</a>
          <a className="caja2" href="">Registrar paciente</a>
          <a className="caja2" href="">Modificar paciente</a>
          <a className="caja2" href="">Agregar historial médico</a>
      </div>
    </>
  );
};

export default Perfil_Doctor;