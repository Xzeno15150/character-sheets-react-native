import {View} from "react-native";
import { Character } from "../model/Character";
import { UserPartial } from "../model/UserPartial";
import { useSelector } from "react-redux";
import { selectUser } from "../redux/selectors/AuthSelectors";
import { selectCharacters } from "../redux/selectors/CharacterSelectors";

export default function CharacterList(){
    const parties : Character[] = useSelector(selectCharacters);
    const user : UserPartial = useSelector(selectUser);

    return (
        <View>
            
        </View>
    )
}