import {getCharacters as getCharactersList} from "../../data/Stub";

export const getCharacters = () => {
    //@ts-ignore
    return dispatch => getCharactersList();
}