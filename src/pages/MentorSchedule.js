import React, { useState } from 'react';
import { Modal, Table, ButtonWithImage } from '../components';
import '../css/pages/MentorSchedule.css';

function MentorSchedule() {
  const [showModal, setShowModal] = useState(false);

  const showTable = (showModalHandler) => (
    <div className="scheduleTableDiv">
      <Table modal={ showModalHandler } />
    </div>
  );

  return (
    <>
      <header>
        <div className="navigateBtns">
          <ButtonWithImage kind="main" />
          {showModal && <Modal props={ { setShowModal } } />}
        </div>
      </header>
      <button type="button" onClick={ () => setShowModal(true) }>teste</button>
      <h1 className="headerTxt">Marcação de Mentorias - MENTOR</h1>
      { showTable(setShowModal) }

    </>
  );
}

export default MentorSchedule;
