import React from 'react';
import { ScrollView, Alert, StyleSheet } from "react-native";
import { Text, TextInput, Title } from "react-native-paper";
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from 'react-native-vector-icons/MaterialIcons';


import useLogin from './useLogin';

const LoginPage = () => {
  const { email, setEmail, password, setPassword, borderColor, handleRegister } = useLogin();


  return (
    <ScrollView style={styles.Container}>
      <Title style={styles.Title}>Iniciar sesión</Title>
      <TextInput
        label="Email"
        value={email}
        onChangeText={text => setEmail(text)}
        style={styles.Input}
      />
      <TextInput
        secureTextEntry={true}
        label="Password"
        value={password}
        onChangeText={text => setPassword(text)}
        style={styles.Input}
      />


      <TouchableOpacity onPress={handleRegister} style={styles.Button}>
        <Icon name="check-circle" size={24} color="#F1EFE3" style={{ marginRight: 10 }}></Icon>
        <Text style={{ fontSize: 18, color: '#F1EFE3', textAlign: 'center' }}>Iniciar Sesion</Text>
      </TouchableOpacity>
      

    </ScrollView>
  )
}

const styles = StyleSheet.create({
  Container: {
    display: 'flex',
    backgroundColor: '#F1EFE3',
    paddingTop: '30%',

  },
  Title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 20,
    paddingTop: 20,

  },
  Input: {
    backgroundColor: '#fff',
    borderRadius: 10,
    marginVertical: 10,
    maxWidth: '90%',
    marginLeft: '5%',
  },
  Button: {
    marginTop: 20,
    justifyContent: 'center',
    textAlign: 'center',
    backgroundColor: '#59CD90',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 30,
    flexDirection: 'row',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
    alignSelf: 'center',
  },
});

export default LoginPage;