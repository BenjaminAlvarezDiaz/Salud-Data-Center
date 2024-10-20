import React, { useState } from 'react';
import { GoogleOAuthProvider, GoogleLogin, useGoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";
import '../GoogleLoginButton/GoogleLoginButton.css';

function GoogleLoginButton() {
  const [userProfile, setUserProfile] = useState({ name: '', email: '' });

  const handleSuccess = (credentialResponse) => {
    const decoded = jwtDecode(credentialResponse.credential);
    setUserProfile({
      name: decoded.name,
      email: decoded.email,
    });
  };

  const login = useGoogleLogin({
    onSuccess: tokenResponse => console.log(tokenResponse),
  });

  const handleFailure = () => {
    console.log('Google Login failed');
  };

  return (
    <button className='google-login-style' onClick={() => login()}>
      <img className='icon-style' src='src\components\GoogleLoginButton\google.webp' width='20px' height='20px'/>
      <div className='label-google'>Acceder con Google</div>
    </button>
  );
}

export default GoogleLoginButton;