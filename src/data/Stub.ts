import { Party } from "../model/Party";
import CharacterElement from "../model/enums/CharacterElement";

export const PARTIES_LIST : Party[]= [
    {
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
    },
    {
        id : "1231316863218895",
        name : "Le groupe des trops swagg", 
        owner : {
            username : "Erina",  
            email : "qeofub@qsifub.fr",
        },
        characters : [
            {
                id : "12qepf6800218895",
                name : "ZKJDIHAOIZHR",
                element : CharacterElement.GROUND,
                level: 7,
                user : {
                    email : "Sqfjb@qfoufq.fr",
                    username : "UQJBSFOIN",
                }
            },
            {
                id : "120987678GBKd895",
                name : "TYUikjnd,",
                element : CharacterElement.WIND,
                level: 1,
                user : {
                    email : "qsougf@qsfiug.fr",
                    username : "Neichan",
                }
            },
        ],
    },
]