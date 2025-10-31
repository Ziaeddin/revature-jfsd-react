import { ActionTypes } from "../constants/action-types";

export const addToCart = (product) => {
    return {
        type: ActionTypes.ADD_TO_CART,
        payload: product
    };
};

export const incrementCartItem = (productId) => {
    return {
        type: ActionTypes.INCREMENT_CART_ITEM,
        payload: productId
    };
};

export const decrementCartItem = (productId) => {
    return {
        type: ActionTypes.DECREMENT_CART_ITEM,
        payload: productId
    };
};

export const removeFromCart = (productId) => {
    return {
        type: ActionTypes.REMOVE_FROM_CART,
        payload: productId
    };
};