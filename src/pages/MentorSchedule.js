import React, { useState } from 'react';
import { Modal, Table, ButtonWithImage, ColorGuide } from '../components';
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
      {showModal && <Modal props={ { setShowModal } } />}
      <header>
        <div className="navigateBtns">
          <ButtonWithImage kind="main" />
        </div>
      </header>
      <h1 className="headerTxt">Marcação de Mentorias - MENTOR</h1>
      { <ColorGuide /> }
      { showTable(setShowModal) }
    </>
  );
}

export default MentorSchedule;
