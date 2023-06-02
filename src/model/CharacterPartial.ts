import { UserPartial } from "./UserPartial";
import CharacterElement from "./enums/CharacterElement";

export type CharacterPartial = {
    id: string,
    name :  string,
    element: CharacterElement,
    level: number,
    user : UserPartial,
}