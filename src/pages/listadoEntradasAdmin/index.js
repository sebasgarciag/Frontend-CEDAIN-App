import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button } from 'react-native-material-ui';
import { BurgerButton, UserButton, VolverButton, FiltrosButton } from '../../components/UI/uiButtons';
import BarraBusqueda from '../../components/UI/searchbar';
import { HStack, Text, Stack, Spacer, Divider } from "@react-native-material/core";
import ListadoEntradas from '../../components/UI/listadoEntradas';

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
        <Stack direction='row' justify='end' m={5} marginBottom={15}>
            <Text>Entradas Administrador</Text>
            <FiltrosButton />
        </Stack>

            {/*Las entradas apareceran aqui */}
        <Divider/>
        <ListadoEntradas/>
        <Divider/>


        <Stack direction='row' justify='center' margin={10}>
          <VolverButton />
        </Stack>

           
      
      </Stack>
    </>
  );
};

const styles = StyleSheet.create({});

export default ListadoEntradasAdmin;