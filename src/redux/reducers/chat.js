const INITIAL_STATE = {
  open: false,
};

const chatReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'OPEN_CHAT':
      return {
        ...state, // for escalation purposes
        open: true,
      };
    case 'CLOSE_CHAT':
      return {
        ...state, // for escalation purposes
        open: false,
      };
    default:
      return state;
  }
}

export default chatReducer;