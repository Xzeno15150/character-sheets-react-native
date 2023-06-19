    import { Image, StyleSheet, View } from "react-native";
import { Button } from "react-native-paper";
import LoginForm from "../components/LoginForm";
import RegisterForm from "../components/RegisterForm";

type AuthScreenProps = {
    navigation: any,
    isRegister?: boolean | undefined
}

export default function AuthScreen(props: AuthScreenProps) {
    return (
        <View style={styles.container}>
            <Image source={require("../../assets/logo-game-taverne-bar.png")} style={styles.logo} />
            {props.isRegister ?
                (
                    <RegisterForm />
                )
                : (
                    <>
                        <LoginForm />
                        <Button onPress={() => props.navigation.navigate("Register")}>
                            Still not registered ?
                        </Button>
                    </>
                )
            }
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