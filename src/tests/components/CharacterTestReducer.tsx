import { AnyAction } from "@reduxjs/toolkit"
import {CHARACTERS_LIST} from "../../data/Stub";
import characterReducer from "../../redux/reducers/CharacterReducer";

const initialState = {
    characters: CHARACTERS_LIST
}

export default function characterTestReducer(state = initialState, action : AnyAction) {
    return characterReducer(state, action);
}
