import axios from "axios";
import { LOGIN_SUCCESS, LOGIN_FAILURE } from '../const';

export function postCompany(userData){
    return async (dispatch) => {
        try {
            const response = await axios.post('http://localhost:3001/Company/createCompany', {
                name: userData.name, 
                nombreusuario: userData.nombreusuario, 
                password: userData.password, 
                contact: userData.contact, 
                logo: userData.logo, 
                url: userData.url,
                email: userData.email,
            });
            console.log("Response obtenido", response.data);
            const company = response.data;
            if (company) {
                //Dispara una accion de exito con los datos
                dispatch({ type: LOGIN_SUCCESS, payload: company });
            }else {
                // Dispara una acción de error si no encontro la empresa
                dispatch({ type: LOGIN_FAILURE, payload: "No se encontro la empresa" });
            }
            return response;
        }catch (error) {
            dispatch({ type: LOGIN_FAILURE, payload: error.message });
            console.log("Response fallido");
            return error;
        }
    };
}