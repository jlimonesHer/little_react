import React from "react";
import '../css/ButtonClear.css'

const ButtonClear = (props) => (
  <div className="container_button_clear" onClick={props.manClear}>
    {props.children}
  </div>
);

export default ButtonClear;