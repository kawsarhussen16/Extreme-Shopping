export const addItemToCart = (cartItems, newItem) => {
    const existingitems = cartItems.find(cartitem => cartitem.id === newItem.id);

    if (existingitems) {
        return cartItems.map(cartItem =>
            cartItem.id === newItem.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem);
    }
    return [...cartItems, { ...newItem, quantity: 1 }]
};