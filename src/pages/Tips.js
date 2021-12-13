import React, { useState } from 'react';
import { ButtonWithImage, ThemeSelector } from '../components/index';
import Card from '../components/tips/Card';
import '../css/pages/Tips.css';

function Tips() {
  const [selectedTheme, setSelectedTheme] = useState(null);
  return (
    <div className="tips">
      <div className="header">
        <ButtonWithImage kind="main" />
        { selectedTheme && <ButtonWithImage kind="back" /> }
      </div>
      <div className="btntipes">
        { !selectedTheme && <ThemeSelector setTheme={ setSelectedTheme } /> }
      </div>

      { selectedTheme && `Vou te mostrar as dicas de ${selectedTheme}` }
      { selectedTheme === 'Linux'
        && (<Card
          idtips={ 5 }
          title="Como configurar seu linux para desenvolvimento de software"
        />) }
    </div>
  );
}

export default Tips;

// mocksTips.map(({ idtips, title }) => (<Card
//   key={ idtips }
//   idtips={ idtips }
//   title={ title }
// />)

/* <Card
          idtips={ 5 }
          title="Como configurar seu linux para desenvolvimento de software"
        /> */
