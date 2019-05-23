import React from "react";
import { connect } from "react-redux";

const mapStateToProps = state => ({
  counter: state
});

const mapDispatchToProps = dispatch => ({
  onADD: () => dispatch({ type: "ADD" }),
  onREMOVE: () => dispatch({ type: "REMOVE" }),
  onBIGADD: () => dispatch({ type: "BIGADD" }),
  onBIGREMOVE: () => dispatch({ type: "BIGREMOVE" }),
  onRESET: () => dispatch({ type: "RESET" })
});

const counterComponent = ({ counter, onADD, onREMOVE, onBIGADD, onBIGREMOVE, onRESET }) => (
  <div>
    <p>{counter}</p>
    <button onClick={onADD}>ADD</button>
    <button onClick={onREMOVE}>REMOVE</button>
    <button onClick={onBIGADD}>+10</button>
    <button onClick={onBIGREMOVE}>-20</button>
    <button onClick={onRESET}>RESET</button>
  </div>
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(counterComponent);