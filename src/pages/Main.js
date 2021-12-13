import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
<<<<<<< HEAD
import { ButtonWithImage } from '../components';
=======
import { ButtonConfig } from '../components';
>>>>>>> 079150cc7d645ef86d810952b0c765a70d635fbd
import '../css/pages/Main.css';

function Main() {
  const [redirect, setRedirect] = useState(null);

  return (
    <>
      { redirect && <Redirect to={ redirect } /> }
      <header className="mainHeader">
        <h1>Main</h1>
        <ButtonWithImage kind="config" />
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
