import React from "react";
import "./Button.css";

const STYLES = ["btn--primary", "btn--outline"];
const SIZES = ["btn--medium", "btn--large"];

const Button = (props) => {
  const checkButtonStyle = STYLES.includes(props.buttonStyle)
    ? props.buttonStyle
    : STYLES[0];
  const checkButtonSize = SIZES.includes(props.buttonSize)
    ? props.buttonSize
    : SIZES[0];

  return (
    <button
      className={`btn ${checkButtonStyle} ${checkButtonSize}`}
      onClick={props.onClick}
      type={props.type}
    >
      {props.children}
    </button>
  );
};

export default Button;
