import React, { useState } from 'react';
import { Redirect } from 'react-router';
import { ButtonConfig } from '../components';
import '../css/pages/Main.css';

function Main() {
  const [redirect, setRedirect] = useState(null);

  return (
    <>
      {redirect && <Redirect to={ redirect } />}
      <header className="mainHeader">
        <h1>Main</h1>
        <ButtonConfig />
      </header>
      <main>
        <button type="button" onClick={ () => setRedirect('/student') }>Student</button>
        <button type="button" onClick={ () => setRedirect('/mentor') }>Mentor</button>
        <button type="button" onClick={ () => setRedirect('/tips') }>Tips</button>
      </main>
    </>
  );
}

export default Main;
