import React from 'react';
import Button from '../form-button/form-button.js';
import './cart-toggle.style.scss';
import CartItem from '../cart-item/cart-item.js';
import { selectItems } from '../../redux/cart/cart.selector.js';
import { toggleCartHidden } from '../../redux/cart/cart.actions.js';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

const CartToggle = ({ cartItems, history, dispatch }) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {cartItems.length ? (
                cartItems.map(cartItem => (
                    <CartItem key={cartItem.id} item={cartItem} />
                ))
            ) : (
                    <span className='empty-message'>Your cart is empty</span>
                )}
            <Button onClick={() => {
                history.push('/checkout');
                dispatch(toggleCartHidden());
            }} > CHECKOUT </Button>
        </div>
    </div >
);

const mapStateToProps = state => ({
    cartItems: selectItems(state)
});

export default withRouter(connect(mapStateToProps)(CartToggle));