import React, {useState} from 'react';
import { TextInput } from 'react-native';
import { HStack, Stack, Text, Divider, VStack } from "@react-native-material/core";
import { Modal } from 'react-native-paper';
import { MenuButton, FilterButton, ProfileButton, VolverButton } from '../../components/UI/uiButtons';
import ListaEntradasAlm from '../../components/UI/listaEntradasAlm';
import useListadoEntradasAlm from './useListadoEntradasAlm';
import Menulateral from '../../components/UI/MenuLateral';
import UserMenu from '../../components/UI/userMenu';
import styles from '../../assets/styles';
import FiltrosEntradasAlm from '../../components/UI/filtrosEntradasAlm';


const ListadoEntradasAlm = () => {
    
  const { toggleDrawer, toggleUserDrawer, toggleModal, handlePress, filteredEntradas, setBusqueda, setComValue, isDrawerOpen, isUserDrawerOpen, isModalVisible, comValue} = useListadoEntradasAlm();

    return (
        <>
          <Stack style={styles.container}>
            <HStack style={styles.headerContainer}>
              <MenuButton  onPress={toggleDrawer} />
              <VStack style={{alignItems: 'center'}}>
                  <Text style={styles.headerText}>Entradas</Text>
                  <Text style={{font: 16}}>Nombre Almacenista</Text>
              </VStack>
              <ProfileButton  onPress={toggleUserDrawer} />
            </HStack>

            <Menulateral isDrawerOpen={isDrawerOpen}/>
            <UserMenu isDrawerOpen={isUserDrawerOpen}/>

                {/*Boton de aplicar Filtros a lista de entradas */}
            <Stack style={styles.searchFilterContainer}>
              <TextInput style={styles.searchInput} placeholder="Buscar..." placeholderTextColor="#8E8D8A" onChangeText={(text) => setBusqueda(text)}/>
              <FilterButton style={styles.filterButton} onPress={toggleModal} />
            </Stack>

                {/*Las entradas apareceran aqui */}
            <Divider/>
            <ListaEntradasAlm listadoEntradas={filteredEntradas} />
            <Divider/>
            
            <Stack style={{justifyContent: 'center', alignItems: 'center', margin: 10}}>
              <VolverButton ruta="/inventario"/>
            </Stack>

            <Modal visible={isModalVisible} onDismiss={toggleModal}>
              <FiltrosEntradasAlm onPress={handlePress}  setComValue={setComValue} comValue={comValue}/>
            </Modal>

          </Stack>
        </>
    );
};


export default ListadoEntradasAlm;
