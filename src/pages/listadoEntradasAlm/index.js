import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Stack, Text, Spacer } from "@react-native-material/core";

import { BurgerButton, FiltrosButton, UserButton, VolverButton } from '../../components/UI/uiButtons';
import BarraBusqueda from '../../components/UI/searchbar';

const ListadoEntradasAlm = () => {
    return (
        <>
        <Stack options={{ title: "Listado Entradas Almacenista" }} flex={1}>
            <Stack direction='row' justify='center' m={4}>
                <BurgerButton />
                <BarraBusqueda />
                <UserButton />
            </Stack>

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

            {/*Boton de volver atras */}
            <Stack direction='row' justify='center'>
                <VolverButton />
            </Stack>

            {/*Tamanio de Spacer se reducira cuando se agregue la lista de entradas.*/}
            {/*Remover en caso contrario */}
            <Spacer /> 

        </Stack>
        </>
    );
};


export default ListadoEntradasAlm;
