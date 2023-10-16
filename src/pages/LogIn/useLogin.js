import { useState } from 'react';

import UsuariosAPI from '../../apis/usuariosApi';
import { useNavigation } from '@react-navigation/native';
import { Alert } from 'react-native';


import CryptoES from 'crypto-es';

const useLogin = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [borderColor, setBorderColor] = useState('normal');
    const secretKey = "CEDAIN"

    const navigation = useNavigation();




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
        let encryptedPassword = CryptoES.AES.encrypt(password, secretKey).toString();

        // Llama al servicio de inicio de sesión
        UsuariosAPI().login(email, encryptedPassword)
            .then(function (data) {
                // La autenticación es exitosa
                console.log("Connected");
                console.log(data);
                setBorderColor('normal'); // Restablece el color del borde a normal después de un inicio de sesión exitoso

                UsuariosAPI().getToken(email)
                    .then(function (usuarioData) {
                      
                        // Almacena el token en el almacenamiento local
                        localStorage.setItem('token', usuarioData.token);
                        navigation.navigate('MenuLateral')
                        
                    })
                    .catch(function (error) {
                        console.error("Error al obtener los datos del usuario: ", error);
                    });

                ;
            })
            .catch(function (error) {
                // La autenticación falla
                console.error(error);
                if (error.message === 'Network Error') {
                    console.log("No se pudo conectar a la base de datos");
                } else if (error.response.status === 401) {
                    setBorderColor('red'); // Cambia el color del borde de los inputs a rojo
                    Alert.alert("Error", "El usuario o la contraseña son incorrectos"); // Muestra un mensaje de error
                }
            });


    }



    return { email, setEmail, password, setPassword, borderColor, handleRegister };
}

export default useLogin;
