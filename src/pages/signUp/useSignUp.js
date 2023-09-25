import React, { useState } from "react";
import { Alert} from "react-native";



export const useSignUp= () => {
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

    return {
        email,
        setEmail,
        password,
        setPassword,
        confirmPassword,
        setConfirmPassword,
        handleRegister
    }
}
