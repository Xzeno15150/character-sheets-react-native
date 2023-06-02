import { AnyAction } from "@reduxjs/toolkit";
import { PARTIES_LIST } from "../../data/Stub";
import { fetchParties } from "../actions/PartyActions";
import { UserPartial } from "../../model/UserPartial";
import { Party } from "../../model/Party";
import { CharacterPartial } from "../../model/CharacterPartial";

export function getPartyList(user : UserPartial)  {
    return (dispatch : any) => {
        const userParties = PARTIES_LIST.filter(
            (party : Party) => 
                party.owner.email === user.email 
                || party.characters.filter((character : CharacterPartial) => character.user.email === user.email).length != 0);
        dispatch(fetchParties(userParties))
    };
}