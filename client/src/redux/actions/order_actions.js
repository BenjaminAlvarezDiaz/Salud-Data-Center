import axios from "axios";
import { 
    GET_ORDERS_SUCCESS,
    GET_ORDERS_FAILURE,
    POST_ORDERS_SUCCESS,
    POST_ORDERS_FAILURE,
    PUT_ORDERS_SUCCESS,
    PUT_ORDERS_FAILURE
} from '../const';

export function getOrders (userData){
    return async (dispatch) => {
        try {
            const response = await axios.get('http://localhost:3001/Orders/getOrders', {
                params: {
                    id: userData.id,
                    estadopedido: userData.estadopedido,
                }
            });
            console.log("Response obtenido", response);
            const order = response.data;
            if (order) {
                //Dispara una accion de exito con los datos
                dispatch({ type: GET_ORDERS_SUCCESS, payload: order });
            }else {
                // Dispara una acción de error si no encontro al pedido
                dispatch({ type: GET_ORDERS_FAILURE, payload: "No se encontro pedido" });
            }
            return response.data;

        } catch (error) {
            // Dispara una acción de error si hay un problema con la solicitud
            dispatch({ type: GET_ORDERS_FAILURE, payload: error.message });
            console.log("Response fallido");
            return error;
        }
    }
}

export function postOrders (userData){
    return async (dispatch) => {
        try {
            const response = await axios.post('http://localhost:3001/Orders/postOrders', {
                
            });

            console.log("Response obtenido", response);
            const order = response.data;
            if (order) {
                //Dispara una accion de exito con los datos
                dispatch({ type: POST_ORDERS_SUCCESS, payload: order });
            }else {
                // Dispara una acción de error si no se creo el pedido
                dispatch({ type: POST_ORDERS_FAILURE, payload: "No se creo el pedido" });
            }
            return response.data;

        } catch (error) {
            // Dispara una acción de error si hay un problema con la solicitud
            dispatch({ type: POST_ORDERS_FAILURE, payload: error.message });
            console.log("Response fallido");
            return error;
        }
    }
}

export function putOrders (userData){
    return async (dispatch) => {
        try {
            const response = await axios.put('http://localhost:3001/Orders/updateOrders', {
                estadoPedido: userData.estadoPedido,
            }, {params: {id: userData.id}});
            console.log("Response obtenido", response);
            const order = response.data;
            if (order) {
                //Dispara una accion de exito con los datos
                dispatch({ type: PUT_ORDERS_SUCCESS, payload: order });
            }else {
                // Dispara una acción de error si no encontro al pedido
                dispatch({ type: PUT_ORDERS_FAILURE, payload: "No se encontro al pedido" });
            }
            return response.data;
        } catch (error) {
            // Dispara una acción de error si hay un problema con la solicitud
            dispatch({ type: PUT_ORDERS_FAILURE, payload: error.message });
            console.log("Response fallido");
            return error;
        }
    }
}