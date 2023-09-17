import React from 'react';
import { View, StyleSheet } from 'react-native';
import { BurgerButton, UserButton, VolverButton, FiltrosButton } from '../../components/UI/uiButtons';
import BarraBusqueda from '../../components/UI/searchbar';
import { HStack, Text, Stack, Divider, VStack } from "@react-native-material/core";
import ListaEntradasAdmin from '../../components/UI/listaEntradasAdmin';
import useListadoEntradasAdmin from './useListadoEntradasAdmin';

const ListadoEntradasAdmin = () => {

  const {entradas} = useListadoEntradasAdmin();
  return (
    <>
      <Stack options={{title: "Listado Entradas Administrador"}} flex={1}>
        <HStack direction='row' justify='center' m={4}>
            <BurgerButton/>
            <BarraBusqueda/>
            <UserButton />
        </HStack>

            {/*Boton de aplicar Filtros a lista de entradas */}
        <Stack direction='row' m={5} marginBottom={15} style={{justifyContent: 'space-between', paddingRight: 8, paddingLeft: 8}}>
            <VStack style={{alignItems: 'center', flex: 1}}>
                <Text style={{fontWeight: 'bold', fontSize: 30}}>Entradas</Text>
            </VStack>
            <FiltrosButton />
        </Stack>

            {/*Las entradas apareceran aqui */}
        <Divider/>
        <ListaEntradasAdmin listadoEntradas={entradas} />
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