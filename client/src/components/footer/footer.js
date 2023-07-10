import React from "react";
import "./footer.style.scss";
export default function footer() {
  return (
    <div className="footer-container">
      <div className="copyright">
        © 2020 Copyright: Site By{" "}
        <a
          rel="noopener noreferrer"
          href="https://kawsarhussen.netlify.app/"
          target="_blank"
        >
          Md Kawsar Hussen
        </a>
      </div>
    </div>
  );
}
