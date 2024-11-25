import React, {useState} from 'react';
import AppBar from '../components/AppBar/AppBar';
import Sidebar from '../components/SideBar/Sidebar';
import SearchBox from '../components/SearchBox/SearchBox'
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
        <div className='help-main-container'>
            <AppBar 
                content={<SearchBox placeHolder={"Buscar"}/>}
                contentRight={<div className='help-icon-right'>
                    <span className='material-icons icon-app-bar'>notifications</span>
                </div>}
                iconRight={<span className='material-icons icon-app-bar'>store</span>}
            />
            <div className='help-content'>
                <div className='help-content-left'>
                    <h2>¿Surgio algún problema o sugerencia?</h2>
                    <div className='help-content-left-label-contact'>¡Contactanos!</div>
                    {(<FormHelp/>)}
                    <h3>Preguntas frecuentes:</h3>
                    <div className='help-content-left-frequently-questions'>
                        <a className='a'>¿Como ofrecer un producto a un cliente?</a>
                        <a className='a'>¿Como importo y exporto el historial de pedidos?</a>
                        <a className='a'>¿Como cambio el email y la contraseña?</a>
                        <a className='a'>¿Como funcionan las estadisticas?</a>
                    </div>
                </div>
                <div className='help-content-right'>
                    {(<AIChat/>)}
                </div>
            </div>
            <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        </div>
    );
}

function FormHelp (){
    return (
        <div className='help-content-left-contact'>
            <form className='help-content-form'>
                <div className='help-content-form-up'>
                    <div className='help-content-form-name-email'>
                        Tu nombre: 
                        <input className='help-content-form-name-email-input'/>
                    </div>
                    <div className='help-content-form-name-email'>
                        Tu email: 
                        <input className='help-content-form-name-email-input'/>
                    </div>
                </div>
                <div className='help-content-form-down'>
                    Tu mensaje:
                    <textarea className='help-content-form-message'/>
                </div>
            </form>
        </div>
    );
}

function AIChat (){
    return (
        <div className='help-AI-chat'>
            <div className='help-AI-chat-icon-label'>
                <div className='help-AI-icon'>
                    <span className="material-symbols-outlined AI-icon">network_intelligence</span>
                </div>
                Asistente Virtual
            </div>
            <div className='help-AI-icon-label'>
                <span className='material-icons AI-icon'>report</span>
                ¡En desarrollo!
            </div>
        </div>
    );
}

export default Help;