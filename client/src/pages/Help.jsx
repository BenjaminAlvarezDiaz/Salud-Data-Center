import React, {useState} from 'react';
import AppBar from '../components/AppBar/AppBar';
import Sidebar from '../components/SideBar/Sidebar';
import '../styles/Help.css';
import { getDoctors } from '../redux/actions/doctor_actions';
import { postDoctors } from '../redux/actions/doctor_actions';
import { deleteDoctor } from '../redux/actions/doctor_actions';
import { postCompany } from '../redux/actions/company_actions';
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function Help(){
    const [isSidebarOpen, setSidebarOpen] = useState(true);
    var [idDoctorSearch, setId] = useState("");
    var newDoctor = {};
    var newCompany = {};
    var idDoctorDelete;
    const toggleSidebar = () => {
        //alert('¡Me hiciste click!');
        setSidebarOpen(!isSidebarOpen);
    };

    const navigate = useNavigate();
    const dispatch = useDispatch();

    async function getDoctorFunction (e) {
        idDoctorSearch= 1;
        console.log("wryyyyyyyyyyyyyyyyyy");
        e.preventDefault();
        
        try {
            
            const response = await dispatch(getDoctors({idDoctorSearch}));
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

    async function createDoctorFunction (e) {
        e.preventDefault();
        newDoctor = {
            matricula: "so", 
            nombreusuario: "user", 
            nombre: "benja", 
            password: "123", 
            email: "benja123@gmail.com", 
            dni: 1234234,
        };
        try {
            const response = await dispatch(postDoctors(newDoctor));
            console.log("Status: " + response.status);
            if(response && response.status === 200){
                console.log("DOCTOR CREADO SATISFACTORIAMENTE");
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
                setError("¡Doctor no creado, not found!");
            }
        }
    }

    async function createCompany (e) {
        e.preventDefault();
        newCompany = {
            name: "WKB",
            nombreusuario: "WKBGroup123",
            password: 123,
            contact: "WKBGroup@support.com",
            logo: "asdasd",
            url: "WKBGroup.com",
            email: "WKBGroup@gmail.com",
        };

        try {
            const response = await dispatch(postCompany(newCompany));
            console.log("Status: " + response.status);
            if(response && response.status === 200){
                console.log("EMPRESA CREADA SATISFACTORIAMENTE");
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
                setError("¡Doctor no creado, not found!");
            }
        }
    }

    async function deleteDoctorFunction (e) {
        e.preventDefault();
        idDoctorDelete = 3;

        try {
            const response = await dispatch(deleteDoctor(idDoctorDelete));
            console.log("Status: " + response.status);
            if(response && response.status === 200){
                console.log("DOCTOR ELIMINADO SATISFACTORIAMENTE");
                console.log(response.nombre);
            }else {
                console.log("DATOS NO EXISTENTES");
            }
        }catch (error){
            console.error("Error al eliminar el doctor: ", error);
            if (error.response && error.response.status === 404) {
                setError(
                  "Error interno del servidor. Por favor, intenta de nuevo más tarde."
                );
            }else if (error.response.status === 400) {
                setError("¡Doctor no eliminado, not found!");
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
                <button onClick={getDoctorFunction}>Obtener doctor</button>
                <button onClick={createDoctorFunction}>Crear doctor</button>
                <button onClick={deleteDoctorFunction}>Eliminar doctor</button>
                <h1>
                    Empresa
                </h1>
                <button onClick={createCompany}>Crear empresa</button>
            </div>
            <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        </div>
    );
}

export default Help;