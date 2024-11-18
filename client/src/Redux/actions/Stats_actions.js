import axios from "axios";
import { GET_STONKS_SUCCESS, GET_STONKS_FAILURE } from '../const.js';

export function postProductos(userData){
    return async (dispatch) => {
        try {
            const response = await axios.post('http://localhost:3001/Productos/postProducts', {
                CategoriaId: userData.CategoriaId, 
                marca: userData.marca, 
                modelo: userData.modelo, 
                año: userData.año, 
                precio: userData.precio, 
                descripcion: userData.descripcion,
                ficha_tecnica: userData.ficha_tecnica, 
                imagenes: userData.imagenes, 
            });
            console.log("Response obtenido", response);
            const product = response.data;
            if (product) {
                //Dispara una accion de exito con los datos
                dispatch({ type: LOGIN_SUCCESS, payload: "Registro existoso" });
            }else {
                // Dispara una acción de error si no encontro al doctor
                dispatch({ type: LOGIN_FAILURE, payload: "Fallo al registrar" });
            }
            return response;
        }catch (error) {
            dispatch({ type: LOGIN_FAILURE, payload: error.message });
            console.log("Response fallido");
            return error;
        }
    };
}
export function getOrders(userData){
    return async (dispatch) => {
        try {
            console.log(userData);
            const response = await axios.get('http://localhost:3001/Order/getOrders', {
                params: {
                    estadoPedido: 'paid',
                }
              });
            console.log("Response obtenido", response);
            const orderpaids = response.data;
            if (orderpaids) {
                //Dispara una accion de exito con los datos
                dispatch({ type: GET_STONKS_SUCCESS, payload: Order });
            }else {
                // Dispara una acción de error si no encontro al doctor
                dispatch({ type: GET_STONKS_FAILURE, payload: "No se encontra Ordenes" });
            }
            return response.data;

        }catch (error){
            // Dispara una acción de error si hay un problema con la solicitud
            dispatch({ type: GET_STONKS_FAILURE, payload: error.message });
            console.log("Response fallido");
            return error;
        }
    };
}
