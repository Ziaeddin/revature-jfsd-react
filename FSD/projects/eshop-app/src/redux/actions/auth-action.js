import { ActionTypes } from "../constants/action-types";

export const login = (username, token) => {
    return {
        type: ActionTypes.LOGIN,
        payload: { username, token }
    };
};

export const logout = () => {
    return {
        type: ActionTypes.LOGOUT
    };
};
