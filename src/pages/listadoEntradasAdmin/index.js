import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Button } from 'react-native-material-ui';
import {Stack} from "expo-router";

const ListadoEntradasAdmin = () => {
  return (
    <>
        <Stack.Screen options={{title: "Listado Entradas Administrador"}}/>
        <View style={styles.container}>
            <Text>Listado Entradas Administrador</Text>
        </View>
    </>
  );
};

const styles = StyleSheet.create({});

export default ListadoEntradasAdmin;