import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Button } from 'react-native-material-ui';
import {Stack} from "expo-router";

const SalidaAlm = () => {
  return (
    <>
        <Stack.Screen options={{title: "Salida Almacenista"}}/>
        <View style={styles.container}>
            <Text>Salida almacenista</Text>
        </View>
    </>
  );
};

const styles = StyleSheet.create({});

export default SalidaAlm;