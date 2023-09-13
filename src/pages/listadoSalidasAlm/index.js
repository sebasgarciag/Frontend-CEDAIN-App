import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Button } from 'react-native-material-ui';
import {Stack} from "expo-router";
import { BurgerButton, UserButton } from '../../components/UI/uiButtons';

const ListadoSalidasAlm = () => {
  return (
    <>
        <Stack.Screen options={{title: "Listado Salidas Almacenista"}}/>
        <View style={styles.container}>
            <BurgerButton/>
            <UserButton/>
        </View>
    </>
  );
};

const styles = StyleSheet.create({});

export default ListadoSalidasAlm;