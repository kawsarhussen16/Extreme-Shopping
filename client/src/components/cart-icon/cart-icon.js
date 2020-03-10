import React from 'react';
import { ReactComponent as ShoppingIcon } from '../../asset/shopping-bag.svg';
import { toggleCartHidden } from '../../redux/cart/cart.actions.js';
import { connect } from 'react-redux';
import { selectItemsCount } from '../../redux/cart/cart.selector.js'
import { createStructuredSelector } from 'reselect';
import './cart-icon.style.scss';

const CartIcon = ({ toggleCartHidden, totalItems }) => {
	return (
		<div className="cart-icon" onClick={toggleCartHidden}>
			<ShoppingIcon className="shopping-icon" />
			<span className="item-count">{totalItems}</span>
		</div>
	);
};
const mapStateToProps = createStructuredSelector({
	totalItems: selectItemsCount,
})
const mapDispatchToProps = dispatch => ({
	toggleCartHidden: () => dispatch(toggleCartHidden())

});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);