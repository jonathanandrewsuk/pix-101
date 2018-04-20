const defaultState = {
  helloWorldCounter: 0,
  error: null,
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'HELLO':
    console.log("hello there")
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default reducer;
