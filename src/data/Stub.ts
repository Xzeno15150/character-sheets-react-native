import { Character } from "../model/Character";
import { Party } from "../model/Party";
import CharacterElement from "../model/enums/CharacterElement";

export const PARTIES_LIST : Party[]= [
    {
        id : "1231316880218895",
        name : "Le groupe des trop cools", 
        owner : {
            username : "Admin",  
            email : "admin@admins.com",
        },
        characters : [
            {
                id : "1231316800218895",
                name : "Gudruc",
                element : CharacterElement.WOOD,
                level: 7,
                user : {
                    email : "user1@users.com",
                    username : "Érina",
                }
            },
            {
                id : "1236316800218895",
                name : "Alex Zabel",
                element : CharacterElement.FIRE,
                level: 1,
                user : {
                    email : "user2@users.com",
                    username : "Neichan",
                }
            },
        ],
    },
    {
        id : "1231316863218895",
        name : "Le groupe des trops swagg", 
        owner : {
            username : "Érina",  
            email : "user1@users.com",
        },
        characters : [
            {
                id : "120987678GBKd895",
                name : "Jean Neymar",
                element : CharacterElement.WIND,
                level: 1,
                user : {
                    email : "user2@users.com",
                    username : "Neitah",
                }
            },
            {
                id : "OIOQI98YA934",
                name : "Truc Bidule",
                element : CharacterElement.FIRE,
                level: 99,
                user : {
                    username : "Admin",  
                    email : "admin@admins.com",
                }
            },
        ],
    },
]

export const CHARACTERS_LIST : Character[] = [
    {
        id : "1231316800218895",
        name : "Gudruc",
        stats: {
            body : 70,
            mind : 45,
            charisma : 55
        },
        element : CharacterElement.WOOD,
        level: 7,
        user : {
            email : "taefub@qfoufq.fr",
            username : "OBQFOIUQSFSo",
        },
        imagePath : "",
        healthPoint : {
            current : 9,
            max : 10
        },
        items : [
            {name: "tommate", id: "1234"},
            {name: "caquasquette", id: "684684"},
            {name: "sac", id: "68687"},
            {name: "torche", id: "554545"}
        ],
        skills : [],
        party : {
            id : "",
            name : ""
        }
    },
    {
        id : "1236316800218895",
        name : "Alex Zabel",
        stats: {
            body : 70,
            mind : 30,
            charisma : 70
        },
        element : CharacterElement.FIRE,
        level: 1,
        user : {
            email : "user2@users.com",
            username : "Neichan",
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
    }
]