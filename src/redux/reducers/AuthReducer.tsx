import { AnyAction } from "@reduxjs/toolkit"
import { SET_LOGIN_ERROR_MESSAGE, SET_SIGN_IN, SET_SIGN_OUT } from "../constants";

const initialState = {
    isLoggedIn: false,
    userName: undefined,
    email : undefined,
    errorMessage : undefined
}

export default function authReducer(state = initialState, action : AnyAction) {
    switch (action.type) {
        case SET_SIGN_IN :
            return {
                isLoggedIn : true,
                userName : action.payload.userName,
                email : action.payload.email,
            };
        case SET_LOGIN_ERROR_MESSAGE:
            return {
                ...initialState,
                errorMessage : action.payload
            };
        case SET_SIGN_OUT :
            return {...initialState};
        default:
            return {...state};
    }
}
