const initialize = [];

const Reducer = (state = initialize, action) => {
  console.log("stateeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee", state);
  const product = action.Added
  switch (action.type) {
    case "Add":
      console.log("fadeeeeeeeeeeeeee", action.Added);
      const exist = state.find((x) => x.id === action.Added.id)
      if (exist) {
        console.log("exissssst");
        return state.map((x) =>
          x.id === product.id ? { ...x, qty: x.qty + 1 } : x
        )
      } else {
        console.log("elseeeeee");
        const product = action.Added
        return [
          ...state, { ...product, qty: 1 }
        ]
      }
    // case "Add":
    //   console.log("add returned", action.Added, "adedddddd");
    //   return { ...state, products: action.Added }
    // case "Exportet":
    //   console.log("Exportet", state);
    //   return { ...state, rat: state.numbers + 1, jat: action.Added }
    default:
      console.log("state returned");
      return state;
  }
};

export default Reducer;
