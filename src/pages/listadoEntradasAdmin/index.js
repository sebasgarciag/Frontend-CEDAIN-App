import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Button } from 'react-native-material-ui';
//import {Stack} from "expo-router";
import { BurgerButton, UserButton, VolverButton } from '../../components/UI/uiButtons';
import BarraBusqueda from '../../components/UI/searchbar';
import { VStack, HStack, Stack, Spacer } from "@react-native-material/core";

const ListadoEntradasAdmin = () => {
  return (
    <>
      <Stack options={{title: "Listado Entradas Administrador"}}/>
        <Stack direction='row' justify='center' m={4} flex={1}>
            <BurgerButton/>
            <BarraBusqueda/>
            <UserButton />
        </Stack>

        <Stack direction='row' justify='center' items='flex-end'>
          <VolverButton />
        </Stack>
      
      <Spacer/>

    </>
  );
};

const styles = StyleSheet.create({});

export default ListadoEntradasAdmin;