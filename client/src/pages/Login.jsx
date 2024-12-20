import { React, useState , useEffect } from "react";
import { useDispatch } from "react-redux";
import "../styles/Login.css";
import { useNavigate } from "react-router-dom";
import LoginForm from "../components/LoginForm/LoginForm";
import FacebookLoginButton from "../components/FacebookLoginButton/FacebookLoginButton";
import GoogleLoginButton from "../components/GoogleLoginButton/GoogleLoginButton";
import { authCompany, authDoctor } from "../redux/actions/auth_actions";
import { LOGIN_SUCCESS, LOGIN_FAILURE } from "../redux/const";

function Login(){
    const [showAuthContainer, setShowAuthContainer] = useState(false);
    const [loginType, setLoginType] = useState(null);
    var email = "";
    var password = "";
    const [signUpPage, setSignUpPage] = useState('');
    const [signUpPageOptions, setSignUpPageOptions] = useState({});

    const navigate = useNavigate();
    const dispatch = useDispatch();

    function buttonClick (type){
        setShowAuthContainer(true);
        setLoginType(type);
        if(type === "doctor"){
            setSignUpPage("/signupdoctor");
            setSignUpPageOptions({state: null});
        } else if (type === "company") {
            setSignUpPage("/signupcompany");
            setSignUpPageOptions({state: null});
        }
    }

    function buttonBackClick (){
        setShowAuthContainer(false);
        setLoginType(null);
    }

    function buttonLoginClick (emailValue, passwordValue){
        email = emailValue
        password = passwordValue;
        console.log(emailValue);
        //cambiar verificarDoctorPorCredenciales
        dispatch(
            loginType === "doctor"? authDoctor({ email, password }) 
            : loginType === "company"? authCompany({ email, password }) : null 
        )
        .then((result) => {
            if (result.type === LOGIN_SUCCESS) {
                if (loginType === "doctor") {
                    navigate("/patients");
                } else if (loginType === "company") {
                    navigate("/products");
                }
            } else if (result.type === LOGIN_FAILURE) {
                console.error("Error al verificar usuario:", result.payload);
                alert(result.payload || "Credenciales incorrectas.");
            }
        })
        .catch((error) => {
            console.error("Error inesperado:", error);
        });
    }

    return (
        <div className="login-main-container">
            <div className="salud-data-center">Salud Data Center</div>

            {!showAuthContainer && (
                <main className={`entry-container ${showAuthContainer ? 'slide-up' : 'slide-in'}`}>
                <h2>¿Como desea ingresar?</h2>
                <div className="buttons">
                    <button className="login-button" onClick={() => buttonClick("doctor")}>Profesional medico</button>
                    <div className="buttons-divider"/>
                    <button className="login-button" onClick={() => buttonClick("company")}>Empresa</button>
                    <div className="buttons-divider"/>
                </div>
                </main>
            )}

            {showAuthContainer && (
                <div className= {`auth-container ${showAuthContainer ? 'slide-in' : 'slide-up'}`}>
                    <h2>Bienvenido</h2>
                    <LoginForm onSubmit={buttonLoginClick} createAccountPage={signUpPage} createAccountPageOptions={signUpPageOptions}/>
                    <div className='separators'>
                        <div className='sized-box'/>
                        o
                        <div className='sized-box'/>
                    </div>
                    <div className="quick-access">
                        <GoogleLoginButton/>
                        <div className='divider'/>
                        <FacebookLoginButton/>
                        <div className='divider'/>
                        <div className='legal-info'>
                            <div className='terms-and-politics'>Terminos de uso</div>
                            <div className='divider-vertical'/>
                            <div className='terms-and-politics'>Politica de privacidad</div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Login;