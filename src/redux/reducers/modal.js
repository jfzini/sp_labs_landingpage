const INITIAL_STATE = {
  open: false,
  name: '',
};

const modalReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'OPEN_MODAL':
      return {
        ...state, // for escalation purposes
        open: true,
        name: action.payload,
      };
    case 'CLOSE_MODAL':
      return {
        ...state, // for escalation purposes
        open: false,
        name: '',
      };
    default:
      return state;
  }
};

export default modalReducer;
