import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Button } from 'react-native-material-ui';
import {Stack} from "expo-router";

const EntradaAdmin = () => {
  return (
    <>
        <Stack.Screen options={{title: "Entrada Administrador"}}/>
        <View style={styles.container}>
            <Text>Entrada administrador</Text>
        </View>
    </>
   
  );
};

const styles = StyleSheet.create({});

export default EntradaAdmin;
