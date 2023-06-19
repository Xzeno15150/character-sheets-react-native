import {Character} from "../../model/Character";
import { FETCH_CHARACTERS } from "../constants";

export function setCharacters(characters : Character[]) {
    return {
        type : FETCH_CHARACTERS,
        payload: characters,
    }
}
