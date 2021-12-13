import React, { useState } from 'react';
import { ButtonWithImage, ThemeSelector } from '../components/index';
import '../css/pages/Tips.css';

function Tips() {
  const [selectedTheme, setSelectedTheme] = useState(null);
  return (
    <>
      <ButtonWithImage kind="main" />
      { selectedTheme && <ButtonWithImage kind="back" />}
      { !selectedTheme && <ThemeSelector setTheme={ setSelectedTheme } /> }
      { selectedTheme && `vou te mostrar as dicas de ${selectedTheme}` }
    </>
  );
}

export default Tips;
