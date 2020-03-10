import React from "react";

import "./form-button.style.scss";

const FormButton = ({ children, isGoogleSignIn, inverted, ...allprops }) => (
  <button
    className={`${inverted ? 'inverted' : ''}  ${isGoogleSignIn ? "google-sign-in" : ""} custom-button`}
    {...allprops}
  >
    {children}
  </button>
);

export default FormButton;
