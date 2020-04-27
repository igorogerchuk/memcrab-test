// @flow
import React from "react";
import { useSelector } from "react-redux";
import * as selectors from "../../redux/selectors";
import AverageCell from "../AverageCell";

const AverageRow = () => {
  const averageRow = useSelector(selectors.getAverageRow);
  return (
    <tr>
      {averageRow.map((cell, index) => (
        <AverageCell key={index} averageCell={cell} />
      ))}
    </tr>
  );
};

export default AverageRow;
