import React, { useState } from 'react';
import { ButtonWithImage, ThemeSelector } from '../components/index';
import Card from '../components/tips/Card';
import '../css/pages/Tips.css';
import mockTips from '../mocks/mockTips';

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
      { (mockTips.map(({ idtips, title, category }) => (
        category === selectedTheme
        && <Card
          key={ idtips }
          idtips={ idtips }
          title={ title }
        />))) }
    </div>
  );
}

export default Tips;
