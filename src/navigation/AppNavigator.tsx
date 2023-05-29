
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import CharacterNavigator from "./CharacterNavigator";
import PartyNavigator from "./PartyNavigator";



const Tab = createBottomTabNavigator();

export default function AppNavigator() {
    return (
        <Tab.Navigator screenOptions={{headerShown : false}}>
            <Tab.Screen name="Characters" component={CharacterNavigator} />
            <Tab.Screen name="Parties" component={PartyNavigator} />
        </Tab.Navigator>
    )
}