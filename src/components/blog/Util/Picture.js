import React from "react";
import pic from "../../../pics/boy.png";

const picStyle = {
  width: "300px",
  height: "400px",
  boxShadow: "-10px 5px 19px 5px rgba(172, 169, 169, 0.932)",
  padding: "2rem",
  position: "relative",
};

function Picture(props) {
  return <img src={pic} alt="boy-smiling" style={picStyle} />;
}

export default Picture;
