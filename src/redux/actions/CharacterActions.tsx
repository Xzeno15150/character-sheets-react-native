import { Character } from "../../model/Character";
import { UserPartial } from "../../model/UserPartial";
import { FETCH_CHARACTERS } from "../constants";

export function fetchCharacters(characters : Character[]) {
    return {
        type : FETCH_CHARACTERS,
        payload : characters,
    }
}

export function getCharacterList(user : UserPartial){
    //@ts-ignore
    return async dispatch =>{
        const userCharacters : Character[] = [] // fetch data from back, segregated by user
        dispatch(fetchCharacters(userCharacters))
    };
}