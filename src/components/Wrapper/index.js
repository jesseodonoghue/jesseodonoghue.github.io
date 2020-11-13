import React from "react";
import "./style.css";

function Wrapper(props) {
  return <main>{props.children}</main>;  
}

export default Wrapper;