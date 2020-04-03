// @flow
import React from "react";
import { connect } from "react-redux";
import * as selectors from "../../redux/selectors";
import AverageCell from "../AverageCell";
import type { State } from "../../redux/types";

type ownProps = {||};

type StateProps = {|
  averageRow: Array<number>
|};

type Props = {
  ...ownProps,
  ...StateProps
};
const AvarageRow = ({ averageRow }: Props) => (
  <tr>
    {averageRow.map((cell, index) => (
      <AverageCell key={index} averageCell={cell} />
    ))}
  </tr>
);

const mapStateToProps = (state: State): StateProps => {
  return {
    averageRow: selectors.getAvarageRow(state)
  };
};

export default connect<Props, ownProps, StateProps, _, State, _>(
  mapStateToProps
)(AvarageRow);
