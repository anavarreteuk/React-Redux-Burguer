import React from "react";
import "./BuildControls.css";
import BuildControl from "./BuildControl/BuildControl";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" }
];

const buildControls = props => (
  <div className="buildcontrols">
    <p>
      Current Price: <strong>{props.price}</strong>{" "}
    </p>
    {controls.map(control => (
      <BuildControl
        added={() => props.ingredientAdded(control.type)}
        removed={() => props.ingredientSub(control.type)}
        disabled={props.disabled[control.type]}
        key={control.label}
        label={control.label}
      />
    ))}

    <button onClick={props.ordered} disabled={!props.purchasable} className="orderbutton">
      ORDER NOW
    </button>
  </div>
);

export default buildControls;
