import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import * as actions from '../redux/actions';
import '../css/components/Modal.css';

function Modal({ props }) {
  const { setShowModal } = props;
  const dispatch = useDispatch();
  const { id, modalType } = useSelector(({ listReducer }) => listReducer);
  console.log(id, modalType);

  const showAppointment = () => (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <h4 className="modal-title"> Ação </h4>
        </div>
        <div className="modal-body">
          <p> Você tem um horário marcado com os L(e||a)gados!!!! </p>
        </div>
        <div className="modal-footer">
          <button
            type="button"
            className="modal-button"
            onClick={ () => {
              setShowModal(false);
            } }
          >
            Fechar
          </button>
        </div>
      </div>
    </div>
  );

  const registerAppointment = () => (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <h4 className="modal-title"> Ação </h4>
        </div>
        <div className="modal-body">
          <p> Deseja Marcar o Hórario para tirar Duvida? </p>
        </div>
        <div className="modal-footer">
          <button
            type="button"
            className="modal-button"
            onClick={ () => {
              const avaiable = JSON.parse(localStorage.getItem('avaiable'));
              const confirmed = JSON.parse(localStorage.getItem('confirmed'));
              localStorage.setItem('avaiable',
                JSON.stringify(avaiable.filter((date) => date !== id)));
              localStorage.setItem('confirmed', JSON.stringify([...confirmed, id]));
              dispatch(actions.removeAssignment);
              setShowModal(false);
            } }
          >
            Marcar
          </button>
          <button
            type="button"
            className="modal-button"
            onClick={ () => {
              setShowModal(false);
            } }
          >
            Fechar
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <>
      { modalType === 'avaiable' && registerAppointment() }
      { modalType === 'confirmed' && showAppointment() }
    </>
  );
}

Modal.propTypes = {
  setShowModal: PropTypes.func.isRequired,
  props: PropTypes.objectOf().isRequired,
};

export default Modal;
