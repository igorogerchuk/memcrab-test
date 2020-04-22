// @flow
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import ArrayRow from "../ArrayRow";
import AverageRow from "../AverageRow";
import * as selectors from "../../redux/selectors";
import * as actions from "../../redux/actions";
import getClosestNumbers from "../../services/closestNumbers";
import createRandomArray from "../../services/randomArray";
import "./Array.module.css";
import type { Action } from "../../redux/actions";
import type { Dispatch } from "redux";
import type { State } from "../../redux/types";

const Array = () => {
  const { array, rows, cells } = useSelector<State, State>((state) => state);
  const illuminatedQty = useSelector(selectors.getIlluminatedQty);
  const columnQty = useSelector(selectors.getColumnsQty);
  const sumColumn = useSelector(selectors.getSumColumn);

  const dispatch = useDispatch<Dispatch<Action>>();

  const [illuminated, setIlluminated] = useState({});

  const hoverOnHandler = (e: SyntheticEvent<HTMLTableCellElement>) => {
    const { id } = e.currentTarget;
    const closestNumbers = getClosestNumbers(cells, id, illuminatedQty);
    setIlluminated(closestNumbers);
  };

  const hoverOffHandler = () => {
    setIlluminated({});
  };

  const increaseHandler = (e: SyntheticEvent<HTMLTableCellElement>) => {
    const { id } = e.currentTarget;
    dispatch(actions.increase(id));
  };

  const removeHandler = (e: SyntheticEvent<HTMLButtonElement>) => {
    const { id } = e.currentTarget;
    dispatch(actions.removeRow(id, rows[id]));
  };

  const addHandler = () => {
    const { array, rows, cells } = createRandomArray(1, columnQty);
    dispatch(actions.addRow(array, rows, cells));
  };

  return (
    array.length > 0 && (
      <div styleName="tableWrapper">
        <table styleName="table">
          <tbody>
            {array.map((rowId, index) => (
              <ArrayRow
                key={rowId}
                id={rowId}
                row={rows[rowId]}
                cells={cells}
                onHover={hoverOnHandler}
                offHover={hoverOffHandler}
                illuminated={illuminated}
                onIncrease={increaseHandler}
                sumCell={sumColumn[index]}
                onRemove={removeHandler}
              />
            ))}
            <AverageRow />
            <tr>
              <td styleName="addCell" colSpan={columnQty}>
                <button
                  id="addButton"
                  styleName="addButton"
                  onClick={addHandler}
                >
                  +
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  );
};

export default Array;
