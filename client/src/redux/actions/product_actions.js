// doctor_actions.js
import axios from "axios";
import { 
    GET_PRODUCTS_SUCCESS, 
    GET_PRODUCTS_FAILURE,
    POST_PRODUCTS_SUCCESS,
    POST_PRODUCTS_FAILURE
} from '../const';

export function getProducts (userData){
    return async (dispatch) => {
        try {

            const response = await axios.get('http://localhost:3001/Product/getProducts', {
                params: {
                  id: userData.id,
                }
              });
            console.log("Response obtenido", response);
            const product = response.data;
            if (product) {
                //Dispara una accion de exito con los datos
                dispatch({ type: GET_PRODUCTS_SUCCESS, payload: product });
            }else {
                // Dispara una acción de error si no encontro al producto
                dispatch({ type: GET_PRODUCTS_FAILURE, payload: "No se encontro al producto" });
            }
            return response;
        } catch (error){
            // Dispara una acción de error si hay un problema con la solicitud
            dispatch({ type: GET_PRODUCTS_FAILURE, payload: error.message });
            console.log("Response fallido");
            return error;
        }
    }
}

export function postProducts (userData){
    return async (dispatch) => {
        try {
            
            const response = await axios.post('http://localhost:3001/Product/postProducts', {
                CategoriaId: userData.CategoriaId,
                marca: userData.marca,
                modelo: userData.modelo,
                anio: userData.anio,
                precio: userData.precio,
                descripcion: userData.descripcion,
                ficha_tecnica: userData.ficha_tecnica,
                imagenes: userData.imagenes,
            });
            console.log("Response obtenido", response);
            const product = response.data;
            if (product) {
                //Dispara una accion de exito con los datos
                dispatch({ type: POST_PRODUCTS_SUCCESS, payload: product });
            }else {
                // Dispara una acción de error si no se crea al producto
                dispatch({ type: POST_PRODUCTS_FAILURE, payload: "No se creo al producto" });
            }
            return response;
        } catch (error){
            // Dispara una acción de error si hay un problema con la solicitud
            dispatch({ type: POST_PRODUCTS_FAILURE, payload: error.message });
            console.log("Response fallido");
            return error;
        }
    }
}