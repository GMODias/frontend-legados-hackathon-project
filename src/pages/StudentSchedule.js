import React, { useState } from 'react';
import { Modal, Table, ButtonWithImage } from '../components';
import '../css/pages/StudentSchedule.css';

function StudentSchedule() {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      {showModal && <Modal props={ { setShowModal } } />}
      <ButtonWithImage kind="main" />
      <button type="button" onClick={ () => setShowModal(true) }>teste</button>
      <div className="scheduleTableDiv">
        <Table />
      </div>
    </>
  );
}

export default StudentSchedule;
