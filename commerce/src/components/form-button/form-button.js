import React from "react";

import "./form-button.style.scss";

const FormButton = ({ children, isGoogleSignIn, ...allprops }) => (
  <button
    className={`${isGoogleSignIn ? "google-sign-in" : ""} custom-button`}
    {...allprops}
  >
    {children}
  </button>
);

export default FormButton;
