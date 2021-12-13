import React, { useState } from 'react';
import { ButtonWithImage, ThemeSelector } from '../components/index';
import Linux from '../components/tips/Linux';
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
      { selectedTheme === 'Linux' && <Linux /> }
      { selectedTheme === 'Linux' && <Linux /> }
      { selectedTheme === 'Linux' && <Linux /> }
      { selectedTheme === 'Linux' && <Linux /> }
    </div>
  );
}

export default Tips;
