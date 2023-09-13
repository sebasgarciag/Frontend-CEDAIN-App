import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from "@react-native-material/core";

import { VStack, HStack, Stack } from "@react-native-material/core";
import {BurgerButton, UserButton, VolverButton} from '../../components/UI/uiButtons';
import BarraBusqueda from '../../components/UI/searchbar';

const ListadoEntradasAlm = () => {

  return (
    <>
    <Stack options={{title: "Listado Entradas Almacenista"}}>

      <Stack direction='row'>
        <BurgerButton/>
        <BarraBusqueda/>
        <UserButton/>
      </Stack>


      <Stack>
        <Text variant="body1">
          Aqui va la lista de entradas...
        </Text>
      </Stack>

      <Stack>
          <VolverButton />
      </Stack>

  </Stack>
  </>
  );
};


export default ListadoEntradasAlm;
