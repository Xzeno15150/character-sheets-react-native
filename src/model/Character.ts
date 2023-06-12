import { Stats } from "./Stats";
import { UserPartial } from "./UserPartial";
import CharacterElement from "./enums/CharacterElement";

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