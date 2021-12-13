import React, { useState } from 'react';
import { Modal, Table, ButtonWithImage } from '../components';
import '../css/pages/MentorSchedule.css';

function MentorSchedule() {
  const [showModal, setShowModal] = useState(false);

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
      <h1>Marcação de Mentorias - MENTOR</h1>
      { showTable() }

    </>
  );
}

export default MentorSchedule;
