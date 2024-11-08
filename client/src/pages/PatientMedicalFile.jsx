import { React, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import "../styles/PatientMedicalFile.css";

function PatientMedicalFile (){
    const [patients, setPatients] = useState([]);

    const location = useLocation();
    const { patient } = location.state || {};

    const navigate = useNavigate();
    const dispatch = useDispatch();

    return (
        <div>
            <h3>Expediente medico</h3>
            <div>
                {(patient.exp_Medico)}
            </div>
        </div>
    );
}

export default PatientMedicalFile;