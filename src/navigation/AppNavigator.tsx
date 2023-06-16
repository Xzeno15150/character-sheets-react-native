
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {useTheme} from "react-native-paper";
import CharacterNavigator from "./CharacterNavigator";
import PartyNavigator from "./PartyNavigator";




const Tab = createBottomTabNavigator();

export default function AppNavigator() {
    const { colors } = useTheme();
    return (
        <Tab.Navigator initialRouteName="Characters"
                       screenOptions={{
                           headerShown : false,
                       }}>
            <Tab.Screen name="Characters" component={CharacterNavigator}/>
            <Tab.Screen name="Parties" component={PartyNavigator} />
        </Tab.Navigator>
    )
}