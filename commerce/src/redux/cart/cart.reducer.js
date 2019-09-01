import CartActionTypes from './cart.type';

const initial_state = {
    hidden: true,
}


const cartReducer = (state = initial_state, action) => {
    switch (action.type) {
        case CartActionTypes.TOGGLE_CART_HIDDEN:
            return {
                ...state, hidden: !state.hidden
            };
        default:
            return state;
    }
}

export default cartReducer;