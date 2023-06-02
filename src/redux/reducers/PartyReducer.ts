import { AnyAction } from "@reduxjs/toolkit";
import { FETCH_PARTIES } from "../constants";
import { PARTIES_LIST } from "../../data/Stub";

const initialState = {
    parties : PARTIES_LIST,
}

export default function reducer(state = initialState, action: AnyAction) {
    switch (action.type) {
        case FETCH_PARTIES:
            console.log(action)
            return {parties: action.payload}
        default:
            return {... state};
    }
}