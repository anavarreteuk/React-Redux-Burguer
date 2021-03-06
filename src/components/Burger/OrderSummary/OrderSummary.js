import React from "react";
import Aux from "../../../hoc/Aux";
import Button from '../../UI/Button/Button'

const orderSummary = props => {
  const ingredientSummary = Object.keys(props.ingredients).map(igKey => {
    return (
      <li key={igKey}>
        <span style={{ textTransform: "capitalize" }}>{igKey}:</span>{" "}
        {props.ingredients[igKey]}
      </li>
    );
  });

  return <Aux>
      <h3>Your Order</h3>
      <p>A delicious burguer with the following ingredients:</p>
      <ul>{ingredientSummary}</ul>
      <p>
        <strong>Total Price: {props.price}</strong>
      </p>
      <p>Continue to CheckOut</p>
      <Button clicked={props.purchaseCancelled} btnType="danger">
        CANCEL
      </Button>
      <Button clicked={props.purchaseContinued} btnType="success">
        CONTINUE
      </Button>
    </Aux>;
};

export default orderSummary;
