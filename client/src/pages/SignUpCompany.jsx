import { React, useState , useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { postCompany } from "../redux/actions/company_actions";
import '../styles/SignUpCompany.css';

function SignUpCompany (){

    const [name, setNameCompany] = useState("");
    const [contact, setContact] = useState("");;
    const [logo, setLogo] = useState("");
    const [url, setUrl] = useState("");
    var newCompany = {};

    const [nombreusuario, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [password, setPassword] = useState("");

    const [nextButton, setNextButton] = useState(false);
    const [noDataInput, setNoDataInput] = useState(false);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    function signUpSubmit (e){
        e.preventDefault();
        newCompany = {
            name: name, 
            nombreusuario: nombreusuario, 
            password: password, 
            contact: contact, 
            logo: logo, 
            url: url,
            email: email,
        };

        console.log(noDataInput);

        if(nombreusuario && email && password && confirmPassword){
            //Solo cuando los datos estan seteados se manda el post
            setNoDataInput(false);
            dispatch(postCompany(newCompany));
        } else if(!nombreusuario && !email && !password && !confirmPassword) {
            setNoDataInput(true);
        }
    }

    function nextButtonOnClick (e){
        e.preventDefault();
        if(!logo && !name && !url && !contact){
            setNoDataInput(true);
        } else if (logo && name && url && contact){
            setNoDataInput(false);
            setNextButton(true);
        }
        console.log("SIUUUUUUUUUUUUUUUUUUUUUU");
    }

    function backButtonOnClick (e){
        e.preventDefault();
        navigate(-1);
    }

    return (
        <div className="company-sign-up-main-container-horizontal">
            <img className="sign-up-image-company" src="src\assets\company.jpg"/>
            <div className="company-sign-up-main-container">
                <div className="company-sign-up-main-container">
                    {(headers(nextButton))}
                    <div className="company-inputs-container">
                        <form onSubmit={signUpSubmit} className="company-sign-up-login-form">
                            {!nextButton && (basicDataCompany(
                                noDataInput, 
                                logo,
                                name, 
                                url,
                                contact,
                                setLogo,
                                setNameCompany,
                                setUrl,
                                setContact))}
                            {!nextButton && (
                                <div className="company-sign-up-next-back">
                                    <button type="button" onClick={backButtonOnClick}>
                                        Atras
                                    </button>
                                    <button type="button" onClick={nextButtonOnClick}>
                                        Siguiente
                                    </button>
                                </div>)}
                            {nextButton && (advancedDataCompany(
                                noDataInput, 
                                nombreusuario,
                                email,
                                password,
                                confirmPassword,
                                setUsername,
                                setEmail,
                                setPassword,
                                setConfirmPassword))}
                            {nextButton && (
                                <div className="company-sign-up-next-back">
                                    <button type="button" onClick={backButtonOnClick}>Atras</button>
                                    <button type="submit">Crear cuenta</button>
                                </div>)}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

function headers (nextButton){
    return (
        <div className="company-sign-up-main-container">
            <div className="company-sign-up-salud-data-center">Salud Data Center</div>
            {!nextButton? 
                (<div className="company-sign-up-get-started">Empecemos entonces!</div>)
            :   (<div className="company-sign-up-get-started">Usted podrá:</div>)
            }
        </div>
    );
}

function basicDataCompany (
    noDataInput, 
    logo,
    nameCompany,
    url,
    contact,
    setLogo,
    setNameCompany,
    setUrl,
    setContact,
    ){
    return (
        <div>
            <div className="company-sign-up-login-form">
                {/*Logo de empresa */}
                <div className="company-sign-up-container-button-logo">
                    <button className="company-sign-up-button-logo">
                        {logo? 
                            (<div className="company-sign-up-photo"><span className="material-icons input-logo">upload_file</span></div>)
                            : /*Imagen subida del logo */ (<div className="company-sign-up-photo"><span className="material-icons input-logo">upload_file</span></div>)
                        }
                        {noDataInput && !logo && 
                            (<div className="company-sign-up-inputs-error-image">¡Sube tu logo!</div>)}
                        {/*(<div className="company-sign-up-container-edit">
                            <div className="company-sign-up-edit"><span className="material-icons">edit</span></div>
                        </div>)*/}
                    </button>
                    <input
                        className="company-sign-up-input-logo"
                        type="file" 
                        accept="image/*"
                        value={logo}
                        onChange={(e) => {setLogo(e.target.value)}}
                    />
                </div>
                {/*Nombre de empresa */}
                <input
                    className="company-sign-up-input"
                    placeholder="Nombre de la empresa"
                    type="text"
                    value={nameCompany}
                    onChange={(e) => setNameCompany(e.target.value)}
                />
                {noDataInput && !nameCompany &&
                    (<div className="company-sign-up-inputs-error">Campo vacio!</div>)}
                <div className="company-sign-up-url-contact">
                    {/*Url de empresa */}
                    <div className="company-sign-up-url-contact-colum">
                        <input
                            className="company-sign-up-input-two"
                            placeholder="Url"
                            type="text"
                            value={url}
                            onChange={(e) => setUrl(e.target.value)}
                        />
                        {noDataInput && !url &&
                            (<div className="company-sign-up-inputs-error">Campo vacio!</div>)}
                    </div>
                    <div className="company-sign-up-sized-box"/>
                    {/*Contacto de empresa */}
                    <div className="company-sign-up-url-contact-colum">
                        <input
                            className="company-sign-up-input-two"
                            placeholder="Contacto"
                            type="text"
                            value={contact}
                            onChange={(e) => setContact(e.target.value)}
                        />
                        {noDataInput && !contact && 
                            (<div className="company-sign-up-inputs-error">Campo vacio!</div>)}
                    </div>
                </div>
            </div>
        </div>
    );
}

function advancedDataCompany (
    noDataInput,
    username,
    email,
    password,
    confirmPassword,
    setUsername,
    setEmail,
    setPassword,
    setConfirmPassword,
    ){
    return (
        <div>
            <div className="company-sign-up-login-form">
                <div className="company-sign-up-circular-items">
                    {(circularItem("show_chart", "Ver graficos"))}
                    {(circularItem("local_mall", "Agregar productos"))}
                    {(circularItem("add", "¡Y aun mas!"))}
                </div>
                {/*Nombre de usuario de empresa */}
                <input
                    className="company-sign-up-input"
                    placeholder="Nombre de usuario"
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                {noDataInput && !username &&
                    (<div className="company-sign-up-inputs-error">Campo vacio!</div>)}
                {/*Email de empresa */}
                <input
                    className="company-sign-up-input"
                    htmlFor="email"
                    placeholder="Email"
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                {noDataInput && !email &&
                    (<div className="company-sign-up-inputs-error">Campo vacio!</div>)}
                <div className="company-sign-up-url-contact">
                    {/*Contraseña de empresa */}
                    <div className="company-sign-up-url-contact-colum">
                        <input
                            className="company-sign-up-input-two"
                            htmlFor="password"
                            placeholder="Contraseña"
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        {noDataInput && !password &&
                            (<div className="company-sign-up-inputs-error">Campo vacio!</div>)}
                    </div>
                    <div className="company-sign-up-sized-box"/>
                    {/*Confirmar contraseña de empresa */}
                    <div className="company-sign-up-url-contact-colum">
                        <input
                            className="company-sign-up-input-two"
                            htmlFor="password"
                            placeholder="Confirmar contraseña"
                            type="password"
                            id="confirmPassword"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                        {noDataInput && !confirmPassword && 
                            (<div className="company-sign-up-inputs-error">Campo vacio!</div>)}
                    </div>
                </div>
            </div>
        </div>
    );
}

function circularItem (icon, label){
    return (
        <div className="company-sign-up-circular-item-label">
            <span className="material-icons circular-items">{icon}</span>
            {label}
        </div>
    );
}

export default SignUpCompany;