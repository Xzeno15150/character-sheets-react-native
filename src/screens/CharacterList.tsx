import { List } from "react-native-paper";
import { Character } from "../model/Character";
import { UserPartial } from "../model/UserPartial";
import { useSelector } from "react-redux";
import { selectUser } from "../redux/selectors/AuthSelectors";
import { selectCharacters } from "../redux/selectors/CharacterSelectors";
import CharacterItem from "../components/CharacterItem";
import {useNavigation} from "@react-navigation/native";
import {TouchableOpacity} from "react-native";

export default function CharacterList(){
    const characters : Character[] = useSelector(selectCharacters);
    const navigation = useNavigation();
    return (
        <List.Section>
            {characters ? characters.map((character : any) =>
                <TouchableOpacity  key={character.id} onPress={()=>
                    // @ts-ignore
                    navigation.navigate("CharacterDetail", { character: character})}>
                    <CharacterItem character={character} />
                </TouchableOpacity>)
                : undefined
            }
        </List.Section>
    )
}