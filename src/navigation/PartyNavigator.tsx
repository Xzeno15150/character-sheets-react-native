import { createNativeStackNavigator } from "@react-navigation/native-stack";
import PartyList from "../screens/PartyList";
import Party from "../screens/PartyScreen";


const Stack = createNativeStackNavigator();

export default function PartyNavigator() {
    return(
        <Stack.Navigator initialRouteName="Parties">
            <Stack.Screen name="Parties" component={PartyList} />
            <Stack.Screen name="Party" component={Party}/>
        </Stack.Navigator>
    )
}