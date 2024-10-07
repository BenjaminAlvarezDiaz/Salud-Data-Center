import React, {useState} from 'react';
import AppBar from '../components/AppBar/AppBar';
import Sidebar from '../components/SideBar/Sidebar';
import '../styles/Help.css';
import { obtenerDoctores } from '../redux/actions/doctor_actions';
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function Help(){
    const [isSidebarOpen, setSidebarOpen] = useState(true);
    const [id, setId] = useState("");
    const toggleSidebar = () => {
        //alert('¡Me hiciste click!');
        setSidebarOpen(!isSidebarOpen);
    };

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const getDoctorById = async (e) => {
        e.preventDefault();
        setId({id:1});
        try {
            const response = await dispatch(obtenerDoctores({id}));
            console.log("Status: " + response.status);
            if(response && response.status === 200){
                console.log("DATOS CONSEGUIDOS SATISFACTORIAMENTE");
                console.log(response.nombre);
            }else {
                console.log("DATOS NO EXISTENTES");
            }
        }catch (error){
            console.error("Error al consultar el doctor: ", error);
            if (error.response && error.response.status === 404) {
                setError(
                  "Error interno del servidor. Por favor, intenta de nuevo más tarde."
                );
            }else if (error.response.status === 400) {
                setError("¡Doctor no encontrado!");
            }
        }
    }



    return(
        <div className='main-container'>
            <AppBar/>
            <div className='content'>
                <h1>
                    Doctor
                </h1>
                <button onClick={getDoctorById}>Obtener doctor</button>
            </div>
            <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        </div>
    );
}

export default Help;