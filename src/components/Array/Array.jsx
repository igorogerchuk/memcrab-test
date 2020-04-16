// @flow
import React, { useState } from "react";
import { connect } from "react-redux";
import ArrayRow from "../ArrayRow";
import AvarageRow from "../AvarageRow";
import * as selectors from "../../redux/selectors";
import * as actions from "../../redux/actions";
import getClosestNumbers from "../../services/closestNumbers";
import createRandomArray from "../../services/randomArray";
import "./Array.module.css";
import type { Action } from "../../redux/actions";
import type { Dispatch } from "redux";
import type {
  ArrayState,
  RowsState,
  CellsState,
  State,
} from "../../redux/types";

type ownProps = {||};

type StateProps = {|
  array: ArrayState,
  rows: RowsState,
  cells: CellsState,
  illuminatedQty: number,
  sumColumn: Array<number>,
  columnQty: number,
|};

type DispatchProps = {|
  onIncrease: (id: string) => {},
  onRemove: (id: string, cellsIds: $ReadOnlyArray<string>) => {},
  onAdd: (array: ArrayState, row: RowsState, cells: CellsState) => {},
|};

type Props = {
  ...ownProps,
  ...StateProps,
  ...DispatchProps,
};

const Array = ({
  array,
  rows,
  cells,
  illuminatedQty,
  onIncrease,
  sumColumn,
  onRemove,
  onAdd,
  columnQty,
}: Props) => {
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
    onIncrease(id);
  };

  const removeHandler = (e: SyntheticEvent<HTMLButtonElement>) => {
    const { id } = e.currentTarget;
    onRemove(id, rows[id]);
  };

  const addHandler = () => {
    const { array, rows, cells } = createRandomArray(1, columnQty);
    onAdd(array, rows, cells);
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
            <AvarageRow />
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

const mapStateToProps = (state: State): StateProps => ({
  array: selectors.getArray(state),
  rows: selectors.getRows(state),
  cells: selectors.getCells(state),
  illuminatedQty: selectors.getIlluminatedQty(state),
  sumColumn: selectors.getSumColumn(state),
  columnQty: selectors.getColumnsQty(state),
});

const mapDispatchToProps = (dispatch: Dispatch<Action>): DispatchProps => ({
  onIncrease: (id) => dispatch(actions.increase(id)),
  onRemove: (id, cellsIds) => dispatch(actions.removeRow(id, cellsIds)),
  onAdd: (array, row, cells) => dispatch(actions.addRow(array, row, cells)),
});
export default connect<
  Props,
  ownProps,
  StateProps,
  DispatchProps,
  State,
  Dispatch<Action>
>(
  mapStateToProps,
  mapDispatchToProps
)(React.memo<Props>(Array));
