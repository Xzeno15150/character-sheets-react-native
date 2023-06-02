import { AnyAction } from "@reduxjs/toolkit";
import { FETCH_PARTIES } from "../constants";

const initialState = {
    parties : []
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