import { useState } from "react";
import UsuariosAPI from "../../apis/usuariosApi";
import CryptoES from 'crypto-es';
import { Alert } from "react-native";



export const useAltaUsuario = () => {

  const [nombre, setNombre] = useState();
  const [apellidoPaterno, setApellidoPaterno] = useState();
  const [apellidoMaterno, setApellidoMaterno] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState("Password123");
  const [tipo, setTipo] = useState();
  const [almacen, setAlmacen] = useState();
  const secretKey="CEDAIN"

  

  const validateEmail = (email) => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
  }

  const handleRegister = async () => {
    if (!email || !nombre || !apellidoPaterno || !apellidoMaterno || !tipo || !almacen) {
      Alert.alert("Error", "Por favor, ingresa todos los datos");
      return;
    }

    if (!validateEmail(email)) {
      Alert.alert("Error", "Por favor, ingresa un correo electrónico válido");
      return;
    }

    // Encripta la contraseña antes de enviarla
    let encryptedPassword = CryptoES.AES.encrypt(password, secretKey).toString();

    
    let almacenId;
    if (almacen.value === "Creel") {
      almacenId = 3;
    } else if (almacen.value === "Chihuahua") {
      almacenId = 1;
    }

    console.log(almacen)

    try {
      let response = await UsuariosAPI().register(nombre, apellidoPaterno, apellidoMaterno, tipo.value, almacenId, email, encryptedPassword);
      console.log("Registrado");
      console.log(nombre, apellidoPaterno, apellidoMaterno, tipo.value, almacenId, email, encryptedPassword);
      Alert.alert("Éxito", "Registro exitoso");
    } catch (error) {
      console.error(error);
      if (error.message === 'Network Error') {
        console.log("No se pudo conectar a la base de datos");
      } else if (error.response.status === 401) {
        Alert.alert("Error", "Registro fallido");
      }
    }
  }

  return {
    nombre,
    setNombre,
    apellidoPaterno,
    setApellidoPaterno,
    apellidoMaterno,
    setApellidoMaterno,
    email,
    setEmail,
    password,
    setPassword,
    tipo,
    setTipo,
    almacen,
    setAlmacen,
    handleRegister
  }
}
