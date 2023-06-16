import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CharacterList from "../screens/CharacterList";
import CharacterDetail from "../screens/CharacterDetail";

const Stack = createNativeStackNavigator();

export default function CharacterNavigator() {
    return(
        <Stack.Navigator initialRouteName="Characters">
            <Stack.Screen options={{title: "Characters"}} name="CharacterList" component={CharacterList} />
            <Stack.Screen options={{title: "Character"}} name="CharacterDetail" component={CharacterDetail}/>
        </Stack.Navigator>
    )
}
