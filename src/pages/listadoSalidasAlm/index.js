import React from 'react';
import { TextInput } from 'react-native';
import { HStack, Text, Stack, Divider, VStack } from "@react-native-material/core";
import { MenuButton, ProfileButton, VolverButton, FilterButton } from '../../components/UI/uiButtons';
import ListaSalidasAlm from '../../components/UI/listaSalidasAlm';
import useListadoSalidasAlm from './useListadoSalidasAlm';
import styles from '../../assets/styles';
import { router } from "expo-router";


const ListadoSalidasAlm = () => {

    const {salidas} = useListadoSalidasAlm();

  return (
    <>
        <Stack style={styles.container}>
          <HStack style={styles.headerContainer}>
            <MenuButton onPress={() => { alert('Menú presionado'); }} />
            <VStack style={{alignItems: 'center'}}>
                <Text style={styles.headerText}>Salidas</Text>
                <Text style={{font: 16}}>Nombre Almacenista</Text>
            </VStack>
            <ProfileButton onPress={() => { alert('Perfil presionado'); }} />
          </HStack>
  
              {/*Boton de aplicar Filtros a lista de entradas */}
          <Stack style={styles.searchFilterContainer}>
            <TextInput style={styles.searchInput} placeholder="Buscar..." placeholderTextColor="#8E8D8A" />
            <FilterButton style={styles.filterButton} onPress={() => { alert('Filtro presionado'); }} />
          </Stack>
  
              {/*Las entradas apareceran aqui */}
          <Divider/>
            <ListaSalidasAlm listadoSalidas={salidas} />
          <Divider/>
          
          <Stack style={{justifyContent: 'center', alignItems: 'center', margin: 10}}>
            <VolverButton onPress={() => { router.replace("/inventario"); }} />
          </Stack>
  
        </Stack>
      </>
  );
};


export default ListadoSalidasAlm;