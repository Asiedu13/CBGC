import React from "react";
import Mission from "./Policy_comp/Mission";
import Privacy from "./Policy_comp/PrivacyPolicy";
import Terms from "./Policy_comp/TermsAndConditions";
const Policies = () => {
  return (
    <section className="policies">
      {/* The Mission */}
      <Mission />
      
      {/* The Terms and Conditions */}
      <Terms />
      {/* The Privacy Policy */}
      <Privacy />
    </section>
  );
};

export default Policies;
