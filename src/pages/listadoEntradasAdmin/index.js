import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button } from 'react-native-material-ui';
import { BurgerButton, UserButton, VolverButton, FiltrosButton } from '../../components/UI/uiButtons';
import BarraBusqueda from '../../components/UI/searchbar';
import { HStack, Text, Stack, Spacer } from "@react-native-material/core";

const ListadoEntradasAdmin = () => {
  return (
    <>
      <Stack options={{title: "Listado Entradas Administrador"}} flex={1}>
        <HStack direction='row' justify='center' m={4}>
            <BurgerButton/>
            <BarraBusqueda/>
            <UserButton />
        </HStack>

            {/*Boton de aplicar Filtros a lista de entradas */}
        <Stack direction='row' justify='end' m={5}>
            <FiltrosButton />
        </Stack>

            {/*Las entradas apareceran aqui */}
        <Stack direction='row' justify='center' flex={1}>
            <Text variant="body1">
                Aqui va la lista de entradas...
            </Text>
        </Stack>

        <Stack direction='row' justify='center'>
          <VolverButton />
        </Stack>

            {/*Tamanio de Spacer se reducira cuando se agregue la lista de entradas.*/}
            {/*Remover en caso contrario */}
      <Spacer/>
    </Stack>
    </>
  );
};

const styles = StyleSheet.create({});

export default ListadoEntradasAdmin;