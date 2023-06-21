import {describe, expect, it} from "@jest/globals";
import {setLoggedIn, setLoggedOut} from "../../redux/actions/AuthActions";
import {UserPartial} from "../../model/UserPartial";
import {SET_SIGN_IN, SET_SIGN_OUT} from "../../redux/constants";

describe('test actions auth', () => {

    it('action login', () => {
        const payload: UserPartial = {username: "admin", email: "admin@admins.fr"};
        const expectation = {
            type: SET_SIGN_IN,
            payload: payload,
        };

        expect(setLoggedIn(payload)).toEqual(expectation);
    });

    it('action logout', ()=>{
        const expectation = {
            type: SET_SIGN_OUT
        };
        expect(setLoggedOut()).toEqual(expectation);
    });
});