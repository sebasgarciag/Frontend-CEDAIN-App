import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Button } from 'react-native-material-ui';
import {Stack} from "expo-router";
import { BurgerButton, UserButton } from '../../components/UI/uiButtons';
import BarraBusqueda from '../../components/UI/searchbar';

const ListadoEntradasAdmin = () => {
  return (
    <>
        <Stack.Screen options={{title: "Listado Entradas Administrador"}}/>
        <View>
            <BurgerButton/>
            <BarraBusqueda/>
            <UserButton />
        </View>
    </>
  );
};

const styles = StyleSheet.create({});

export default ListadoEntradasAdmin;