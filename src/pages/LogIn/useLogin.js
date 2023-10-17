import { useState } from 'react';

import UsuariosAPI from '../../apis/usuariosApi';
import { useNavigation } from '@react-navigation/native';
import { Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';



/**
 * Custom React hook for handling user login.
 * @returns {Object} An object containing the email, setEmail, password, setPassword, borderColor, and handleRegister functions.
 */
const useLogin = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [borderColor, setBorderColor] = useState('normal');
    const navigation = useNavigation();



    /**
       * Validates an email address.
       * @param {string} email - The email address to validate.
       * @returns {boolean} True if the email is valid, false otherwise.
       */
    const validateEmail = (email) => {
        const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return regex.test(email);
    }

    /**
     * Handles the Login process.
     */
    const handleRegister = () => {
        if (!email || !password) {
            Alert.alert("Error", "Por favor, ingresa el correo y la contraseña");
            return;
        }

        if (!validateEmail(email)) {
            Alert.alert("Error", "Por favor, ingresa un correo electrónico válido");
            return;
        }



        // Llama al servicio de inicio de sesión
        UsuariosAPI().login(email, password)
            .then(async function (data) {
                // Authentication is successful

                // Save the token to AsyncStorage
                try {
                    
                    await AsyncStorage.setItem('@user', JSON.stringify(data.user));
                    navigation.navigate('MenuLateral');
                    /*
                    try {
                        const value = await AsyncStorage.getItem('@user');
                        if(value !== null) {
                        // value previously stored
                        console.log(value);
                        }
                    } catch(e) {
                        // error reading value
                        console.log(e);
                    }
                    */
                } catch (e) {
                    // saving error
                    console.log(e);
                }


            })
            .catch(function (error) {
                // Authentication fails
                console.error(error);
                if (error.message === 'Network Error') {
                    console.log("Could not connect to the database");
                } else if (error.response.status === 401) {
                    setBorderColor('red'); // Changes the border color of the inputs to red
                    Alert.alert("Error", "The username or password is incorrect"); // Shows an error message
                }
            });


    }



    return { email, setEmail, password, setPassword, borderColor, handleRegister };
}

export default useLogin;
