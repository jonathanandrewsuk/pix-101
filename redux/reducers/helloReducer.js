const defaultState = {
  helloWorldCounter: 0,
  error: null,
  greeting: 'hey there',
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'HELLO_CHANGE_GREETING':
      return {
        ...state,
        greeting: 'bye',
      };
    default:
      return state;
  }
};

export default reducer;
