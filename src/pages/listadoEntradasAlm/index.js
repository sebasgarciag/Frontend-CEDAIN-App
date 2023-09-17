import React from 'react';
import { View, StyleSheet } from 'react-native';
import { HStack, Stack, Text, Spacer, Divider } from "@react-native-material/core";
import { BurgerButton, FiltrosButton, UserButton, VolverButton } from '../../components/UI/uiButtons';
import BarraBusqueda from '../../components/UI/searchbar';
import ListaEntradasAlm from '../../components/UI/listaEntradasAlm';
import useListadoEntradasAlm from './useListadoEntradasAlm';

const ListadoEntradasAlm = () => {

    const {entradas} = useListadoEntradasAlm();

    return (
        <>
        <Stack options={{ title: "Listado Entradas Almacenista" }} flex={1}>
            <HStack direction='row' justify='center' m={4}>
                <BurgerButton />
                <BarraBusqueda />
                <UserButton />
            </HStack>

            {/*Boton de aplicar Filtros a lista de entradas */}
            <Stack direction='row' justify='end' m={5} marginBottom={15}>
                <Text>Entradas Almacenista</Text>
                <FiltrosButton />
            </Stack>
        
            {/*Las entradas apareceran aqui */}
            <Divider/>
            <ListaEntradasAlm listadoEntradas={entradas}/>
            <Divider/>
            
            {/*Boton de volver atras */}
            <Stack direction='row' justify='center' margin = {10}>
                <VolverButton />
            </Stack>

           

        </Stack>
        </>
    );
};


export default ListadoEntradasAlm;
