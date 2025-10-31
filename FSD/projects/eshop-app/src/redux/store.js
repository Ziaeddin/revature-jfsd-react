import { createStore, combineReducers } from "redux";
import cartReducer from "./reducers/cartReducer";
import authReducer from "./reducers/authReducer";

const rootReducer = combineReducers({
    cart: cartReducer,
    auth: authReducer
});

const store = createStore(
    rootReducer, 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;