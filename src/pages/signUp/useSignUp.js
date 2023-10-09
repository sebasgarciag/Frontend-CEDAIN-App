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
        if (!email || !password) {
            Alert.alert("Error", "Por favor, ingresa el correo y la contraseña");
            return;
        }

        if (!validateEmail(email)) {
            Alert.alert("Error", "Por favor, ingresa un correo electrónico válido");
            return;
        }

        // Encripta la contraseña antes de enviarla
        const encryptedPassword = SHA256(password).toString();

        // Llama al servicio de inicio de sesión
        UsuariosAPI().register(nombre, apellido_paterno, apellido_materno, id_Tipo, id_almacen, correo, encryptedPassword)
            .then(function (data) {
                // El registro es exitoso
                console.log("Registrado");
                console.log(data);
                navigation.navigate('log');
            })
            .catch(function (error) {
                // El registro falla
                console.error(error);
                if (error.message === 'Network Error') {
                    console.log("No se pudo conectar a la base de datos");
                } else if (error.response.status === 401) {
                    Alert.alert("Error", "Registro fallido");
                }
            });
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
