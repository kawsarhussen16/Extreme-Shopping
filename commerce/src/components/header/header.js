import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { auth } from '../../firebase/firebase.js';

import { ReactComponent as Logo } from '../../asset/crown.svg';
import './header.style.scss';
import CartIcon from '../cart-icon/cart-icon.js'
import CartBox from '../cart-toggle/cart-toggle.js';

const Header = ({ currentUser, hidden }) => (
  <div className='header'>
    <Link className='logo-container' to='/'>
      <Logo className='logo' />
    </Link>
    <div className='options'>
      <Link className='option' to='/shop'>
        SHOP
      </Link>
      <Link className='option' to='/contact'>
        CONTACT
      </Link>
      {currentUser ? (
        <div className='option' to='/signin' onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
      ) : (
          <Link className='option' to='/signin'>
            SIGN IN
        </Link>
        )}
      <CartIcon />
    </div>
    {hidden ? null : <CartBox />}

  </div>
);


const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
  currentUser,
  hidden
});

export default connect(mapStateToProps)(Header);