import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Character from "../screens/CharacterScreen";
import PartyList from "../screens/PartyList";

const Stack = createNativeStackNavigator();

export default function PartyNavigator() {
    return (
        <Stack.Navigator initialRouteName="Parties">
            <Stack.Screen options={{title: "Parties"}} name="PartyList" component={PartyList} />
            <Stack.Screen options={{title: "Character"}} name="CharacterDetail" component={Character}/>
        </Stack.Navigator>
    )
}