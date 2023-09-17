import React from 'react';
import { View, StyleSheet } from 'react-native';
import { HStack, Text, Stack, Divider, VStack } from "@react-native-material/core";
import { BurgerButton, UserButton, VolverButton, FiltrosButton } from '../../components/UI/uiButtons';
import BarraBusqueda from '../../components/UI/searchbar';
import ListaSalidasAdmin from '../../components/UI/listaSalidasAdmin';
import useListadoSalidasAdmin from './useListadoSalidasAdmin';


const ListadoSalidasAdmin = () => {

    const {salidas} = useListadoSalidasAdmin();

  return (
    <>
    <Stack options={{title: "Listado Salidas Administrador"}} flex={1}>
        <HStack direction='row' justify='center' m={4}>
            <BurgerButton/>
            <BarraBusqueda/>
            <UserButton />
        </HStack>

            {/*Boton de aplicar Filtros a lista de salidas */}
        <Stack direction='row' m={5} marginBottom={15} style={{justifyContent: 'space-between', paddingRight: 8, paddingLeft: 8}}>
            <VStack style={{alignItems: 'center', flex: 1}}>
                <Text style={{fontWeight: 'bold', fontSize: 30}}>Salidas</Text>
            </VStack>
            <FiltrosButton />
        </Stack>

            {/*Las salidas apareceran aqui */}
        <Divider/>
        <ListaSalidasAdmin listadoSalidas={salidas}/>
        <Divider/>

        <Stack direction='row' justify='center' margin={10}>
            <VolverButton />
        </Stack>

            
    </Stack>
    </>
  );
};

const styles = StyleSheet.create({});

export default ListadoSalidasAdmin;