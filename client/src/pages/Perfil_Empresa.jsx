import React from 'react'
import "../styles/Perfil_Empresa.css";
import { useSelector } from 'react-redux';

const Perfil_Empresa = () => {
    const nombreEmpresa = useSelector((state) => state.auth.user.name);
    return (
        <>
        <div className='caja1'>
        <h1>BIENVENIDO, {nombreEmpresa}</h1>
            <h1 className='titulo1'>Selecciona que vas a realizar:</h1>
                <a className="caja2" href="">Añadir productos</a>
                <a className="caja2" href="">Borrar productos</a>
                <a className="caja2" href="">Modificar productos</a>
                <a className="caja2" href="">Ver productos</a>
                <a className="caja2" href="">Ver clientes</a>
        </div>
        </>
    )
}

export default Perfil_Empresa