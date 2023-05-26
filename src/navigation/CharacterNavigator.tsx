import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CharacterList from "../screens/CharacterList";
import Character from "../screens/Character";

const Stack = createNativeStackNavigator();

export default function CharacterNavigator() {
    return(
        <Stack.Navigator initialRouteName="Characters">
            <Stack.Screen name="Characters" component={CharacterList} />
            <Stack.Screen name="Character" component={Character}/>
        </Stack.Navigator>
    )
}
