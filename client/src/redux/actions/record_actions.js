import axios from "axios";
import { 
    GET_RECORDS_SUCCESS,
    GET_RECORDS_FAILURE,
    POST_RECORDS_SUCCESS,
    POST_RECORDS_FAILURE,
} from '../const';

export function postRecords (userData){
    return async (dispatch) => {
        try {
            const response = await axios.post('http://localhost:3001/Records/postRecords', {
                nombrepaciente: userData.nombrepaciente,
                dnipaciente: userData.dnipaciente,
                doctorasignado: userData.doctorasignado,
                fechaemision: userData.fechaemision,
                razondevisita: userData.razondevisita,
                tratamiento: userData.tratamiento,
                indicaciones: userData.indicaciones,
                suggestProduct: userData.suggestProduct,
            });

            console.log("Response obtenido", response);
            const record = response.data;
            if (record) {
                //Dispara una accion de exito con los datos
                dispatch({ type: POST_RECORDS_SUCCESS, payload: record });
            }else {
                // Dispara una acción de error si no se creo el registro
                dispatch({ type: POST_RECORDS_FAILURE, payload: "No se creo el registro" });
            }
            return response;

        } catch (error) {
            // Dispara una acción de error si hay un problema con la solicitud
            dispatch({ type: POST_RECORDS_FAILURE, payload: error.message });
            console.log("Response fallido");
            return error;
        }
    }
}

export function getRecords (userData){
    return async (dispatch) => {
        try {
            const response = await axios.get('http://localhost:3001/Records/getRecords', {
                params: {
                    id: userData.id,
                    dnipaciente: userData.dnipaciente,
                }
            });
            console.log("Response obtenido", response);
            const record = response.data;
            if (record) {
                //Dispara una accion de exito con los datos
                dispatch({ type: GET_RECORDS_SUCCESS, payload: record });
            }else {
                // Dispara una acción de error si no encontro al registro
                dispatch({ type: GET_RECORDS_FAILURE, payload: "No se encontro registro" });
            }
            return response.data;

        } catch (error) {
            // Dispara una acción de error si hay un problema con la solicitud
            dispatch({ type: GET_RECORDS_FAILURE, payload: error.message });
            console.log("Response fallido");
            return error;
        }
    }
}