import { React, useState , useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { postPatients } from "../redux/actions/patient_actions.js";
import { postRecords } from "../redux/actions/record_actions.js";
import '../styles/PatientCreate.css';

function PatientCreate (){
    const location = useLocation();
    const { doctorasignado } = location.state || {};
    const [nextButton, setNextButton] = useState(false);
    const [noDataInput, setNoDataInput] = useState(false);
    var newPatient = {};
    var newRecord = {};

    const [nombre, setName] = useState('');
    const [apellido, setSurname] = useState('');
    const [dni, setDni] = useState('');
    const [age, setAge] = useState('');
    const [email, setEmail] = useState('');
    const [telefono, setPhone] = useState(''); 
    const [telefono2, setPhone2] = useState(''); 

    const [tratamiento, setTreatment] = useState(''); 
    const [indicaciones, setIndications] = useState('');
    const [sintomas, setSymptoms] = useState('');
    const [diagnostico, setDiagnosis] = useState('');
    const [exp_Medico, setMedicalFile] = useState('');
    const [fechaemision, setIssueDate] = useState('');
    const [razondevisita, setReasonForVisit] = useState('');

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const createPatient = async (e) => {
        e.preventDefault();

        const date = new Date();
        const currentDate = date.toLocaleDateString();

        newPatient = {
            nombre: nombre,
            apellido: apellido,
            dni: dni,
            age: age,
            email: email,
            telefono: telefono,
            telefono2: telefono2,
            sintomas: sintomas,
            tratamiento: tratamiento,
            diagnostico: diagnostico,
            exp_Medico: exp_Medico,
        };

        newRecord = {
            nombrepaciente: apellido + " " + nombre,
            doctorasignado: "Martinez",
            fechaemision: currentDate,
            razondevisita: sintomas,
            tratamiento: tratamiento,
            indicaciones: indicaciones,
        };

        if(diagnostico && exp_Medico && sintomas && tratamiento && indicaciones){
            //Solo cuando los datos estan seteados se manda el post
            setNoDataInput(false);
            dispatch(postRecords(newRecord));
            dispatch(postPatients(newPatient));
            navigate('/patientProfile');

        } else if(!diagnostico && !exp_Medico && !doctorasignado && !sintomas && !tratamiento && !indicaciones) {
            setNoDataInput(true);
        }

    }

    function nextButtonOnClick (e){
        e.preventDefault();
        if(!nombre && !apellido && !dni && !age && !email && !telefono && !telefono2){
            setNoDataInput(true);
        } else if (nombre && apellido && dni && age && email && telefono && telefono2){
            setNoDataInput(false);
            setNextButton(true);
        }
    }

    function backButtonOnClick (e){
        e.preventDefault();
        navigate(-1);
    }

    return (
        <div className="patient-create-main-container">
            <h2>Nuevo Paciente</h2>
            <form onSubmit={createPatient} className="patient-create-form">
                {!nextButton && (basicDataPatient(
                    noDataInput,
                    nombre,
                    apellido,
                    dni,
                    age,
                    email,
                    telefono,
                    telefono2,
                    setName,
                    setSurname,
                    setDni,
                    setAge,
                    setEmail,
                    setPhone,
                    setPhone2))}
                {!nextButton && (
                    <div className="patient-create-next-back">
                        <button className="patient-create-button" type="button" onClick={backButtonOnClick}>
                            Atras
                        </button>
                        <button className="patient-create-button" type="button" onClick={nextButtonOnClick}>
                            Siguiente
                        </button>
                    </div>)}
                {nextButton && (advancedDataPatient(
                    noDataInput,
                    tratamiento,
                    indicaciones,
                    sintomas,
                    diagnostico,
                    exp_Medico,
                    fechaemision,
                    razondevisita,
                    setTreatment,
                    setIndications,
                    setSymptoms,
                    setDiagnosis,
                    setMedicalFile,
                    setIssueDate,
                    setReasonForVisit,
                ))}
                {nextButton && (
                    <div className="patient-create-next-back">
                        <button className="patient-create-button" type="button" onClick={backButtonOnClick}>Atras</button>
                        <button className="patient-create-button" type="submit">Registrar</button>
                    </div>)}
            </form>
        </div>
    );
}

function basicDataPatient (
    noDataInput, 
    name,
    surname,
    dni,
    age,
    email,
    phone,
    phone2,
    setName,
    setSurname,
    setDni,
    setAge,
    setEmail,
    setPhone,
    setPhone2,
){
    return (
        <div className="patient-create-form">
            <input
                className="patient-create-input"
                placeholder="Nombre"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}    
            />
            {noDataInput && !name &&
                    (<div className="patient-create-inputs-error">¡Campo vacio!</div>)}
            <input
                className="patient-create-input"
                placeholder="Apellido"
                type="text"
                value={surname}
                onChange={(e) => setSurname(e.target.value)}    
            />
            {noDataInput && !surname &&
                    (<div className="patient-create-inputs-error">¡Campo vacio!</div>)}
            <div className="patient-create-dni-age">
                <div className="patient-create-dni-age-colum">
                    <input
                        className="patient-create-input-two"
                        placeholder="DNI"
                        type="number"
                        value={dni}
                        onChange={(e) => setDni(e.target.value)}    
                    />
                    {noDataInput && !dni &&
                        (<div className="patient-create-inputs-error">¡Campo vacio!</div>)}
                </div>
                <div className="patient-create-dni-age-colum">
                    <input
                        className="patient-create-input-two"
                        placeholder="Edad"
                        type="number"
                        value={age}
                        onChange={(e) => setAge(e.target.value)}    
                    />
                    {noDataInput && !age &&
                        (<div className="patient-create-inputs-error">¡Campo vacio!</div>)}
                </div>
            </div>
            <input
                className="patient-create-input"
                placeholder="Email"
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}    
            />
            {noDataInput && !email &&
                    (<div className="patient-create-inputs-error">¡Campo vacio!</div>)}
            <input
                className="patient-create-input"
                placeholder="Telefono"
                type="number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}    
            />
            {noDataInput && !phone &&
                    (<div className="patient-create-inputs-error">¡Campo vacio!</div>)}
            <input
                className="patient-create-input"
                placeholder="Telefono 2"
                type="number"
                value={phone2}
                onChange={(e) => setPhone2(e.target.value)}    
            />
            {noDataInput && !phone2 &&
                    (<div className="patient-create-inputs-error">¡Campo vacio!</div>)}
        </div>
    );
}

