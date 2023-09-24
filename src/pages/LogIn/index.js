import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
// import styles from './styles';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Aquí puedes agregar la lógica de autenticación, como una solicitud a un servidor
    // Comparar el username y la contraseña con datos válidos, etc.
    // Por ahora, simplemente mostraremos un mensaje con los datos ingresados.
    alert(`Inicio de sesión:\nUsuario: ${username}\nContraseña: ${password}`);
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Inicio de Sesión</Text>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Usuario:</Text>
        <TextInput
          style={styles.input}
          placeholder="Ingresa tu usuario"
          placeholderTextColor="#8E8D8A"
          value={username}
          onChangeText={(text) => setUsername(text)}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Contraseña:</Text>
        <TextInput
          style={styles.input}
          placeholder="Ingresa tu contraseña"
          placeholderTextColor="#8E8D8A"
          secureTextEntry
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
      </View>

      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>Iniciar Sesión</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginPage;