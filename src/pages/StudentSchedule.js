import React, { useState } from 'react';
import { Table, ButtonWithImage, ThemeSelector } from '../components';
import '../css/pages/StudentSchedule.css';

function StudentSchedule() {
  const [selectedTheme, setSelectedTheme] = useState(null);

  const showTable = () => (
    <div className="scheduleTableDiv">
      <Table />
    </div>
  );

  const makeH1 = (txt) => (
    <h1 className="headerTxt">
      {txt}
    </h1>
  );

  return (
    <>
      <header>
        <div className="navigateBtns">
          <ButtonWithImage kind="main" />
          { selectedTheme && <ButtonWithImage kind="back" />}
        </div>
        { !selectedTheme && <ThemeSelector setTheme={ setSelectedTheme } /> }
        { selectedTheme && makeH1(`Marcação das Mentorias de ${selectedTheme} - ALUNO`) }
      </header>
      { selectedTheme && showTable() }
    </>
  );
}

export default StudentSchedule;
