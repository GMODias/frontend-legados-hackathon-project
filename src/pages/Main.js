import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { ButtonWithImage } from '../components';
import '../css/pages/Main.css';

function Main() {
  const [redirect, setRedirect] = useState(null);

  return (
    <div className="main-box">
      { redirect && <Redirect to={ redirect } /> }
      <header className="mainHeader">
        <ButtonWithImage kind="config" />
      </header>
      <main>
        <button
          type="button"
          className="btn-main"
          onClick={ () => setRedirect('/student') }
        >
          Duvida
        </button>
        <button
          type="button"
          className="btn-main"
          onClick={ () => setRedirect('/mentor') }
        >
          Mentor
        </button>
        <button
          type="button"
          className="btn-main"
          onClick={ () => setRedirect('/tips') }
        >
          Dicas
        </button>
      </main>
    </div>
  );
}

export default Main;
