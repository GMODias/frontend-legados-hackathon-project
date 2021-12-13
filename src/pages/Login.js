import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router';
import '../css/pages/Login.css';

function Login() {
  const [emailInput, setEmailInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const [disableBtn, setDisableBtn] = useState(true);
  const [redirect, setRedirect] = useState(null);

  const btnStats = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const minPasswordLenght = 6;
    const disable = !(emailRegex.test(emailInput)
    && passwordInput.length >= minPasswordLenght);
    if (disableBtn !== disable) setDisableBtn(disable);
  };

  useEffect(btnStats, [disableBtn, emailInput, passwordInput]);

  return (
    <div className="login-div">
      {redirect && <Redirect to="/main" />}
      <h1>LOGIN</h1>
      <input
        type="text"
        name="emailInput"
        value={ emailInput }
        placeholder="E-MAIL DO USUÁRIO"
        data-testid="email-input"
        onChange={ ({ target: { value } }) => setEmailInput(value) }
      />
      <input
        type="password"
        name="passwordInput"
        value={ passwordInput }
        placeholder="SENHA"
        data-testid="password-input"
        onChange={ ({ target: { value } }) => setPasswordInput(value) }
      />
      <button
        type="button"
        disabled={ disableBtn }
        onClick={ () => setRedirect(true) }
      >
        ENTRAR
      </button>
    </div>
  );
}

export default Login;
