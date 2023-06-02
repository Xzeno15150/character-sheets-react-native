import { SET_SIGN_IN, SET_SIGN_OUT } from "../constants";

export function setLoggedIn(user : UserPartial) {
    return {
        type : SET_SIGN_IN,
        payload : user
    }
}

export function setLoggedOut() {
    return {
        type : SET_SIGN_OUT,
    }
}