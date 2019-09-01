import React from 'react';
import Button from '../form-button/form-button.js';
import './cart-toggle.style.scss';

const CartToggle = () => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            <Button> CHECKOUT </Button>
        </div>
    </div>
);


export default CartToggle;