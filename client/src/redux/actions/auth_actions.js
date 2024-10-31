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
            } else {
                dispatch({ type: LOGIN_FAILURE, payload: "Credenciales incorrectas" });
            }

        } catch (error) {
            // Si hay un error con la solicitud se dipara por aquí
            dispatch({ type: LOGIN_FAILURE, payload: error.message });
            return error
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
            } else {
                dispatch({ type: LOGIN_FAILURE, payload: "Credenciales incorrectas" });
            }

        } catch (error) {
            // Si hay un error con la solicitud se dipara por aquí
            dispatch({ type: LOGIN_FAILURE, payload: error.message });
            return error
        }
    };
}