import React from "react";
import { connect } from "react-redux";
import {AddtoCart} from "./components/AddtoCart/AddtoCart"
const Container = (props) => {
  return (
    <div>
      <h1>Numbers {props.numbers}</h1>
      <button onClick={()=>props.Reducer}>Click me</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    numbers: state.numbers,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    Reducer: () => dispatch(AddtoCart()),
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(Container);
