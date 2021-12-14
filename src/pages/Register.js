import React, { useState, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';
import registerMiddleware from '../middlewares/register';
import '../css/pages/Login.css';

function Register() {
  const [nameInput, setNameInput] = useState('');
  const [emailInput, setEmailInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const [disableBtn, setDisableBtn] = useState(true);
  const [redirect, setRedirect] = useState(null);
  const [loginStatus, setLoginStatus] = useState('');
  const [registerStatus, setRegisterStatus] = useState('');

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
      name: nameInput,
      email: emailInput,
      password: passwordInput,
    };
    // coloque a porta de acordo com a porta que o servidor esta rodando.
    try {
      const response = await axios.post('http://localhost:3500/users', userObject);
      console.log(response);
      const tokenResponse = registerMiddleware(response);
      setRegisterStatus(tokenResponse);
    } catch (err) {
      console.log(err.message);
      setLoginStatus('Não foi possivel cadastrar usuário');
    }
  };

  useEffect(btnStats, [disableBtn, emailInput, passwordInput]);

  useEffect(() => {
    if (registerStatus === 'Usuário cadastrado com sucesso') return setRedirect(true);
  }, [registerStatus]);

  return (
    <div className="login-div">
      <form onSubmit={ (e) => onSubmit(e) }>
        { redirect && <Redirect to="/" /> }
        <h1>LOGIN</h1>
        <input
          type="text"
          name="nameInput"
          value={ nameInput }
          placeholder="NOME COMPLETO"
          data-testid="name-input"
          onChange={ ({ target: { value } }) => setNameInput(value) }
        />
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
        <p>{ loginStatus }</p>
        <button
          type="submit"
          disabled={ disableBtn }
        >
          ENTRAR
        </button>
        <button
          type="button"
        >
          <Link to="/">Cancelar </Link>
        </button>
      </form>
    </div>
  );
}

export default Register;
