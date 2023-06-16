import { AnyAction } from "@reduxjs/toolkit"
import { FETCH_CHARACTERS } from "../constants";
import {CHARACTERS_LIST} from "../../data/Stub";

const initialState = {
    characters: CHARACTERS_LIST
}

export default function characterReducer(state = initialState, action : AnyAction) {
    switch (action.type) {
        case FETCH_CHARACTERS :
            state.characters = action.payload;
            return {... state};
        default:
            return {...state};
    }
}
