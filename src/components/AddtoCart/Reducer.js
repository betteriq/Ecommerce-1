const initialize = {
  numbers: 10,
};

const Reducer = (state = initialize, action) => {
  switch (action.type) {
    case "Add":
      return { numbers: state.numbers + 1 };
  }
};

export default Reducer;
