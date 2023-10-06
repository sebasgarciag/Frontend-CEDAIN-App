import React from 'react';
import { TextInput } from 'react-native';
import { HStack, Stack, Text, Divider, VStack } from "@react-native-material/core";
import { MenuButton, FilterButton, ProfileButton, VolverButtonNDirect } from '../../components/UI/uiButtons';
import ListaProductos from '../../components/UI/listaProductos';
import useListadoProductos from './useListadoProductos';
import styles from '../../assets/styles';
import { router } from "expo-router";
import { useNavigation } from '@react-navigation/native';



const ListadoProductos = () => {
    const navigation = useNavigation();
    const {productos} = useListadoProductos();

    return (
        <>
          <Stack style={styles.container}>
            <HStack style={styles.headerContainer}>
              <MenuButton  onPress={() => { alert('Menú presionado'); }} />
              <VStack style={{alignItems: 'center'}}>
                  <Text style={styles.headerText}>Listado de productos</Text>
                  <Text style={{font: 16}}>Nombre Almacenista</Text>
              </VStack>
              <ProfileButton  onPress={() => { alert('Perfil presionado'); }} />
            </HStack>

                {/*Boton de aplicar Filtros a lista de entradas */}
            <Stack style={styles.searchFilterContainer}>
              <TextInput style={styles.searchInput} placeholder="Buscar..." placeholderTextColor="#8E8D8A" />
              <FilterButton style={styles.filterButton} onPress={() => { alert('Filtro presionado'); }} />
            </Stack>

                {/*Las entradas apareceran aqui */}
            <Divider/>
            <ListaProductos listadoProductos={productos} />
            <Divider/>
            
            <Stack style={{justifyContent: 'center', alignItems: 'center', margin: 10}}>
              {/* <VolverButton onPress={() => { router.replace("/botonesChernobyl"); }} /> */}
              <VolverButtonNDirect navigation={navigation} path="" />


              
            </Stack>

          </Stack>
        </>
    );
};


export default ListadoProductos;