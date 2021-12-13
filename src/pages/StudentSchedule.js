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

  return (
    <>
      {showModal && <Modal props={ { setShowModal } } />}
      <ButtonWithImage kind="main" />
      <button type="button" onClick={ () => setShowModal(true) }>teste</button>
      { selectedTheme && <ButtonWithImage kind="back" />}
      { !selectedTheme && <ThemeSelector setTheme={ setSelectedTheme } /> }
      { selectedTheme && `Marcação das Mentorias de ${selectedTheme}` }
      { selectedTheme && showTable() }

    </>
  );
}

export default StudentSchedule;
