import { Image, StyleSheet, View } from "react-native";
import { Button, Text } from "react-native-paper";
import LoginForm from "../components/LoginForm";
import RegisterForm from "../components/RegisterForm";
import { useSelector } from "react-redux";
import { selectLoginErrorMessage } from "../redux/selectors/AuthSelectors";

type AuthScreenProps = {
    navigation: any,
    isRegister?: boolean | undefined
}

export default function AuthScreen(props: AuthScreenProps) {
    return (
        <View style={styles.container}>
            <Image source={require("../../assets/logo-game-taverne-bar.png")} style={styles.logo} />
            <LoginForm />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    logo: {
        width: undefined,
        height: "30%",
        aspectRatio: 1
    }
})