import React, { useState } from "react";
import { ScrollView, Alert } from "react-native";
import { Button, Text, TextInput, Title } from "react-native-paper";
import styles from '../../assets/styles';
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from 'react-native-vector-icons/MaterialIcons';

const SignUpPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const validateEmail = (email) => {
        const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return regex.test(email);
    }

    const handleRegister = () => {
        
        if (!email || !password || !confirmPassword) {
            Alert.alert("Error", "Por favor llena todos los campos");
            return;
        }
        if (!validateEmail(email)) {
            Alert.alert("Error", "Por favor ingresa un correo electrónico válido");
            return;
        }
        console.log("Registrado");
    }

    return (
        <ScrollView>
            <Title>Sign Up</Title>
            <TextInput
                label="Email"
                value={email}
                onChangeText={text => setEmail(text)}
            />
            <TextInput
                secureTextEntry={true}
                label="Password"
                value={password}
                onChangeText={text => setPassword(text)}
            />
            <TextInput
                secureTextEntry={true}
                label="Confirm Password"
                value={confirmPassword}
                onChangeText={text => setConfirmPassword(text)}
            />

            <TouchableOpacity onPress = { handleRegister } style={{ justifyContent: 'center', textAlign: 'center', backgroundColor: '#59CD90', paddingVertical: 15, paddingHorizontal: 40, borderRadius: 30, flexDirection: 'row', shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.23, shadowRadius: 2.62, elevation: 4 }}>
                <Icon name="check-circle" size={24} color="#F1EFE3" style={{ marginRight: 10 }}></Icon>
                <Text style={{ fontSize: 18, color: '#F1EFE3', textAlign: 'center' }}>Registrar</Text>
            </TouchableOpacity>


        </ScrollView>
    )
}

export default SignUpPage;
