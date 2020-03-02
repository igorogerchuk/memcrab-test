import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../redux/actions";
import * as selectors from "../../redux/selectors";
import getClosestNumbers from "../../services/closestNumbers";
// import styles from "./ArrayCell.module.css";

class ArrayCell extends Component {
  hoverOnHandler = () => {
    const { array, numberQty, element, onHover } = this.props;
    const closestNumbers = getClosestNumbers(array, element, numberQty);
    onHover(closestNumbers);
  };

  hoverOffHandler = () => {
    const { onHover } = this.props;
    onHover([]);
  };

  render() {
    const { element, sum, sumHover, onIncrease, id, illuminated } = this.props;

    let bg = { background: "white" };
    const percents = (element.amount / sum) * 100;
    if (illuminated.length > 0 && illuminated.includes(element.id)) {
      bg.background = "green";
    }
    if (sumHover) {
      bg.background = `linear-gradient(to top, #fff200, #1e9600 ${percents}%, transparent ${percents}%)`;
    }
    return (
      <td
        onClick={onIncrease}
        id={id}
        onMouseEnter={this.hoverOnHandler}
        onMouseLeave={this.hoverOffHandler}
        style={bg}
      >
        {sumHover ? percents.toFixed(1) + "%" : element.amount}
      </td>
    );
  }
}

const mapStateToProps = (state, { id, lineId }) => {
  return {
    array: selectors.getArray(state),
    numberQty: selectors.getNumbersQty(state),
    illuminated: selectors.getIlluminated(state),
    element: selectors.getCell(state, id, lineId)
  };
};

const mapDispatchToProps = (dispatch, { id, lineId }) => {
  return {
    onIncrease: () => dispatch(actions.increase(id, lineId)),
    onHover: closestNumbers => dispatch(actions.illuminate(closestNumbers))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ArrayCell);
