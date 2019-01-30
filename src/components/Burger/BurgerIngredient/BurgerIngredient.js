import React, { Component } from "react";
import "./BurgerIngredient.css";
import propTypes from "prop-types";

class BurgerIngredient extends Component {
  render() {
    let ingredient = null;

    switch (this.props.type) {
      case "bread-bottom":
        ingredient = <div className="breadbottom" />;
        break;
      case "bread-top":
        ingredient = (
          <div className="breadtop">
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

BurgerIngredient.propTypes = {
  type: propTypes.string.isRequired
};

export default BurgerIngredient;
