import {describe, expect, it} from "@jest/globals";
import authReducer from "../../redux/reducers/AuthReducer";
import {SET_SIGN_IN, SET_SIGN_OUT} from "../../redux/constants";

describe('test auth reducer', ()=>{
    const initialState = {
        isLoggedIn: false,
        userName: undefined,
        email : undefined,
    };
    const state = {
        isLoggedIn: true,
        userName: "admin",
        email : "admin@admins.com",
    };
    it('test default state', ()=>{
        //@ts-ignore
        expect(authReducer(undefined, {})).toEqual(initialState);
    });
    it('test sign in', ()=>{
        expect(authReducer(initialState, {type: SET_SIGN_IN, payload: {userName:"admin", email:"admin@admins.com"}})).toEqual(state);
    });
    it('test should sign out', ()=> {
        //@ts-ignore
        expect(authReducer(state, {type: SET_SIGN_OUT})).toEqual(initialState);
    });
});