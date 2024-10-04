import React from 'react';
import FacebookLogin from '@kazion/react-facebook-login';
import { FacebookProvider, useFacebookLogin } from '@kazion/react-facebook-login';

function FacebookLoginButton() {

  const facebookLoginStyle = {
    display: 'flex',
    width: '100%',
    height: '50px',
    //justifyContent: 'center',
  }

  const labelFacebook = {
    width: '100%',
    alignSelf: 'center',
  }
  
  const iconStyle = {
    paddingRight : '10px',
    alignSelf: 'center',
  }

  const login = useFacebookLogin({
    onSuccess: (response) => {
      console.log(response);
    },
  });

  return (
    <button onClick={() => login()} style={facebookLoginStyle}>
      <img src='src\components\FacebookLoginButton\facebook.png' width='20px' height='20px' style={iconStyle}/>
      <div style={labelFacebook}>Acceder con Facebook</div>
    </button>
  );
};

export default FacebookLoginButton;