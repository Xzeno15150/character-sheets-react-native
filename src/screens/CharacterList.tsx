import { List } from "react-native-paper";
import { Character } from "../model/Character";
import { useSelector } from "react-redux";
import { selectCharacters } from "../redux/selectors/CharacterSelectors";
import CharacterItem from "../components/CharacterItem";

export default function CharacterList() {
    const characters: Character[] = useSelector(selectCharacters);
    return (
        <List.Section>
            {characters ?
                //@ts-ignore
                characters.map(character => <CharacterItem key={character.id} character={character} touchable/>)
                : undefined
            }
        </List.Section>
    )
}