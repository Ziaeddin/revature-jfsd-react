import { ActionTypes } from "../constants/action-types";

const TAX_RATE = 0.10; // 10% tax rate

// Helper function to calculate cart totals
const calculateCartTotals = (carts) => {
    const subtotal = carts.reduce((total, item) => {
        return total + (item.price * item.qty);
    }, 0);
    
    const tax = subtotal * TAX_RATE;
    const total = subtotal + tax;
    
    return {
        subtotal: Number(subtotal.toFixed(2)),
        tax: Number(tax.toFixed(2)),
        total: Number(total.toFixed(2))
    };
};

const initialState = {
    carts: [],
    cartItemsCount: 0,
    subtotal: 0,
    tax: 0,
    total: 0
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.GET_CART_ITEMS_NUMBERS:
            return {
                ...state
                //cartItemsCount: state.carts.length
            };
        case ActionTypes.ADD_TO_CART:
            // Check if product already exists in cart
            const existingItemIndex = state.carts.findIndex(item => item.id === action.payload.id);
            
            let updatedCarts;
            if (existingItemIndex >= 0) {
                // Product exists, increment quantity
                updatedCarts = state.carts.map((item, index) =>
                    index === existingItemIndex
                        ? { ...item, qty: item.qty + 1 }
                        : item
                );
            } else {
                // Product doesn't exist, add new item
                updatedCarts = [...state.carts, { ...action.payload, qty: 1 }];
            }
            
            const totals = calculateCartTotals(updatedCarts);
            
            return {
                ...state,
                carts: updatedCarts,
                cartItemsCount: state.cartItemsCount + 1,
                ...totals
            };
        
        case ActionTypes.INCREMENT_CART_ITEM:
            const incrementedCarts = state.carts.map(item =>
                item.id === action.payload
                    ? { ...item, qty: item.qty + 1 }
                    : item
            );
            const incrementTotals = calculateCartTotals(incrementedCarts);
            
            return {
                ...state,
                carts: incrementedCarts,
                cartItemsCount: state.cartItemsCount + 1,
                ...incrementTotals
            };

        case ActionTypes.DECREMENT_CART_ITEM:
            const decrementedCarts = state.carts.map(item =>
                item.id === action.payload && item.qty > 1
                    ? { ...item, qty: item.qty - 1 }
                    : item
            );
            const decrementTotals = calculateCartTotals(decrementedCarts);
            
            return {
                ...state,
                carts: decrementedCarts,
                cartItemsCount: state.cartItemsCount - 1,
                ...decrementTotals
            };

        case ActionTypes.REMOVE_FROM_CART:
            const itemToRemove = state.carts.find(item => item.id === action.payload);
            const filteredCarts = state.carts.filter(item => item.id !== action.payload);
            const removeTotals = calculateCartTotals(filteredCarts);
            
            return {
                ...state,
                carts: filteredCarts,
                cartItemsCount: state.cartItemsCount - (itemToRemove ? itemToRemove.qty : 0),
                ...removeTotals
            };

        default:
            return state;
    }
};

export default cartReducer;