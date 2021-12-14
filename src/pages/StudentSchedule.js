import React, { useState } from 'react';
import { Modal, Table, ButtonWithImage, ThemeSelector } from '../components';
import '../css/pages/StudentSchedule.css';

function StudentSchedule() {
  const [selectedTheme, setSelectedTheme] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const showTable = (showModalHandler) => (
    <div className="scheduleTableDiv">
      <Table modal={ showModalHandler } />
    </div>
  );

  const makeH1 = (txt) => (
    <h1 className="headerTxt">
      {txt}
    </h1>
  );

  return (
    <>
      {showModal && <Modal props={ { setShowModal } } />}
      <header>
        <div className="navigateBtns">
          <ButtonWithImage kind="main" />
          { selectedTheme && <ButtonWithImage kind="back" />}
        </div>
        { !selectedTheme && <ThemeSelector setTheme={ setSelectedTheme } /> }
        { selectedTheme && makeH1(`Marcação das Mentorias de ${selectedTheme} - ALUNO`) }
      </header>
      { selectedTheme && showTable(setShowModal) }
    </>
  );
}

export default StudentSchedule;
