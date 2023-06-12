
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import CharacterNavigator from "./CharacterNavigator";
import PartyNavigator from "./PartyNavigator";
import { useTheme } from "react-native-paper";



const Tab = createBottomTabNavigator();

export default function AppNavigator() {
    const { colors } = useTheme();
    return (
        <Tab.Navigator screenOptions={{headerShown : false}}>
            <Tab.Screen name="Characters" component={CharacterNavigator} />
            <Tab.Screen name="Parties" component={PartyNavigator} />
        </Tab.Navigator>
    )
}