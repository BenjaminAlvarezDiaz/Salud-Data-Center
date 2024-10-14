import React, {useState} from 'react';
import AppBar from '../components/AppBar/AppBar';
import Sidebar from '../components/SideBar/Sidebar';
import '../styles/Help.css';
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { postProductos } from '../Redux/actions/Stats_actions';

function Stats(){
    const [isSidebarOpen, setSidebarOpen] = useState(true);
    var newProduct = {};
    const toggleSidebar = () => {
        //alert('¡Me hiciste click!');
        setSidebarOpen(!isSidebarOpen);
    };

    const navigate = useNavigate();
    const dispatch = useDispatch();

    async function createProductFunction (e) {
        e.preventDefault();
        newProduct = {
            CategoriaId: "1", 
            marca: "Alfa_centauri", 
            modelo: "Aerodinamico", 
            año: "255 a.c.", 
            precio: "incalculable", 
            descripcion: "terrible caga",
            ficha_tecnica: "si",
            imagenes: "https://stickerly.pstatic.net/sticker_pack/PQEbA06NLcQ7reKUeFtK0g/9I87N5/2/e7d14800-7468-4030-be3a-0b2d8dacd543.png"
        };
        try {
            const response = await dispatch(postProductos(newProduct));
            console.log("Status: " + response.status);
            if(response && response.status === 200){
                console.log("PRODUCTO CREADO SATISFACTORIAMENTE");
                console.log(response.nombre);
            }else {
                console.log("DATOS NO EXISTENTES");
            }
        }catch (error){
            console.error("Error al crear el doctor: ", error);
            if (error.response && error.response.status === 404) {
                setError(
                  "Error interno del servidor. Por favor, intenta de nuevo más tarde."
                );
            }else if (error.response.status === 400) {
                setError("¡Producto no creado, not found!");
            }
        }
    }

    return(
        <div className='main-container'>
            <AppBar/>
            <div className='content'>
                <h1>
                    Product
                </h1>
                <button onClick={createProductFunction}>Crear producto</button>
            </div>
            <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        </div>
    );
}

export default Stats;