
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import CharacterNavigator from "./CharacterNavigator";
import PartyNavigator from "./PartyNavigator";



const Tab = createBottomTabNavigator();

export default function AppNavigator() {
    return (
        <Tab.Navigator screenOptions={{headerShown : false}}>
            <Tab.Screen name="CharactersNavigator" component={CharacterNavigator} />
            <Tab.Screen name="PartiesNavigator" component={PartyNavigator} />
        </Tab.Navigator>
    )
}