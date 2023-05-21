import { NavigationContainer } from "@react-navigation/native";
import { useSelector } from 'react-redux'
import { selectIsLoggedIn } from "../redux/slices/AuthSlice";
import AppNavigator from "./AppNavigator";
import AuthNavigator from "./AuthNavigator";


export default function AppRoute() {
    const isLoggedIn = useSelector(selectIsLoggedIn);
    console.log(isLoggedIn);
    return (
        <NavigationContainer>
            {isLoggedIn ? <AppNavigator/> : <AuthNavigator/>}
        </NavigationContainer>
    )
}