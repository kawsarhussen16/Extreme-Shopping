import React from 'react';
import { ReactComponent as ShoppingIcon } from '../../asset/shopping-bag.svg';
import { toggleCartHidden } from '../../redux/cart/cart.actions.js';
import { connect } from 'react-redux';

import './cart-icon.style.scss';

const CartIcon = ({ toggleCartHidden }) => {
	return (
		<div className="cart-icon" onClick={toggleCartHidden}>
			<ShoppingIcon className="shopping-icon" />
			<span className="item-count">0</span>
		</div>
	);
};

const mapDispatchToProps = dispatch => ({
	toggleCartHidden: () => dispatch(toggleCartHidden())

});

export default connect(null, mapDispatchToProps)(CartIcon);