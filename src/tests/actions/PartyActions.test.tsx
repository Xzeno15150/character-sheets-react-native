import {describe, expect, it} from "@jest/globals";
import {PARTIES_LIST} from "../../data/Stub";
import {Party} from "../../model/Party";
import {UserPartial} from "../../model/UserPartial";
import CharacterElement from "../../model/enums/CharacterElement";
import {FETCH_PARTIES} from "../../redux/constants";
import {fetchParties, getPartyList} from "../../redux/actions/PartyActions";
import {useDispatch} from "react-redux";

describe("Party actions test", () => {
    it("fetch all parties", ()=>{
        const parties : Party[] = PARTIES_LIST;
        const expected = {
            type: FETCH_PARTIES,
            payload: parties
        };
        expect(fetchParties(parties)).toEqual(expected);
    });
    it('ferch user parties', ()=>{
        const user : UserPartial = {username: "Xeno", email:"toto@tutu.fr"};
        const expectedParties: Party[] = [{
            id : "1231316880218895",
            name : "Le groupe des trop cools",
            owner : {
                username : "Xzeno",
                email : "toto@tutu.fr",
            },
            characters : [
                {
                    id : "1231316800218895",
                    name : "Gudruc",
                    element : CharacterElement.WOOD,
                    level: 7,
                    user : {
                        email : "taefub@qfoufq.fr",
                        username : "OBQFOIUQSFSo",
                    }
                },
                {
                    id : "1236316800218895",
                    name : "Alex Zabel",
                    element : CharacterElement.FIRE,
                    level: 1,
                    user : {
                        email : "qsougf@qsfiug.fr",
                        username : "Neichan",
                    }
                },
            ],
        }];
        const expected = {
            type: FETCH_PARTIES,
            payload: expectedParties
        };
        // @ts-ignore
        const loadParties = () => getPartyList(user);
        const actual = loadParties();
        expect(actual).toEqual(expected);
    })
});