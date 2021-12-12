import React from 'react';
import '../css/components/Modal.css'

function Modal({props}) {
  const {setShowModal} = props;

  return (
<div className='modal'>
  <div className='modal-content'>
    <div className='modal-header'>
      <h4 className='modal-title'> Ação </h4>
    </div>
    <div className='modal-body'>
      <p> texto </p>
    </div>
    <div className='modal-footer'>
      <button className='modal-button' onClick={() => setShowModal(false)}>Fechar</button>
    </div>
  </div>
</div>
  );
}

export default Modal;
