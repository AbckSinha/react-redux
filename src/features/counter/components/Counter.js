import React, { Component } from "react";
import { connect } from "react-redux";
import "./Counter.css";
import * as actionTypes from "../actions/actionsTypes";

class Counter extends Component {
  state = {
    counter: 0,
  };

  clickHandler = () => {
    console.log("Hi");
  };

  render() {
    return (
      <div>
        <div className="counterContainer">
          Counter: <span>{this.props.ctr}</span>
        </div>
        <div className="box" onClick={this.props.onIncrementCounter}>
          Increment
        </div>
        <div className="box" onClick={this.props.onDecrementCounter}>
          Decrement
        </div>
        <div className="box" onClick={this.props.onAddCounter}>
          Add by 10
        </div>
        <div className="box" onClick={this.props.onSubstractCounter}>
          Substract by 5
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ctr: state.counter,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onIncrementCounter: () => dispatch({ type: actionTypes.INC }),
    onDecrementCounter: () => dispatch({ type: actionTypes.DEC }),
    onAddCounter: () =>
      dispatch({ type: actionTypes.ADD, payload: { val: 10 } }),
    onSubstractCounter: () =>
      dispatch({ type: actionTypes.SUB, payload: { val: 5 } }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
