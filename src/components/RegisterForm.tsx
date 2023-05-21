import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Button,TextInput, useTheme } from "react-native-paper";
import { useDispatch } from 'react-redux'
import { setSignIn } from "../redux/slices/AuthSlice";

export default function RegisterForm() {
    
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmedPassword, setConfirmedPassword] = useState("");

    const dispatch = useDispatch();

    const handleRegister = () => {
        const user = {
            isLoggedIn : true,
            userName : username
        };
        dispatch(setSignIn(user));
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
                    <TextInput.Icon icon="eye" onPress={() => setPasswordVisible(!passwordVisible)}/>
                }/>
            <TextInput onChangeText={setConfirmedPassword}
                value={confirmedPassword}
                style={styles.textInput} 
                label="Confirm Password" 
                mode="outlined" 
                secureTextEntry={!passwordVisible}/>
            <Button onPress={handleRegister} 
                    style={styles.submitButton}
                    mode="outlined">
                Register
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