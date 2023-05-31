export type Character = {
    id: String;
    name: String;
    element: String;
    imagePath: String;
    healthPoint: HealthPoint;
    skills: SkillPartial[];
    items: ItemPartial[];
    party: PartyPartial;
}