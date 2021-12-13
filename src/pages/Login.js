import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
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

  const onSubmit = async (e) => {
    e.preventDefault();

    const userObject = {
      email: emailInput,
      password: passwordInput,
    };
    // coloque a porta de acordo com a porta que o servidor esta rodando.
    const response = await axios.post('http://localhost:3500/login', userObject);
    console.log(response);

    setEmailInput('');
    setPasswordInput('');
    setRedirect(true);
  };

  useEffect(btnStats, [disableBtn, emailInput, passwordInput]);

  return (
    <div className="login-div">
      <form onSubmit={ (e) => onSubmit(e) }>
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
          type="submit"
          disabled={ disableBtn }
          // onClick={ () => setRedirect(true) }
        >
          ENTRAR
        </button>
      </form>
    </div>
  );
}

export default Login;
