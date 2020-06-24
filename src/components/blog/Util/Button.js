import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Button(props) {
 let val = false;
  props.importance === 'high'? val = true: val = false;
  return (
    <button className = { val ? 'btn-imp': 'btn-norm' } >
      {props.label}
      {"  "}
      {props.icon ? (
        <FontAwesomeIcon icon={props.icon} size="1x" className="move-right" />
      ) : null}
    </button>
  );
}

export default Button;
