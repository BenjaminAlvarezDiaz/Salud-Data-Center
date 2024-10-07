// doctor_actions.js
import axios from "axios";
import { LOGIN_SUCCESS, LOGIN_FAILURE } from '../const.js';

export function obtenerDoctores(userData){
    return async (dispatch) => {
        try {

            //Realiza la solicitud a la API 
            const response = await axios.get('http://localhost:3001/Doctors/getDoctor', userData);
            console.log("Response obtenido", response);
            const doctor = response.data;
            if (doctor) {
                //Dispara una accion de exito con los datos
                dispatch({ type: LOGIN_SUCCESS, payload: doctor });
            }else {
                // Dispara una acción de error si no encontro al doctor
                dispatch({ type: LOGIN_FAILURE, payload: "No se encontro al doctor" });
            }
            return response;

        }catch (error){
            // Dispara una acción de error si hay un problema con la solicitud
            dispatch({ type: LOGIN_FAILURE, payload: error.message });
            console.log("Response fallido");
            return error;
        }
    };
}