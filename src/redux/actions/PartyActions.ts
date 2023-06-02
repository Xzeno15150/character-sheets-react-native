import { Party } from "../../model/Party";
import { FETCH_PARTIES } from "../constants";

export function fetchParties(parties : Party[]) {
    return {
        type : FETCH_PARTIES,
        payload : parties,
    }
}
