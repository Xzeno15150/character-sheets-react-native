import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AppBar from "../components/AppBar";
import HomeScreen from "../screens/HomeScreen";

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
    return (
        <Stack.Navigator initialRouteName="Home"
            screenOptions={{
                header: (props) => <AppBar {...props} />,
            }}>
            <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
    )
}