import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Button } from 'react-native-material-ui';
//import {Stack} from "expo-router";
import { BurgerButton, UserButton } from '../../components/UI/uiButtons';
import BarraBusqueda from '../../components/UI/searchbar';
import { VStack, HStack, Stack } from "@react-native-material/core";

const ListadoEntradasAdmin = () => {
  return (
    <>
        <Stack options={{title: "Listado Entradas Administrador"}}/>
        <Stack direction='row'>
            <BurgerButton/>
            <BarraBusqueda/>
            <UserButton />

        </Stack>
    </>
  );
};

const styles = StyleSheet.create({});

export default ListadoEntradasAdmin;