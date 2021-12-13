import React from 'react';
import PropTypes from 'prop-types';
import '../css/components/Modal.css';

function Modal({ props }) {
  const { setShowModal } = props;

  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <h4 className="modal-title"> Ação </h4>
        </div>
        <div className="modal-body">
          <p> texto </p>
        </div>
        <div className="modal-footer">
          <button
            type="button"
            className="modal-button"
            onClick={ () => setShowModal(false) }
          >
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
}

Modal.propTypes = {
  setShowModal: PropTypes.func.isRequired,
  props: PropTypes.objectOf().isRequired,
};

export default Modal;
