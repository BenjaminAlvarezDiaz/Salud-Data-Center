import axios from "axios";
import { LOGIN_FAILURE, LOGIN_SUCCESS } from "../const";

export function authDoctor (userData){
    return async (dispatch) => {
        try {
            console.log(userData.password);
            const response = await axios.post('http://localhost:3001/Doctors/search', userData);;
            console.log("Response", response);
            const doctor = response.data;

            if(doctor){
                dispatch({ type: LOGIN_SUCCESS, payload: doctor });
                return { type: LOGIN_SUCCESS, payload: doctor };
            } else {
                const error = "Credenciales incorrectas";
                dispatch({ type: LOGIN_FAILURE, payload: error });
                return { type: LOGIN_FAILURE, payload: error };
            }

        } catch (error) {
            // Si hay un error con la solicitud se dipara por aquí
            dispatch({ type: LOGIN_FAILURE, payload: error.message });
            return { type: LOGIN_FAILURE, payload: error.message };
        }
    };
}

export function authCompany (userData){
    return async (dispatch) => {
        try {

            const response = await axios.post('http://localhost:3001/Company/search', userData);;
            console.log("Response", response);
            const company = response.data;

            if(company){
                dispatch({ type: LOGIN_SUCCESS, payload: company });
                return { type: LOGIN_SUCCESS, payload: company };
            } else {
                const error = "Credenciales incorrectas";
                dispatch({ type: LOGIN_FAILURE, payload: error });
                return { type: LOGIN_FAILURE, payload: error };
            }

        } catch (error) {
            // Si hay un error con la solicitud se dipara por aquí
            dispatch({ type: LOGIN_FAILURE, payload: error.message });
            return { type: LOGIN_FAILURE, payload: error.message };
        }
    };
}