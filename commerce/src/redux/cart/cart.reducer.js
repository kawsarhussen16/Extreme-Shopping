import CartActionTypes from './cart.type';
import { addItemToCart } from './cart.util.js'
const initial_state = {
    hidden: true,
    cartItems: [],
}


const cartReducer = (state = initial_state, action) => {
    switch (action.type) {
        case CartActionTypes.TOGGLE_CART_HIDDEN:
            return {
                ...state, hidden: !state.hidden
            };
        case CartActionTypes.ADD_ITEM:
            return {
                ...state, cartItems: addItemToCart(state.cartItems, action.payload)
            };
        default:
            return state;
    }
}

export default cartReducer;