import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import { btnFirstStyle, btnSecondStyle } from "./JsStyle";

function Button(props) {
  return (
    <button
      className="buttonc"
         >
      {props.label}
      {"  "}
      {props.icon ? (
        <FontAwesomeIcon icon={props.icon} size="1x" className="move-right" />
      ) : null}
    </button>
  );
}

export default Button;
