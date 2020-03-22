import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../redux/actions";
import * as selectors from "../../redux/selectors";
import styles from "./ArrayCell.module.css";

class ArrayCell extends Component {
  // hoverOnHandler = () => {
  //   const { cell, onHover } = this.props;
  //   const closestNumbers = getClosestNumbers(cell);
  //   onHover(closestNumbers);
  // };

  // hoverOffHandler = () => {
  //   const { onHover } = this.props;
  //   onHover({});
  // };

  shouldComponentUpdate(nextProps, nextState) {
    // const { cell, illuminated, sumHover, id } = this.props;
    const { illuminated, id } = this.props;

    // if (nextProps.sumHover !== sumHover) {
    //   return true;
    // }
    // if (nextProps.cell.amount !== cell.amount) {
    //   return true;
    // }
    if (nextProps.illuminated[id] !== illuminated[id]) {
      return true;
    }

    return false;
  }

  render() {
    // console.log("td");
    const { cell, id, onHover, offHover, illuminated } = this.props; //sum, sumHover, onIncrease,

    let style = {
      background:
        "linear-gradient(110deg,#eee 0%,#e3e3e3 10%,#fff 20%,#fff 25%,#f0f0f0 26%,#fff 28%,#ddd 55%,#eee 100%)"
    };

    // const percents = (cell.amount / sum) * 100;

    if (illuminated[id]) {
      style.background =
        "linear-gradient(110deg, #f90c04 0%, #ed413b 10%, #fff 20%, #fff 25%, #f0f0f0 26%, #fff 28%, #f53d37 55%, #f90c04 100%)";
    }

    // if (sumHover) {
    //   bg.background = `linear-gradient(to top, #fff200, #1e9600 ${percents}%, transparent ${percents}%)`;
    // }

    return (
      <td
        className={styles.simpleTd}
        // onClick={onIncrease}
        id={id}
        onMouseEnter={onHover}
        onMouseLeave={offHover}
        style={style}
      >
        {/* {sumHover ? percents.toFixed(1) + "%" : cell.amount} */}
        {cell.amount}
      </td>
    );
  }
}

// const mapStateToProps = (state, { id }) => {
//   return {
//     // array: selectors.getArray(state),
//     cell: selectors.getCell(state, id)
//     // sum: selectors.getSum(state, lineId)
//   };
// };

// const mapDispatchToProps = (dispatch, { id }) => {
//   return {
//     // onIncrease: () => dispatch(actions.increase(id, lineId)),
//     // onHover: closestNumbers => dispatch(actions.illuminate(closestNumbers))
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(ArrayCell);

export default ArrayCell;
