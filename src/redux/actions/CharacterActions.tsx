import { Character } from "../../model/Character";
import { FETCH_CHARACTERS } from "../constants";

export function fetchParties(characters : Character[]) {
    return {
        type : FETCH_CHARACTERS,
        payload : characters,
    }
}