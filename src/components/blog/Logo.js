import React from "react";
import pic from "../../pics/logo3.png";
function Logo() {
  return (
    <section className="logo">
      {/* <h1>CB<b>GC</b></h1> */}
      <img src={pic} width="40" height="40" alt="" />
    </section>
  );
}

export default Logo;
