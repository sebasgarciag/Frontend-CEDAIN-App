import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button } from 'react-native-material-ui';
import BarraBusqueda from '../../components/UI/searchbar';
import { HStack, Text, Stack, Spacer, Divider } from "@react-native-material/core";
import { BurgerButton, UserButton, VolverButton, FiltrosButton } from '../../components/UI/uiButtons';
import ListadoSalidas from '../../components/UI/listadoSalidas';


const ListadoSalidasAlm = () => {
  return (
    <>
    <Stack options={{title: "Listado Salidas Almacenista"}} flex={1}>
        <HStack direction='row' justify='center' m={4}>
            <BurgerButton/>
            <BarraBusqueda/>
            <UserButton />
        </HStack>

            {/*Boton de aplicar Filtros a lista de salidas */}
        <Stack direction='row' justify='end' m={5} marginBottom={15}>
            <Text>Salidas Almacenista</Text>
            <FiltrosButton />
        </Stack>

            {/*Las salidas apareceran aqui */}
        <Divider/>
        <ListadoSalidas/>
        <Divider/>

        <Stack direction='row' justify='center' margin={10}>
            <VolverButton />
        </Stack>

        
    </Stack>
    </>
  );
};

const styles = StyleSheet.create({});

export default ListadoSalidasAlm;