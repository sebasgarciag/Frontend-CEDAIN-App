import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Button } from 'react-native-material-ui';
import {Stack} from "expo-router";

const ListadoSalidasAlm = () => {
  return (
    <>
        <Stack.Screen options={{title: "Listado Salidas Almacenista"}}/>
        <View style={styles.container}>
            <Text>Lkistado Salidas Alamacenista</Text>
        </View>
    </>
  );
};

const styles = StyleSheet.create({});

export default ListadoSalidasAlm;