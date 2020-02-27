import React, { Component } from "react";
import Inputs from "./Inputs";
import Array from "./Array";
import AddLineButton from "./AddLineButton";
import { connect } from "react-redux";
import * as selectors from "../redux/selectors";

class App extends Component {
  render() {
    const { array } = this.props;
    return (
      <>
        <Inputs />
        {array.length > 0 && <Array />}
        {array.length > 0 && <AddLineButton />}
      </>
    );
  }
}

const mapStateToProps = state => {
  return { array: selectors.getArray(state) };
};

export default connect(mapStateToProps)(App);
