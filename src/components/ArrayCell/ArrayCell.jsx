import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../redux/actions";
import * as selectors from "../../redux/selectors";
import getClosestNumbers from "../../services/closestNumbers";
import styles from "./ArrayCell.module.css";

class ArrayCell extends Component {
  hoverOnHandler = () => {
    const { array, numberQty, element, onHover } = this.props;
    const closestNumbers = getClosestNumbers(array, element, numberQty);
    onHover(closestNumbers);
  };

  hoverOffHandler = () => {
    const { onHover } = this.props;
    onHover({});
  };

  shouldComponentUpdate(nextProps, nextState) {
    const { element, illuminated, sumHover, id } = this.props;
    if (nextProps.sumHover !== sumHover) {
      return true;
    }
    if (nextProps.element.amount !== element.amount) {
      return true;
    }
    if (nextProps.illuminated[id] !== illuminated[id]) {
      return true;
    }

    return false;
  }

  render() {
    console.log("td");
    const { element, sum, sumHover, onIncrease, illuminated, id } = this.props;

    let bg = {
      background:
        "linear-gradient(110deg,#eee 0%,#e3e3e3 10%,#fff 20%,#fff 25%,#f0f0f0 26%,#fff 28%,#ddd 55%,#eee 100%)"
    };

    const percents = (element.amount / sum) * 100;

    if (illuminated[id]) {
      bg.background =
        "linear-gradient(110deg, #f90c04 0%, #ed413b 10%, #fff 20%, #fff 25%, #f0f0f0 26%, #fff 28%, #f53d37 55%, #f90c04 100%)";
    }

    if (sumHover) {
      bg.background = `linear-gradient(to top, #fff200, #1e9600 ${percents}%, transparent ${percents}%)`;
    }

    return (
      <td
        className={styles.simpleTd}
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
    // array: selectors.getArray(state),
    numberQty: selectors.getNumbersQty(state),
    illuminated: selectors.getIlluminated(state),
    element: selectors.getCell(state, id, lineId),
    sum: selectors.getSum(state, lineId)
  };
};

const mapDispatchToProps = (dispatch, { id, lineId }) => {
  return {
    onIncrease: () => dispatch(actions.increase(id, lineId)),
    onHover: closestNumbers => dispatch(actions.illuminate(closestNumbers))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ArrayCell);
