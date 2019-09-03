import React from 'react';
import Button from '../form-button/form-button.js';
import './cart-toggle.style.scss';
import CartItem from '../cart-item/cart-item.js';
import { connect } from 'react-redux';

const CartToggle = ({ cartItems }) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {cartItems.map(item => (
                <CartItem key={item.id} item={item} />
            ))}
            <Button> CHECKOUT </Button>
        </div>
    </div>
);

const mapStateToProps = ({ cart: { cartItems } }) => ({
    cartItems
});

export default connect(mapStateToProps)(CartToggle);