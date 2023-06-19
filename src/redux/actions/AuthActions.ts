import jwtDecode from "jwt-decode";
import { UserPartial } from "../../model/UserPartial";
import HTTPMethod from "../../utils/HTTTPMethod";
import { setItem } from "../../utils/asyncStorageAcess";
import { createRequest } from "../../utils/requestBack";
import { SET_LOGIN_ERROR_MESSAGE, SET_SIGN_IN, SET_SIGN_OUT } from "../constants";
import { LoginJWT } from "../../model/LoginJWT";

export function connectUser(user : UserPartial){
    // @ts-ignore
    return async dispatch => {
        const request : Request = createRequest("/login", HTTPMethod.POST, user);
        fetch(request)
        .then(response => {
            if (response.status === 401) {
                dispatch(setLoginErrorMessage("Invalid Credentials"))
                return;
            }
            return response.json();
            
        })
        .then(jwt => {
            const token = jwt.token;
            setItem("jwt", token);

            const decoded : LoginJWT = jwtDecode(token);
            const user : UserPartial = {
                email: decoded.upn,
                username: decoded.preferred_username,
            }
            dispatch(setLoggedIn(user))
        })
        .catch(error => dispatch(setLoginErrorMessage(error.message)));
    }
}

export function setLoginErrorMessage(message : string) {
    return {
        type: SET_LOGIN_ERROR_MESSAGE,
        payload: message
    }
}
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

