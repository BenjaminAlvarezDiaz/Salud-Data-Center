import axios from "axios";
import { LOGIN_SUCCESS, LOGIN_FAILURE } from '../const.js';

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