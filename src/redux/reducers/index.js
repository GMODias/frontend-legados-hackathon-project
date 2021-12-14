const INITIAL_STATE = {
  id: '',
  modalType: '',
};

function listReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case 'ADD_ELEMENT':
    return {
      id: action.id,
      modalType: action.modalType,
    };
  case 'REMOVE_ELEMENT':
    return INITIAL_STATE;
  default:
    return state;
  }
}

export default listReducer;
