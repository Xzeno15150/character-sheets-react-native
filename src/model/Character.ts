import { Stats } from "./Stats";
import CharacterElement from "./enums/CharacterElement";
import {UserPartial} from "./UserPartial";

export type Character = {
    id: String;
    name: String;
    stats: Stats;
    element: CharacterElement;
    level: number;
    imagePath: String;
    healthPoint: HealthPoint;
    skills: SkillPartial[];
    items: ItemPartial[];
    party: PartyPartial;
    user: UserPartial;
}