import { React, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import "../styles/PatientSymptoms.css";

function PatientSymptoms (){
    const [patients, setPatients] = useState([]);

    const location = useLocation();
    const { patient } = location.state || {};

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const navigateSuggestProduct = (patient) => {
        navigate("/patientSuggestProduct", {state: {patient:patient}});
    }

    return (
        <div className="patient-symptoms-main-container">
            <h3>Descripción de sintomas</h3>
            <div className="patient-symptoms-description">
                {(patient.sintomas)}
                <button onClick={() => {navigateSuggestProduct(patient)}}>Recomendar producto</button>
            </div>
        </div>
    );
}

export default PatientSymptoms;