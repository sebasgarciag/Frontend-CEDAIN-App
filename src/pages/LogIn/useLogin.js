import { useState } from 'react';

import UsuariosAPI from '../../apis/usuariosApi';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';

const useLogin = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [borderColor, setBorderColor] = useState('normal');
    const secretKey = "CEDAIN"

    const navigation = useNavigation();

    

    // Guarda el token
    const storeToken = async (token) => {
        try {
            await AsyncStorage.setItem('userToken', token);
        } catch (e) {
            // Guardar el token falló
        }
    }

    // Obtiene el token
    const getToken = async () => {
        try {
            const value = await AsyncStorage.getItem('userToken')
            if (value !== null) {
                return value;
            }
        } catch (e) {
            // error al leer el valor
        }
    }

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
        const encryptedPassword = 1;

        // Llama al servicio de inicio de sesión
        UsuariosAPI().login(email, encryptedPassword)
            .then(function (data) {
                // La autenticación es exitosa
                console.log("Connected");
                console.log(data);
                localStorage.setItem('token', data.token);
                setBorderColor('normal'); // Restablece el color del borde a normal después de un inicio de sesión exitoso
                navigation.navigate('Inventario');
            })
            .catch(function (error) {
                // La autenticación falla
                console.error(error);
                if (error.message === 'Network Error') {
                    console.log("No se pudo conectar a la base de datos");
                } else if (error.response.status === 401) {
                    setBorderColor('red'); // Cambia el color del borde de los inputs a rojo
                }
            });
        
        
    }

  

    return { email, setEmail, password, setPassword, borderColor, handleRegister };
}

export default useLogin;
