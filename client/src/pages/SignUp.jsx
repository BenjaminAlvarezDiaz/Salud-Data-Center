import { React, useState , useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import '../styles/SignUp.css';
import { postCompany } from "../redux/actions/company_actions";
import { postDoctors } from "../redux/actions/doctor_actions";

function SignUp (){
    const location = useLocation();
    const {signUpType} = location.state || {};

    //Doctor
    const [nameDoctor, setNameDoctor] = useState("");
    const [surnameDoctor, setSurnameDoctor] = useState("");
    const [matricula, setLicense] = useState("");
    const [dni, setDni] = useState("");
    var newDoctor = {};

    //Empresa
    const [name, setNameCompany] = useState("");
    const [contact, setContact] = useState("");;
    const [logo, setLogo] = useState("");
    const [url, setUrl] = useState("");
    var newCompany = {};

    //Doctor y empresa
    const [nombreusuario, setUsername] = useState("");
    const [nombre, setNameSurnameDoctor] = useState("");
    const [email, setEmail] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();
    const dispatch = useDispatch();

    async function signUpSubmit (e){
        if(signUpType === "doctor"){
            setNameSurnameDoctor(nameDoctor+surnameDoctor); 
        } else if (signUpType === "company"){
            setNameCompany(nameCompany);
        }
        e.preventDefault();

        newDoctor = {
            matricula: matricula, 
            nombreusuario: nombreusuario, 
            nombre: nameDoctor+surnameDoctor, 
            password: password, 
            email: email, 
            dni: dni,
        };

        newCompany = {
            name: name, 
            nombreusuario: nombreusuario, 
            password: password, 
            contact: contact, 
            logo: logo, 
            url: url,
            email: email,
        };
        
        setTimeout(() => {
            dispatch(signUpType === "doctor"? postDoctors(newDoctor) : 
            postCompany(newCompany))
            .then(() => {
                if (signUpType === "doctor") {
                    navigate("/Perfil");
                } else if (signUpType === "company") {
                    navigate("/PerfilEmp");
                }
            })
            .catch((error) => {
                console.error("Error al verificar usuario:", error);
                if (error.response && error.response.status === 404) {
                    alert("No existe un doctor con esas credenciales.");
                }
            });
        }, "0");
        
    }

    console.log(location.state);
 
    return (
        <div>
            {signUpType === "doctor"? (
                doctorForm(
                    signUpSubmit,
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
                    setConfirmPassword
                    )
                ) : 
                signUpType === "company"? (
                    (companyForm(
                        signUpSubmit,
                        logo,
                        nombre, 
                        contact,
                        url,
                        nombreusuario, 
                        email, 
                        password, 
                        confirmPassword,
                        )
                    )
                ) : null
            }
        </div>
    );
}

function doctorForm (
    signUpSubmit,
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
        <div className="sign-up-main-container-horizontal">
                <img className="sign-up-image-doctor" src="src\assets\doctor.jpg"/>
                <div className="sign-up-main-container">
                    <div className="sign-up-main-container">
                        <div className="salud-data-center">Salud Data Center</div>
                        <h2 className="sign-up-get-started">Empecemos</h2>
                        <div className="inputs-container">
                            <form onSubmit={signUpSubmit} className="sign-up-login-form">
                            {/*Nombre y apellido */}
                            <div className="input-two-data">
                            <input
                                className="data-name-surname"
                                placeholder="Nombre"
                                type="text"
                                value={nameDoctor}
                                onChange={(e) => setNameDoctor(e.target.value)}
                                required
                            />
                            <div className="sign-up-sized-box"/>
                            <input
                                className="data-name-surname"
                                placeholder="Apellidos"
                                type="text"
                                value={surnameDoctor}
                                onChange={(e) => setSurnameDoctor(e.target.value)}
                                required
                            />
                        </div>
                        {/*Matricula y DNI */}
                        <div className="input-two-data">
                            <input
                                className="data-license-dni"
                                placeholder="Matricula"
                                type="number"
                                min={"0"}
                                max={"999999"}
                                value={matricula}
                                onChange={(e) => setLicense(e.target.value)}
                                required
                            />
                        <div className="sign-up-sized-box"/>
                            <input
                                className="data-license-dni"
                                placeholder="DNI"
                                type="number"
                                min={"10000000"}
                                max={"99999999"}
                                value={dni}
                                onChange={(e) => setDni(e.target.value)}
                                required
                            />
                        </div>
                        {/*Nombre de usuario */}
                        <input
                            className="data"
                            placeholder="Nombre de usuario"
                            type="text"
                            value={nombreusuario}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                        {/*Email */}
                        <input
                            className="data"
                            htmlFor="email"
                            placeholder="Correo electronico"
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        {/*Contraseña */}
                        <input
                            className="data"
                            htmlFor="password"
                            placeholder="Contraseña"
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        {/*Confirmar contraseña */}
                        <input
                            className="data"
                            htmlFor="password"
                            placeholder="Confirmar contraseña"
                            type="password"
                            id="confirmPassword"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                        />
                        <div><input type="checkbox"/> Aceptar terminos y condiciones</div>
                        <button className="sign-up-accept-button" type="submit">Crear cuenta</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

function companyForm (
    signUpSubmit,
    logo,
    nameCompany, 
    contact,
    url,
    nombreusuario, 
    email, 
    password, 
    confirmPassword){
        console.log("yo");
    return (
        <div className="sign-up-main-container-horizontal">
                <img className="sign-up-image-doctor" src="src\assets\doctor.jpg"/>
                <div className="sign-up-main-container">
                    <div className="sign-up-main-container">
                        <div className="salud-data-center">Salud Data Center</div>
                        <h2 className="sign-up-get-started">Empecemos</h2>
                        <div className="inputs-container">
                            <form onSubmit={signUpSubmit} className="sign-up-login-form">
                        {/*Nombre de empresa */}
                        <input
                            className="data"
                            placeholder="logo"
                            type="text"
                            value={logo}
                            onChange={logo}
                            required
                        />
                        {/*Nombre de empresa */}
                        <input
                            className="data"
                            placeholder="Nombre de la empresa"
                            type="text"
                            value={nameCompany}
                            onChange={nameCompany}
                            required
                        />
                        {/*Contacto de empresa */}
                        <input
                            className="data"
                            placeholder="Contacto"
                            type="text"
                            value={contact}
                            onChange={contact}
                            required
                        />
                        {/*Url de empresa */}
                        <input
                            className="data"
                            placeholder="Url"
                            type="text"
                            value={url}
                            onChange={url}
                            required
                        />
                        
                        {/*Nombre de usuario */}
                        <input
                            className="data"
                            placeholder="Nombre de usuario"
                            type="text"
                            value={nombreusuario}
                            onChange={nombreusuario}
                            required
                        />
                        {/*Email */}
                        <input
                            className="data"
                            htmlFor="email"
                            placeholder="Correo electronico"
                            type="email"
                            id="email"
                            value={email}
                            onChange={email}
                            required
                        />
                        {/*Contraseña */}
                        <input
                            className="data"
                            htmlFor="password"
                            placeholder="Contraseña"
                            type="password"
                            id="password"
                            value={password}
                            onChange={password}
                            required
                        />
                        {/*Confirmar contraseña */}
                        <input
                            className="data"
                            htmlFor="password"
                            placeholder="Confirmar contraseña"
                            type="password"
                            id="confirmPassword"
                            value={confirmPassword}
                            onChange={confirmPassword}
                            required
                        />
                        <div><input type="checkbox"/> Aceptar terminos y condiciones</div>
                        <button className="sign-up-accept-button" type="submit">Crear cuenta</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignUp;