import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button } from 'react-native-material-ui';
import { HStack, Text, Stack, Spacer } from "@react-native-material/core";
import { BurgerButton, UserButton, VolverButton, FiltrosButton } from '../../components/UI/uiButtons';
import BarraBusqueda from '../../components/UI/searchbar';


const ListadoSalidasAdmin = () => {
  return (
    <>
    <Stack options={{title: "Listado Salidas Administrador"}} flex={1}>
        <HStack direction='row' justify='center' m={4}>
            <BurgerButton/>
            <BarraBusqueda/>
            <UserButton />
        </HStack>

            {/*Boton de aplicar Filtros a lista de salidas */}
        <Stack direction='row' justify='end' m={5}>
            <FiltrosButton />
        </Stack>

            {/*Las salidas apareceran aqui */}
        <Stack direction='row' justify='center' flex={1}>
            <Text variant="body1">
                Aqui va la lista de salidas...
            </Text>
        </Stack>

        <Stack direction='row' justify='center'>
            <VolverButton />
        </Stack>

            {/*Tamanio de Spacer se reducira cuando se agregue la lista de salidas.*/}
            {/*Remover en caso contrario */}
        <Spacer/>
    </Stack>
    </>
  );
};

const styles = StyleSheet.create({});

export default ListadoSalidasAdmin;