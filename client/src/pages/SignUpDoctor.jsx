import { React, useState , useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { postDoctors } from "../redux/actions/doctor_actions";
import '../styles/SignUpDoctor.css';

function SignUpDoctor (){

    //Datos personales
    const [nameDoctor, setNameDoctor] = useState("");
    const [surnameDoctor, setSurnameDoctor] = useState("");
    const [matricula, setLicense] = useState("");
    const [dni, setDni] = useState("");

    //Datos 
    const [nombreusuario, setUsername] = useState("");
    const [nombre, setNameSurnameDoctor] = useState("");
    const [email, setEmail] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [password, setPassword] = useState("");

    var newDoctor = {};

    const [nextData, setNextData] = useState(false);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    function signUpSubmit (){
        newDoctor = {
            matricula: matricula, 
            nombreusuario: nombreusuario, 
            nombre: nameDoctor+surnameDoctor, 
            password: password, 
            email: email, 
            dni: dni,
        };

        dispatch(postDoctors(newDoctor)
        )
        .then(() => {
            if(matricula && nombreusuario && nombre && password && email && dni){
                //navigate("/patients");
            }
        })
        .catch((error) => {
            console.error("Error al verificar usuario:", error);
            if (error.response && error.response.status === 404) {
                alert("No existe un doctor con esas credenciales.");
            }
        });
    }

    function backButtonOnClick (){
        navigate(-1);
    }

    function nextButtonOnClick (){
        setNextData(true);
    }

    return (
        doctorForm(
            nextData,
            signUpSubmit,
            backButtonOnClick,
            nextButtonOnClick,
            nameDoctor, 
            surnameDoctor, 
            matricula, 
            dni, 
            nombreusuario, 
            email, 
            password, 
            confirmPassword,
            setNameDoctor,
            setSurnameDoctor,
            setLicense,
            setDni,
            setUsername,
            setEmail,
            setPassword,
            setConfirmPassword,
        )
    );
}

function doctorForm (
    nextData,
    signUpSubmit,
    backButtonOnClick,
    nextButtonOnClick,
    nameDoctor, 
    surnameDoctor, 
    matricula, 
    dni, 
    nombreusuario, 
    email, 
    password, 
    confirmPassword,
    setNameDoctor,
    setSurnameDoctor,
    setLicense,
    setDni,
    setUsername,
    setEmail,
    setPassword,
    setConfirmPassword){
    return (
        <div className="doctor-sign-up-main-container-horizontal">
                <img className="sign-up-image-doctor" src="src\assets\doctor.jpg"/>
                <div className="doctor-sign-up-main-container">
                    <div className="doctor-sign-up-main-container">
                        {(headers(backButtonOnClick))}
                        <div className="doctor-inputs-container">
                            <form onSubmit={signUpSubmit} className="doctor-sign-up-login-form">
                            { !nextData && (basicDataDoctor(
                                nextData,
                                surnameDoctor, 
                                nameDoctor, 
                                matricula, 
                                dni, 
                                setSurnameDoctor,
                                setNameDoctor,
                                setLicense,
                                setDni,
                            ))}

                            {!nextData && (advancedDataDoctor (
                                nombreusuario,
                                email,
                                password,
                                confirmPassword,
                                setUsername,
                                setEmail,
                                setPassword,
                                setConfirmPassword
                            ))}

                            <div>
                                <div><input type="checkbox"/> Aceptar terminos y condiciones</div>
                                <div className="doctor-sign-up-sized-box-vertical"/>
                                <button className="doctor-sign-up-accept-button" type="submit">Crear cuenta</button>
                            </div>
                        {/*(
                            
                        )*/}
                        {(<div>
                        </div>)}
                        </form>
                        {/*<div className="doctor-sign-up-sized-box-vertical"/>
                        <button className="doctor-sign-up-button-next" >Siguiente</button>*/}
                    </div>
                </div>
            </div>
        </div>
    );
}

function headers (){
    return (
        <div className="doctor-sign-up-main-container">
            <div className="salud-data-center">Salud Data Center</div>
            <h2 className="doctor-sign-up-get-started">Empecemos entonces!</h2>
        </div>
    );
}

function basicDataDoctor (
    nextData,
    surnameDoctor, 
    nameDoctor, 
    matricula, 
    dni, 
    setSurnameDoctor,
    setNameDoctor,
    setLicense,
    setDni
    ){
    return (
        <div>
            <div className="doctor-sign-up-login-form">
                {/*Nombre y apellido */}
                <div className="doctor-input-two-data">
                    <input
                        className="doctor-data-name-surname"
                        placeholder="Apellidos"
                        type="text"
                        value={surnameDoctor}
                        onChange={(e) => setSurnameDoctor(e.target.value)}
                        required
                    />
                    {!surnameDoctor && nextData && (<div>Surname vacioooooooo</div>)}
                <div className="doctor-sign-up-sized-box-horizontal"/>
                    <input
                        className="doctor-data-name-surname"
                        placeholder="Nombre"
                        type="text"
                        value={nameDoctor}
                        onChange={(e) => setNameDoctor(e.target.value)}
                        required
                    />
                </div>
                {/*Matricula y DNI */}
                <div className="doctor-input-two-data">
                    <input
                        className="doctor-data-name-surname"
                        placeholder="Matricula"
                        type="number"
                        min={"0"}
                        max={"999999"}
                        value={matricula}
                        onChange={(e) => setLicense(e.target.value)}
                        required
                    />
                    <div className="doctor-sign-up-sized-box-horizontal"/> 
                    <input
                        className="doctor-data-name-surname"
                        placeholder="DNI"
                        type="number"
                        min={"10000000"}
                        max={"99999999"}
                        value={dni}
                        onChange={(e) => setDni(e.target.value)}
                        required
                    />
                </div>
            </div>
        </div>
    );
}

function advancedDataDoctor (
    nombreusuario,
    email,
    password,
    confirmPassword,
    setUsername,
    setEmail,
    setPassword,
    setConfirmPassword
){
    return (
        <div>
            <div className="doctor-sign-up-login-form">
                <input
                    className="doctor-data"
                    placeholder="Nombre de usuario"
                    type="text"
                    value={nombreusuario}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
        
                <input
                    className="doctor-data"
                    htmlFor="email"
                    placeholder="Correo electronico"
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                        
                <input
                    className="doctor-data"
                    htmlFor="password"
                    placeholder="Contraseña"
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />

                <input
                    className="doctor-data"
                    htmlFor="password"
                    placeholder="Confirmar contraseña"
                    type="password"
                    id="confirmPassword"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                />
            </div>
        </div>
    );
}

export default SignUpDoctor;