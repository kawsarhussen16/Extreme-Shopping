import React from "react";
import "./form-input.style.scss";

const FormInput = ({ handleInput, label, ...allprops }) => (
  <div className="group">
    <input className="form-input" onChange={handleInput} {...allprops} />
    {label ? (
      <label
        className={`${allprops.value.length ? "shrink" : ""} form-input-label`}
      >
        {label}
      </label>
    ) : null}
  </div>
);

export default FormInput;
