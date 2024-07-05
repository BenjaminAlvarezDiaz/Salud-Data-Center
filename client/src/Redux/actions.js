// actions.js
import axios from 'axios';
import { LOGIN_SUCCESS, LOGIN_FAILURE } from '../Redux/const';

export const verificarDoctorPorCredenciales = (userData) => {
  return async (dispatch) => {
    try {

      // Realiza la solicitud a la API para verificar el usuario
      const response = await axios.post('http://localhost:3001/doctors/search', userData);
     console.log("Dame el response maldito", response);
      // Verifica al doctor por matrícula y contraseña
      const doctor = response.data; // Asumiendo que la respuesta de la API es el objeto del doctor

      if (doctor) {
        // Dispara una acción de éxito con los datos del usuario si la verificación es exitosa
        dispatch({ type: LOGIN_SUCCESS, payload: doctor });
      } else {
        // Dispara una acción de error si la verificación falla
        dispatch({ type: LOGIN_FAILURE, payload: "Credenciales incorrectas" });
      }
      return  response
    } catch (error) {

      // Dispara una acción de error si hay un problema con la solicitud
      dispatch({ type: LOGIN_FAILURE, payload: error.message });
      return error
    }
  };
};

export const verificarEmpresaPorCredenciales = (userData) => {
  return async (dispatch) => {
    try {

      // Realiza la solicitud a la API para verificar el usuario
      const response = await axios.post('http://localhost:3001/empresas/search', userData);
     console.log("Dame el response maldito", response);
      // Verifica al doctor por matrícula y contraseña
      const empresas = response.data; // Asumiendo que la respuesta de la API es el objeto del doctor

      if (empresas) {
        // Dispara una acción de éxito con los datos del usuario si la verificación es exitosa
        dispatch({ type: LOGIN_SUCCESS, payload: empresas });
      } else {
        // Dispara una acción de error si la verificación falla
        dispatch({ type: LOGIN_FAILURE, payload: "Credenciales incorrectas" });
      }
      return  response
    } catch (error) {

      // Dispara una acción de error si hay un problema con la solicitud
      dispatch({ type: LOGIN_FAILURE, payload: error.message });
      return error
    }
  };
};