import { List } from "react-native-paper";
import { Character } from "../model/Character";
import { UserPartial } from "../model/UserPartial";
import { useSelector } from "react-redux";
import { selectUser } from "../redux/selectors/AuthSelectors";
import { selectCharacters } from "../redux/selectors/CharacterSelectors";

export default function CharacterList(){
    const characters : Character[] = useSelector(selectCharacters);
    const user : UserPartial = useSelector(selectUser);

    return (
        <List.Section>
            {characters ? characters.map((character : any) => <PartyListItem key={character.id} character={character}/>) : undefined}
        </List.Section>
    )
}