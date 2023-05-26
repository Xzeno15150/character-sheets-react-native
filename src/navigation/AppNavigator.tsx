
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import CharacterList from "../screens/CharacterList";
import PartyList from "../screens/PartyList";




const Tab = createBottomTabNavigator();

export default function AppNavigator() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Characters" component={CharacterList} />
            <Tab.Screen name="Parties" component={PartyList} />
        </Tab.Navigator>
    )
}