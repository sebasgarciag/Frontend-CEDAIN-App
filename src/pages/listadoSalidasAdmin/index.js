import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Button } from 'react-native-material-ui';
import {Stack} from "expo-router";


const ListadoSalidasAdmin = () => {
  return (
    <>
        <Stack.Screen options={{title: "Listado Salidas Administrador"}}/>
        <View style={styles.container}>
            <Text>Listado Salidas Administrador</Text>
        </View>
    </>
  );
};

const styles = StyleSheet.create({});

export default ListadoSalidasAdmin;