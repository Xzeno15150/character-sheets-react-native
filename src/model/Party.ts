import { CharacterPartial } from "./CharacterPartial";
import { UserPartial } from "./UserPartial";

export type Party = {
    id : string,
    name : string,
    owner : UserPartial,
    characters : CharacterPartial[],
}