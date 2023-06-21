import {describe, expect, it} from "@jest/globals";
import {CHARACTERS_LIST} from "../../data/Stub";
import characterReducer from "../../redux/reducers/CharacterReducer";
import {FETCH_CHARACTERS} from "../../redux/constants";
import CharacterElement from "../../model/enums/CharacterElement";

describe('test character reducer', ()=>{
    const initialState = {characters: CHARACTERS_LIST};
    const state = {
        characters: [{
            id : "1231316800218896",
            name : "Louise Michel",
            stats: {
                body : 70,
                mind : 90,
                charisma : 100
            },
            element : CharacterElement.FIRE,
            level: 7,
            user : {
                email : "louise.michele@communedeparis.fr",
                username : "black flag",
            },
            imagePath : "",
            healthPoint : {
                current : 0,
                max : 100
            },
            items : [
                {name: "drapeau noir", id: "1234"},
                {name: "fusil", id: "684684"},
            ],
            skills : [],
            party : {
                id : "",
                name : ""
            }
        },
            {
                id : "1236316800218895",
                name : "Pierre Kropotkin",
                stats: {
                    body : 40,
                    mind : 70,
                    charisma : 80
                },
                element : CharacterElement.GROUND,
                level: 1,
                user : {
                    email : "pierre.kropotkin@communisme-liberaire.org",
                    username : "La conquette du pain",
                },
                imagePath : "",
                healthPoint : {
                    current : 9,
                    max : 10
                },
                items : [],
                skills : [],
                party : {
                    id : "",
                    name : ""
                }
            }]
    };

    it('test default', ()=>{
        //@ts-ignore
        expect(characterReducer(undefined, {})).toEqual(initialState)
    });
    it('test fetch character', ()=>{
       expect(characterReducer(state, {type: FETCH_CHARACTERS})).toEqual(state);
    });
});