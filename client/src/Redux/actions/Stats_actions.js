import axios from "axios";
import { GET_STONKS_SUCCESS, GET_STONKS_FAILURE } from '../const.js';

export function getOrders(userData) {
    return async (dispatch) => {
        try {
            console.log("Parámetros enviados:", userData);
            const response = await axios.get("http://localhost:3001/Order/getOrders", {
                params: {
                    estadoPedido: userData.estadoPedido,
                },
            });
            console.log("Response obtenido:", response);

            const orderpaid = response.data; 
            if (orderpaid) {
                dispatch({ type: GET_STONKS_SUCCESS, payload: orderpaid });
            } else {
                dispatch({
                    type: GET_STONKS_FAILURE,
                    payload: "No se encontraron órdenes",
                });
            }
            return orderpaid; 
        } catch (error) {
            dispatch({ type: GET_STONKS_FAILURE, payload: error.message });
            console.log("Error en la solicitud:", error);
            return error;
        }
    };
}

