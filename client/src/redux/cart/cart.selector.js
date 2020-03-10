import { createSelector } from 'reselect';

const selectcart = state => state.cart;

export const selectItems = createSelector(
    [selectcart], cart => cart.cartItems
);

export const selectCartHidden = createSelector(
    [selectcart], cart => cart.hidden
)

export const selectItemsCount = createSelector(
    [selectItems], cartItems => cartItems.reduce((acc, cur) => acc + cur.quantity, 0)
);

export const selectCartTotal = createSelector(
    [selectItems], cartItems => cartItems.reduce((acc, cur) => acc + cur.quantity * cur.price, 0)
);