function advancedDataPatient (
    noDataInput, 
    treatment,
    indications,
    symptoms,
    diagnosis,
    medicalFile,
    issueDate,
    reasonForVisit,
    setTreatment,
    setIndications,
    setSymptoms,
    setDiagnosis,
    setMedicalFile,
    setIssueDate,
    setReasonForVisit,
){
    return (
        <div className="patient-create-advanced-form">
            <input
                className="patient-create-input"
                placeholder="Tratamiento"
                type="text"
                value={treatment}
                onChange={(e) => setTreatment(e.target.value)}    
            />
            {noDataInput && !treatment &&
                    (<div className="patient-create-inputs-error">¡Campo vacio!</div>)}
            <input
                className="patient-create-input"
                placeholder="Indicaciones"
                type="text"
                value={indications}
                onChange={(e) => setIndications(e.target.value)}    
            />
            {noDataInput && !indications &&
                    (<div className="patient-create-inputs-error">¡Campo vacio!</div>)}
            <input
                className="patient-create-input"
                placeholder="Sintomas"
                type="text"
                value={symptoms}
                onChange={(e) => setSymptoms(e.target.value)}    
            />
            {noDataInput && !symptoms &&
                    (<div className="patient-create-inputs-error">¡Campo vacio!</div>)}
            <input
                className="patient-create-input"
                placeholder="Diagnostico"
                type="text"
                value={diagnosis}
                onChange={(e) => setDiagnosis(e.target.value)}    
            />
            {noDataInput && !diagnosis &&
                    (<div className="patient-create-inputs-error">¡Campo vacio!</div>)}
            <input
                className="patient-create-input"
                placeholder="Expediente medico"
                type="text"
                value={medicalFile}
                onChange={(e) => setMedicalFile(e.target.value)}    
            />
            {noDataInput && !medicalFile &&
                    (<div className="patient-create-inputs-error">¡Campo vacio!</div>)}
        </div>
    );
}

export default PatientCreate;