import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Button,TextInput, useTheme } from "react-native-paper";
import { useDispatch } from 'react-redux'
import { setLoggedIn } from "../redux/actions/AuthActions";

export default function LoginForm() {
    
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useDispatch();

    const handleLogin = () => {
        const user = {
            isLoggedIn : true,
            userName : username
        };
        dispatch(setLoggedIn(user));
    }

    return (
        <View style={styles.container}>
            <TextInput onChangeText={setUsername}
                value={username}
                style={styles.textInput} 
                label="Username" 
                mode="outlined"/>
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

const styles = StyleSheet.create({
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
})

