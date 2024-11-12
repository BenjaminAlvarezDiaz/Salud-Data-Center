import axios from "axios";
import { 
    LOGIN_SUCCESS, 
    LOGIN_FAILURE, 
    GET_PATIENTS_FAILURE, 
    GET_PATIENTS_SUCCESS,
    POST_PATIENTS_SUCCESS,
    POST_PATIENTS_FAILURE,
    PUT_PATIENTS_SUCCESS,
    PUT_PATIENTS_FAILURE,
} from '../const';

export function getPatients(userData){
    return async (dispatch) => {
        try {
            //console.log(userData);
            //Realiza la solicitud a la API 
            const response = await axios.get('http://localhost:3001/Patient/getPatients', {
                params: {
                    id: userData.id,
                    name: userData.nombre,
                    surname: userData.apellido,
                }
              });
            console.log("Response obtenido", response);
            const patient = response.data;
            if (patient) {
                //Dispara una accion de exito con los datos
                dispatch({ type: GET_PATIENTS_SUCCESS, payload: patient });
            }else {
                // Dispara una acción de error si no encontro al paciente
                dispatch({ type: GET_PATIENTS_FAILURE, payload: "No se encontro al paciente" });
            }
            return response.data;

        }catch (error){
            // Dispara una acción de error si hay un problema con la solicitud
            dispatch({ type: GET_PATIENTS_FAILURE, payload: error.message });
            console.log("Response fallido");
            return error;
        }
    }
}

export function postPatients(userData){
    return async (dispatch) => {
        try {
            const response = await axios.post('http://localhost:3001/Patient/postPatients', {
                nombre: userData.nombre,
                apellido: userData.apellido,
                dni: userData.dni,
                age: userData.age,
                email: userData.email,
                telefono: userData.telefono,
                telefono2: userData.telefono2,
                sintomas: userData.sintomas,
                tratamiento: userData.tratamiento,
                diagnostico: userData.diagnostico,
                exp_Medico: userData.exp_Medico,
            });
            console.log("Response obtenido", response.data);
            const patient = response.data;
            if (patient) {
                //Dispara una accion de exito con los datos
                dispatch({ type: POST_PATIENTS_SUCCESS, payload: patient });
            }else {
                console.log("MIAUUUUUUUUUUUUUUUU");
                // Dispara una acción de error si no encontro al paciente
                dispatch({ type: POST_PATIENTS_FAILURE, payload: "No se encontro al paciente" });
            }
            console.log("MIAUUUUUUUUUUUUUUUU");
            return response;
        }catch (error) {
            dispatch({ type: POST_PATIENTS_FAILURE, payload: error.message });
            console.log("Response fallido");
            return error;
        }
    }
}

export function putPatients(userData){
    console.log(userData.id);
    return async (dispatch) => {
        try {
            const response = await axios.put('http://localhost:3001/Patient/updatePatients', {
                nombre: userData.nombre,
                apellido: userData.apellido,
                dni: userData.dni,
                age: userData.age,
                email: userData.email,
                telefono: userData.telefono,
                telefono2: userData.telefono2,
                sintomas: userData.sintomas,
                tratamiento: userData.tratamiento,
                diagnostico: userData.diagnostico,
                exp_Medico: userData.exp_Medico,
                suggestProduct: userData.suggestProduct,
            }, {params: {id: userData.id}});
            console.log("Response obtenido", response);
            const patient = response.data;
            if (patient) {
                //Dispara una accion de exito con los datos
                dispatch({ type: PUT_PATIENTS_SUCCESS, payload: patient });
            }else {
                // Dispara una acción de error si no encontro al paciente
                dispatch({ type: PUT_PATIENTS_SUCCESS, payload: "No se encontro al paciente" });
            }
            return response;
            
        } catch (error) {
            dispatch({ type: PUT_PATIENTS_FAILURE, payload: error.message });
            console.log("Response fallido");
            return error;
        }
    }
}