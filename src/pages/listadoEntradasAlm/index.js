import React from 'react';
import { View, StyleSheet } from 'react-native';
import { VStack, HStack, Stack, Text, Spacer } from "@react-native-material/core";

import {BurgerButton, UserButton, VolverButton} from '../../components/UI/uiButtons';
import BarraBusqueda from '../../components/UI/searchbar';

const ListadoEntradasAlm = () => {

  return (
    <>
    <Stack options={{title: "Listado Entradas Almacenista"}} flex={1}>

      <Stack direction='row' justify='center' m={4}>
        <BurgerButton/>
        <BarraBusqueda/>
        <UserButton/>
      </Stack>


      <Stack direction='row' justify='center' flex={1}>
        <Text variant="body1">
          Aqui va la lista de entradas...
        </Text>
      </Stack>

      <Stack direction='row' justify='center' items='flex-end'>
          <VolverButton />
      </Stack>
      
      <Spacer/>
      
  </Stack>
  </>
  );
};


export default ListadoEntradasAlm;
