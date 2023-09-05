const INITIAL_STATE = {
  open: false,
  closing: false,
  expanded: false,
  current: [],
};

const chatReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'OPEN_CHAT':
      return {
        ...state, // for escalation purposes
        open: true,
      };
    case 'CLOSING_CHAT':
      return {
        ...state, // for escalation purposes
        closing: true,
      };
    case 'CLOSE_CHAT':
      return {
        ...state, // for escalation purposes
        open: false,
        closing: false,
      };
    case 'EXPAND_CHAT':
      return {
        ...state, // for escalation purposes
        expanded: true,
      };
    case 'COLLAPSE_CHAT':
      return {
        ...state, // for escalation purposes
        expanded: false,
      };
    case 'SAVE_CHAT':
      return {
        ...state, // for escalation purposes
        current: [...state.current, ...action.payload],
      };

    default:
      return state;
  }
};

export default chatReducer;
