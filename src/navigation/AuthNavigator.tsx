import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AuthScreen from "../screens/AuthScreen";

const Stack = createNativeStackNavigator();

export default function AuthNavigator() {
    return (
        <Stack.Navigator initialRouteName="Login">
            <Stack.Screen name="Login" component={AuthScreen} />
            <Stack.Screen name="Register">
                {(props: any) => <AuthScreen {...props} isRegister={true} />}
            </Stack.Screen>
        </Stack.Navigator>
    )
}