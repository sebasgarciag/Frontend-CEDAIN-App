import React from 'react';
import { View, StyleSheet } from 'react-native';
import BarraBusqueda from '../../components/UI/searchbar';
import { HStack, Text, Stack, Divider, VStack } from "@react-native-material/core";
import { BurgerButton, UserButton, VolverButton, FiltrosButton } from '../../components/UI/uiButtons';
import ListaSalidasAlm from '../../components/UI/listaSalidasAlm';
import useListadoSalidasAlm from './useListadoSalidasAlm';
import ListadoEntradasAlm from '../listadoEntradasAlm';


const ListadoSalidasAlm = () => {

    const {salidas} = useListadoSalidasAlm();

  return (
    <>
    <Stack options={{title: "Listado Salidas Almacenista"}} flex={1}>
        <HStack direction='row' justify='center' m={4}>
            <BurgerButton/>
            <BarraBusqueda/>
            <UserButton />
        </HStack>

            {/*Boton de aplicar Filtros a lista de salidas */}
        <Stack direction='row' m={5} marginBottom={15} style={{justifyContent: 'space-between', paddingRight: 8, paddingLeft: 8}}>
                <VStack style={{alignItems: 'center', flex: 1}}>
                    <Text style={{fontWeight: 'bold', fontSize: 26}}>Salidas</Text>
                    <Text>Nombre almacenista</Text>
                </VStack>
            <FiltrosButton />
        </Stack>

            {/*Las salidas apareceran aqui */}
            <Divider/>
                <ListaSalidasAlm listadoSalidas={salidas}/>
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