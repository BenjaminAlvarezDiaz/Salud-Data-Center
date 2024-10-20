import React from 'react';
import FacebookLogin from '@kazion/react-facebook-login';
import { FacebookProvider, useFacebookLogin } from '@kazion/react-facebook-login';
import '../FacebookLoginButton/FacebookLoginButton.css';

function FacebookLoginButton() {

  const login = useFacebookLogin({
    onSuccess: (response) => {
      console.log(response);
    },
  });

  return (
    <button className='facebook-login-style' onClick={() => login()}>
      <img  className='icon-style' src='src\components\FacebookLoginButton\facebook.png' width='20px' height='20px'/>
      <div className='label-facebook'>Acceder con Facebook</div>
    </button>
  );
};

export default FacebookLoginButton;