import React from "react";
import "./contact.style.scss";

const Contact = () => (
  <div className="contact-container">
    <div className="contact">
      <h1> Need Help ?</h1>
      <a href="mailto: helpdesk@extremeshopping.com">
        {" "}
        <strong>Email Us: helpdesk@extremeshopping.com </strong>
      </a>
      <h2> Call Us : +347 678 9876 </h2>
    </div>
  </div>
);

export default Contact;
