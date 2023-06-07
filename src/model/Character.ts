import { UserPartial } from "./UserPartial";
import CharacterElement from "./enums/CharacterElement";

export type Character = {
    id: String;
    name: String;
    element: CharacterElement;
    level: number;
    imagePath: String;
    healthPoint: HealthPoint;
    skills: SkillPartial[];
    items: ItemPartial[];
    party: PartyPartial;
    user: UserPartial;
}