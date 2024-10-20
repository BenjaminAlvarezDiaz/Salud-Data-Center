// doctor_actions.js
import axios from "axios";
import { LOGIN_SUCCESS, LOGIN_FAILURE } from '../const';

export function getDoctors(userData){
    return async (dispatch) => {
        try {
            //console.log(userData);
            //Realiza la solicitud a la API 
            const response = await axios.get('http://localhost:3001/Doctors/getDoctor', {
                params: {
                  id: userData.id,
                }
              });
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

export function postDoctors(userData){
    return async (dispatch) => {
        try {
            const response = await axios.post('http://localhost:3001/Doctors/createDoctor', {
                matricula: userData.matricula, 
                nombreusuario: userData.nombreusuario, 
                nombre: userData.nombre, 
                password: userData.password, 
                email: userData.email, 
                dni: userData.dni,
            });
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
        }catch (error) {
            dispatch({ type: LOGIN_FAILURE, payload: error.message });
            console.log("Response fallido");
            return error;
        }
    };
}

export function deleteDoctor(userData){
    return async (dispatch) => {
        try {
            const response = await axios.delete('http://localhost:3001/Doctors/deleteDoctor',
                {
                    params: {
                        id: userData.id,
                    }
                }
            );
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
        }catch (error) {
            dispatch({ type: LOGIN_FAILURE, payload: error.message });
            console.log("Response fallido");
            return error;
        }
    }
}