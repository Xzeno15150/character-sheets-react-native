import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { Button,Text,TextInput, useTheme } from "react-native-paper";
import { useDispatch, useSelector } from 'react-redux'
import { connectUser, setLoggedIn } from "../redux/actions/AuthActions";
import { selectLoginErrorMessage } from "../redux/selectors/AuthSelectors";
import { red100 } from "react-native-paper/src/styles/themes/v2/colors";

export default function LoginForm() {
    const { colors } = useTheme();
    const errorMessage = useSelector(selectLoginErrorMessage)
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useDispatch();

    const handleLogin = () => {
        // @ts-ignore
        const loginUser = () => dispatch(connectUser({ email : email, password: password}));
        loginUser();
    }

    const styles = makeStyles(colors);

    return (
        <View style={styles.container}>
            <Text style={styles.errorMessage}>{errorMessage}</Text>
            <TextInput onChangeText={setEmail}
                value={email}
                style={styles.textInput} 
                label="Email" 
                mode="outlined"
                keyboardType="email-address"/>
            <TextInput onChangeText={setPassword}
                value={password}
                style={styles.textInput} 
                label="Password" 
                mode="outlined" 
                secureTextEntry={!passwordVisible} 
                right={
                    <TextInput.Icon icon= {passwordVisible ? "eye-off" : "eye" } onPress={() => setPasswordVisible(!passwordVisible)}/>
                }/>
            <Button onPress={handleLogin} 
                    style={styles.submitButton}
                    mode="outlined">
                Connexion
            </Button>
        </View>
    )
}

//@ts-ignore
const makeStyles = (colors) => StyleSheet.create({
    container : {
        width: "60%",
        height: "50%",
        alignItems: "center", 
        justifyContent: "center",
                
    },
    textInput: {
        width : "90%",
        margin: "2.5%"
    },
    submitButton: {
        marginTop: "5%",
    },
    errorMessage: {
        color: colors.error,
    }
})

