import React, { useState } from 'react';
import {Modal, Table} from '../../components';
import './StudentSchedule.css';

function StudentSchedule() {
  const [showModal, setShowModal] = useState(false);
  return (
  <>
    {showModal && <Modal props={{setShowModal}} />}
      <button onClick={() => setShowModal(true)}>teste</button>
    <div className='scheduleTableDiv'>
      <Table />
    </div>
    </>  
  );
}

export default StudentSchedule;
