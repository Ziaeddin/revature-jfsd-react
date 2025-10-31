import { ActionTypes } from "../constants/action-types";

const initialState = {
    isAuthenticated: !!localStorage.getItem('token'),
    username: localStorage.getItem('username') || '',
    token: localStorage.getItem('token') || null
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.LOGIN:
            return {
                ...state,
                isAuthenticated: true,
                username: action.payload.username,
                token: action.payload.token
            };
        
        case ActionTypes.LOGOUT:
            return {
                ...state,
                isAuthenticated: false,
                username: '',
                token: null
            };
        
        default:
            return state;
    }
};

export default authReducer;
