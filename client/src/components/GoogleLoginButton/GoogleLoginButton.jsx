import React, { useState } from 'react';
import { GoogleOAuthProvider, GoogleLogin, useGoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";

function GoogleLoginButton() {
  const [userProfile, setUserProfile] = useState({ name: '', email: '' });

  const googleLoginStyle = {
    display: 'flex',
    width: '100%',
    height: '50px',
    //justifyContent: 'center',
  }

  const labelGoogle = {
    width: '100%',
    paddingRight: '15px',
    alignSelf: 'center',
  }
  
  const iconStyle = {
    paddingRight : '10px',
    alignSelf: 'center',
  }

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
    <button onClick={() => login()} style={googleLoginStyle}>
      <img src='src\components\GoogleLoginButton\google.webp' width='20px' height='20px' style={iconStyle}/>
      <div style={labelGoogle}>Acceder con Google</div>
    </button>
  );
}

export default GoogleLoginButton;