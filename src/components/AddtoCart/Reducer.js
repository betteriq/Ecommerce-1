const initialize = {
  numbers: 10,
};

const Reducer = (state = initialize, action) => {
  switch (action.type) {
    case "Add":
      console.log("add returned");
      return { numbers: state.numbers + 1 };
    default:
      console.log("state returned");
      return state;
  }
};

export default Reducer;
