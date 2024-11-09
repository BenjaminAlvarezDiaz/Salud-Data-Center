import { React, useState , useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getPatients, postPatients } from "../redux/actions/patient_actions.js";
import '../styles/Patients.css';
import TabBar from "../components/TabBar/TabBar.jsx";

function Patients (){
    const [patients, setPatients] = useState([]);
    var patient = {id: null, nombre: null, apellido: null};
    var newPatient = {};
    const tabBarItems = [
        {href: "/doctorProfile", icon: "person"},
        {href: "/patients", icon: "group"},
        {href: "/dates", icon: "event_note"},
        {href: "/records", icon: "receipt"},
    ];

    const navigate = useNavigate();
    const dispatch = useDispatch();
    
    const dispatchPatients = async (patient) => {
        try{
            const result = await dispatch(getPatients(patient));
            setPatients(result);
        } catch(error) {
            console.error("Error al verificar usuario:", error);
            if (error.response && error.response.status === 404) {
                alert("No existe un doctor con esas credenciales.");
            }
        };
    }

    useEffect(() => {
        dispatchPatients(patient);
    }, []);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    }

    const patientCreate = () => {
        /*newPatient = {
            nombre: "Mariana",
            apellido: "Gómez",
            dni: 28576431,
            age: 30,
            email: "mariana.gomez@example.com",
            telefono: 1145678901,
            telefono2: 1156789012,
            sintomas: "Tos seca, dificultad para respirar",
            tratamiento: "Inhalador de broncodilatador y uso de aceite cannabico en la espalda",
            diagnostico: "Asma leve",
            exp_Medico: "Pruebas de función pulmonar",
        };
        dispatch(postPatients(newPatient));*/
        navigate("/createPatient", {state: null});
    }


    return (
    <div className="patients-main-container">
        <button className="patients-create-patient-button" onClick={patientCreate}>
            <span className="material-icons">add</span>
        </button>
        <div className="patients-list">
            {patients.map((item, index) => (
            <PatientCard
                key = {index}
                id = {item.id}
                patient = {item}
                name = {item.nombre}
                surname = {item.apellido}
                dni = {item.dni}
                age = {item.age}
                telefono = {item.telefono}
            />
        ))}
        </div>
        <TabBar items={tabBarItems}/>
    </div>
    );
}

function PatientCard ({id, patient, name, surname, dni, age, telefono}){
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    }

    const navigateProfile = (patient) => {
        navigate("/patientProfile", {state: {patient: patient}});
    }

    if(!isOpen){
        return (
        <div className="patient-card-short">
            <button className="patient-card-short-button" onClick={toggleDropdown}>
                <div className="patient-card-short-data">
                    {(surname + " " + name)}
                    {/*<span className="material-icons">arrow_drop_up</span>*/}
                </div>
            </button>
        </div>
        );
    } else {
        return (
            <div className="patient-card-tall">
                <button className="patient-card-tall-button" onClick={toggleDropdown}>
                    <div className="patient-card-tall-surname-name">
                        {(surname + " " + name)}
                        {/*<span className="material-icons">arrow_drop_down</span>*/}
                    </div>
                </button>
                <div className="patient-card-tall-resume">
                    <div>
                        <div className="patient-card-tall-resume-data"><span className="material-icons resume-data">cake</span>{(age)}</div>
                        <div className="patient-card-tall-resume-data"><span className="material-icons resume-data">badge</span>{(dni)}</div>
                        <div className="patient-card-tall-resume-data"><span className="material-icons resume-data">call</span>{(telefono)}</div>
                    </div>
                    <button className="patient-card-tall-button-down" onClick={() => {navigateProfile(patient)}}>
                        Ver perfil
                    </button>
                </div>
            </div>
        );
    }
}

export default Patients;