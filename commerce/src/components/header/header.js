import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { auth } from '../../firebase/firebase.js';

import Extreme from '../../asset/favi.png';
import './header.style.scss';
import CartIcon from '../cart-icon/cart-icon.js'
import CartBox from '../cart-toggle/cart-toggle.js';

import { createStructuredSelector } from 'reselect';
import { selectCartHidden } from '../../redux/cart/cart.selector.js';
import { selectCurrentUser } from '../../redux/user/user.selector.js';


const Header = ({ currentUser, hidden }) => (
  <div className='header'>
    <Link className='logo-container' to='/'>

      <img src={Extreme} alt="logo" />
    </Link>
    <div className='options'>
      <Link className='option' to='/shop'>
        SHOP
      </Link>
      <Link className='option' to='/contact'>
        CONTACT
      </Link>
      {currentUser ? (
        <Link to='/signin' className='option' onClick={() => auth.signOut()}>
          SIGN OUT
        </Link>
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



const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);