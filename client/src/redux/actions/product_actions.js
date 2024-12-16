// doctor_actions.js
import axios from "axios";
import { 
    GET_PRODUCTS_SUCCESS, 
    GET_PRODUCTS_FAILURE,
    POST_PRODUCTS_SUCCESS,
    POST_PRODUCTS_FAILURE
} from '../const';

export function getProductsT() {
    return async (dispatch) => {
        try {
            // Solicita todos los registros, sin parámetros
            const response = await axios.get('http://localhost:3001/Product/getProducts');
            console.log("Response obtenido", response);

            const ProductV = response.data;

            if (ProductV) {
                // Dispara una acción de éxito con todos los productos
                dispatch({ type: GET_PRODUCTS_SUCCESS, payload: ProductV });
            } else {
                // Acción de error si no se encontraron productos
                dispatch({ type: GET_PRODUCTS_FAILURE, payload: "No se encontraron productos" });
            }

            return response;
        } catch (error) {
            // Manejo de error
            dispatch({ type: GET_PRODUCTS_FAILURE, payload: error.message });
            console.error("Error al obtener productos:", error);
            return error;
        }
    };
}
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
            return product;
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