export const addItemToCart = (cartItems, newItem) => {
    const existingitems = cartItems.find(cartitem => cartitem.id === newItem.id);

    if (existingitems) {
        return cartItems.map(cartItem =>
            cartItem.id === newItem.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem);
    }
    return [...cartItems, { ...newItem, quantity: 1 }]
};

export const removeItemFromCart = (cartItems, itemtoBeRemoved) => {
    const existingitem = cartItems.find(item => item.id === itemtoBeRemoved.id)

    if (existingitem.quantity === 1) {
        return cartItems.filter(item => item.id !== itemtoBeRemoved.id)
    }
    return cartItems.map(item =>
        item.id === itemtoBeRemoved.id ? { ...item, quantity: item.quantity - 1 } : item
    )
}