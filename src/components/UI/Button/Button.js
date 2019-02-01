import React from "react";
import './Button.css'

const button = props => (
  <button className={[button, button[props.btnType]].join(' ')} onClick={props.clicked}>{props.children}</button>
);

export default button;
