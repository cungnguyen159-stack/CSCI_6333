export const ADD_ITEM = "ADD_ITEM";
export const INCREMENT_QTY = "INCREMENT_QTY";
export const DECREMENT_QTY = "DECREMENT_QTY";
export const DELETE_ITEM = "DELETE_ITEM";
export const CLEAR_CART = "CLEAR_CART";

export const addItem = (product) => ({
    type: ADD_ITEM,
    payload: { product },
});

export const incrementQty = (id) => ({
    type: INCREMENT_QTY,
    payload: { id },
});

export const decrementQty = (id) => ({
    type: DECREMENT_QTY,
    payload: { id },
});

export const deleteItem = (id) => ({
    type: DELETE_ITEM,
    payload: { id },
});

export const clearCart = () => ({
    type: CLEAR_CART,
});
