import { React, useState , useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getPatients } from "../redux/actions/patient_actions.js";
import '../styles/PatientProfile.css';

function PatientProfile (){
    const [patients, setPatients] = useState([]);

    const location = useLocation();
    const { patient } = location.state || {};
    //var patient = {id: null, nombre: null, apellido: null};
    var symptoms;
    var medicalFile;

    const navigate = useNavigate();
    const dispatch = useDispatch();

    /*const dispatchPatients = async (patient) => {
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
    }, []);*/

    if(patient.sintomas.length > 12 || patient.exp_Medico.length > 15){
        symptoms = patient.sintomas.slice(0, 12) + "...";
        medicalFile = patient.exp_Medico.slice(0, 12) + "...";
    }else {
        symptoms = patient.sintomas;
        medicalFile = patient.exp_Medico;
    }

    const navigateSymptoms = (patient) => {
        navigate("/patientSymptoms", {state: {patient:patient}});
    }

    const navigateMedicalFile = (patient) => {
        navigate("/patientMedicalFile", {state: {patient:patient}});
    }

    return (
        <div className="patient-profile-main-container">
            <h3>Detalles del Paciente</h3>
            <div className="patient-profile-item">
                <div className="patient-profile-item-horizontal">
                    {profileItem('person', 'Apellido:', patient.apellido)}
                    {profileItem('', 'Nombre:', patient.nombre)}
                </div>
                <div className="patient-profile-item-horizontal">
                    {profileItem('menu', 'DNI:', patient.dni)}
                    {profileItem('', 'Edad:', patient.age)}
                </div>
                {profileItem('contact_mail', 'Email:', patient.email)}
                <div className="patient-profile-item-horizontal">
                    {profileItem('phone', 'Telefono:', patient.telefono)}
                    {profileItem('', 'Telefono 2:', patient.telefono2)}
                </div>
                {profileItem('medical_services', 'Diagnostico:', patient.diagnostico)}
                {profileItem('medication', 'Tratamiento:', patient.tratamiento)}
                {profileItem('medical_information', 'Sintomas:', symptoms, 
                    <button className="patient-profile-button" onClick={() => {navigateSymptoms(patient)}}>Ver mas</button>)}
                {profileItem('medical_information', 'Expediente medico:', medicalFile, 
                    <button className="patient-profile-button" onClick={() => {navigateMedicalFile(patient)}}>Ver mas</button>)}
            </div>
        </div>
    );
}

function profileItem (icon, label, data, button){
    return (
        <div className="patient-profile-icon-data">
            <span className="material-icons patient-profile-icon">{icon}</span>
            <div className="patient-profile-data-button">
                <div className="patient-profile-data">
                    <div className="patient-profile-label">{label}</div> 
                    <div className="patient-profile-label-data">{data}</div>
                </div>
                {button? button : null}
            </div>
        </div>
    );
}

export default PatientProfile;