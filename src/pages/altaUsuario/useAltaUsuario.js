import { useState } from "react";
import UsuariosAPI from "../../apis/usuariosApi";


export const useAltaUsuario = () => {

  const [nombre, setNombre] = useState();
  const [apellidoPaterno, setApellidoPaterno] = useState();
  const [apellidoMaterno, setApellidoMaterno] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState("Password123");
  const [tipo, setTipo] = useState("");
  const [almacen, setAlmacen] = useState();


  const validateEmail = (email) => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
  }

  const handleRegister = () => {
    if (!email || !nombre || !apellidoPaterno || !apellidoMaterno || !tipo || !almacen) {
      Alert.alert("Error", "Por favor, ingresa todos los datos");
      return;
    }

    if (!validateEmail(email)) {
      Alert.alert("Error", "Por favor, ingresa un correo electrónico válido");
      return;
    }

    // Encripta la contraseña antes de enviarla
    setPassword(SHA256(password).toString());

    
    if(almacen === "Creel"){
      setAlmacen(3);
    } else if (almacen === "Chihuahua") {
      setAlmacen(1);
    }

   
    UsuariosAPI().register(nombre, apellidoPaterno, apellidoMaterno, tipo, almacen, correo, password)
      .then(function (data) {
        // El registro es exitoso
        console.log("Registrado");
        console.log(data);
        Alert.alert("Éxito", "Registro exitoso");
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
