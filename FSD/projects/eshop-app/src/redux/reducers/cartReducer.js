import { ActionTypes } from "../constants/action-types";

const initialState = {
    carts: [],
    cartItemsCount: 0
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.GET_CART_ITEMS_NUMBERS:
            return {
                ...state
                //cartItemsCount: state.carts.length
            };
        case ActionTypes.ADD_TO_CART:
            // check if the cart empty no need to check directly  add the cart
            // if not empty check if the product is already exist in cart if exist increase the qty else add new product
            //else add the product to cart with qty 1
            if(state.carts.length===0){
                let product = {...action.payload, qty:1};
                state.carts.push(product);
            }else{
                let isExist = false;
                state.carts.map((item,index)=>{
                    if(item.id === action.payload.id){
                        state.carts[index].qty += 1;
                        isExist = true;
                    }

                });
                if(!isExist){
                    let _item = {...action.payload, qty:1};
                    state.carts.push(_item);
                }
            }

            return {
                ...state,
                cartItemsCount: state.cartItemsCount + 1
            };
        default:
            return state;
    }
};

export default cartReducer;