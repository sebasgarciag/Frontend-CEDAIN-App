import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Button } from 'react-native-material-ui';
import {Stack} from "expo-router";

const SalidaAdmin = () => {
  return (
    <>
        <Stack.Screen options={{title: "Salida Administrador"}}/>
        <View style={styles.container}>
            <Text>Salida administrador</Text>
        </View>
    </>
  );
};

const styles = StyleSheet.create({});

export default SalidaAdmin;