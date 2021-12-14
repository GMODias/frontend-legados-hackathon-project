import React, { useState } from 'react';
import { Modal, Table, ButtonWithImage, ThemeSelector } from '../components';
import '../css/pages/StudentSchedule.css';

function StudentSchedule() {
  const [showModal, setShowModal] = useState(false);
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
          {showModal && <Modal props={ { setShowModal } } />}
          <ButtonWithImage kind="main" />
          { selectedTheme && <ButtonWithImage kind="back" />}
          <button type="button" onClick={ () => setShowModal(true) }>teste</button>
        </div>
        { !selectedTheme && <ThemeSelector setTheme={ setSelectedTheme } /> }
        { selectedTheme && makeH1(`Marcação das Mentorias de ${selectedTheme} - ALUNO`) }
      </header>
      { selectedTheme && showTable() }
    </>
  );
}

export default StudentSchedule;
