import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Button } from 'react-native-material-ui';
import {Stack} from "expo-router";
import { BurgerButton, UserButton } from '../../components/UI/uiButtons';

const ListadoEntradasAdmin = () => {
  return (
    <>
        <Stack.Screen options={{title: "Listado Entradas Administrador"}}/>
        <View>
            <BurgerButton/>
            <UserButton />
        </View>
    </>
  );
};

const styles = StyleSheet.create({});

export default ListadoEntradasAdmin;