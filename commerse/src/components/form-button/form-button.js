import React from "react";

import "./form-button.style.scss";

const FormButton = ({ children, ...allprops }) => (
  <button className="custom-button" {...allprops}>
    {children}
  </button>
);

export default FormButton;
