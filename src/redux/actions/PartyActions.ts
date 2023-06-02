import { Party } from "../../model/Party";
import { UserPartial } from "../../model/UserPartial";
import { FETCH_PARTIES } from "../constants";

export function fetchParties(parties : Party[]) {
    return {
        type : FETCH_PARTIES,
        payload : parties,
    }
}

export function getPartyList(user : UserPartial)  {
    // @ts-ignore
    return async dispatch => {
        const userParties : Party[] = [] // fetch data from back, segregated by user
        dispatch(fetchParties(userParties))
    };
}