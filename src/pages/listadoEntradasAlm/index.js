import React from 'react';
import { TextInput } from 'react-native';
import { HStack, Stack, Text, Divider, VStack } from "@react-native-material/core";
import { MenuButton, FilterButton, ProfileButton, VolverButton } from '../../components/UI/uiButtons';
import ListaEntradasAlm from '../../components/UI/listaEntradasAlm';
import useListadoEntradasAlm from './useListadoEntradasAlm';
import styles from '../../assets/styles';


const ListadoEntradasAlm = () => {

    const {entradas} = useListadoEntradasAlm();

    return (
        <>
          <Stack style={styles.container}>
            <HStack style={styles.headerContainer}>
              <MenuButton  onPress={() => { alert('Menú presionado'); }} />
              <VStack style={{alignItems: 'center'}}>
                  <Text style={styles.headerText}>Entradas</Text>
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
            <ListaEntradasAlm listadoEntradas={entradas} />
            <Divider/>
            
            <Stack style={{justifyContent: 'center', alignItems: 'center', margin: 10}}>
              <VolverButton ruta="/inventario"/>
            </Stack>

          </Stack>
        </>
    );
};


export default ListadoEntradasAlm;
