import { CharacterElement } from "../model/enums/CharacterElement";

// TODO Change any to Element type
export function mapElementToIconName(element : CharacterElement) {
    switch (element) {
        case CharacterElement.WIND:
            return "weather-windy";
        case CharacterElement.FIRE:
            return "fire";
        case CharacterElement.GROUND:
            return "image-filter-hdr";
        case CharacterElement.WOOD:
            return "forest";
        default:
            return undefined;
    }
}