import React, {useState} from 'react';
import { Redirect } from 'react-router';
import '../css/pages/Main.css';

function Main() {
  const [redirect, setRedirect] = useState(null);

  return (
    <>
      {redirect && <Redirect to={redirect} />}
      <header className='mainHeader'>
        <h1>Main</h1>
        <button onClick={() => setRedirect('/userConfig')}> config </button>
      </header>
      <main>
        <button onClick={() => setRedirect('/student') }>Student</button>
        <button onClick={() => setRedirect('/mentor') }>Mentor</button>
        <button onClick={() => setRedirect('/tips') }>Tips</button>
      </main>
    </>
  );
}

export default Main;
