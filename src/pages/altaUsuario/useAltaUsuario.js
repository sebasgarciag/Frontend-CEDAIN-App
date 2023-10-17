import { useState } from "react";
import UsuariosAPI from "../../apis/usuariosApi";
import { Alert } from "react-native";


/**
 * Custom React hook for handling user registration.
 * @returns {Object} An object containing the state and setters for nombre, apellidoPaterno, apellidoMaterno, email, password, tipo, and the handleRegister function.
 */
export const useAltaUsuario = () => {

  const [nombre, setNombre] = useState();
  const [apellidoPaterno, setApellidoPaterno] = useState();
  const [apellidoMaterno, setApellidoMaterno] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState("Password123");
  const [tipo, setTipo] = useState();



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
  * Handles the registration process.
  */
  const handleRegister = async () => {
    if (!email || !nombre || !apellidoPaterno || !apellidoMaterno || !tipo) {
      Alert.alert("Error", "Por favor, ingresa todos los datos");
      return;
    }

    if (!validateEmail(email)) {
      Alert.alert("Error", "Por favor, ingresa un correo electrónico válido");
      return;
    }


    try {
      console.log(nombre, apellidoPaterno, apellidoMaterno, tipo.value, email, password);
      let response = await UsuariosAPI().register(nombre, apellidoPaterno, apellidoMaterno, tipo.value, email, password);
      console.log("Registrado");
      console.log(nombre, apellidoPaterno, apellidoMaterno, tipo.value, email, password);
      Alert.alert("Éxito", "Registro exitoso");
    } catch (error) {
      console.error(error);
      if (error.message === 'Network Error') {
        console.log("No se pudo conectar a la base de datos");
      } else if (error.response.status === 401) {
        console.log("Registro Fallido");
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
    handleRegister
  }
}
