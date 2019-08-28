import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase.js";
import { ReactComponent as Logo } from "../../asset/crown.svg";
import { connect } from 'react-redux';

import "./header.style.scss";

const Header = ({ currentUser }) => (
  <div className="header">
    <Link className="logo-container" to="/">
      <Logo className="logo" />
    </Link>
    <div className="options">
      <Link className="option" to="/shop">
        SHOP
      </Link>
      <Link className="option" to="/shop">
        CONTACT
      </Link>

      {currentUser ? (
        <div className="option" onClick={() => auth.signOut()}>
          <Link className="option" to="/signin">
            SIGN OUT
          </Link>
        </div>
      ) : (
          <Link className="option" to="/signin">
            SIGN IN
        </Link>
        )}
    </div>
  </div>
);

const mapStateToProps = state => ({
  currentUser: state.user.currentUser
});

export default connect(mapStateToProps)(Header);
