import React, { Component } from "react";
import "./BurgerIngredient.css";
import PropTypes from "prop-types";

class BurgerIngredient extends Component {
  render() {
    let ingredient = null;

    switch (this.props.type) {
      case "bread-bottom":
        ingredient = <div className="breadBottom" />;
        break;
      case "bread-top":
        ingredient = (
          <div className="bread-top">
            <div className="seeds1" />
            <div className="seeds2" />
          </div>
        );
        break;
      case "meat":
        ingredient = <div className="meat" />;
        break;
      case "cheese":
        ingredient = <div className="cheese" />;
        break;
      case "salad":
        ingredient = <div className="salad" />;
        break;
      case "bacon":
        ingredient = <div className="bacon" />;
        break;
      default:
        ingredient = null;
    }

    return ingredient;
  }
}

BurgerIngredient.PropTypes = {
  type: PropTypes.string.isRequired
};

export default BurgerIngredient;
