import React, {useState} from 'react';
import { TextInput, View, KeyboardAvoidingView } from 'react-native';
import { Portal, Modal, Button, List, RadioButton } from 'react-native-paper';
import { MenuButton, ProfileButton, VolverButton, FilterButton } from '../../components/UI/uiButtons';
import { HStack, Text, Stack, Divider} from "@react-native-material/core";
import ListaEntradasAdmin from '../../components/UI/listaEntradasAdmin';
import useListadoEntradasAdmin from './useListadoEntradasAdmin';
import Menulateral from '../../components/UI/MenuLateral';
import UserMenu from '../../components/UI/userMenu';
import styles from '../../assets/styles';
import { router } from 'expo-router';
import FiltrosEntradasAdmin from '../../components/UI/filtrosEntradasAdmin';



const ListadoEntradasAdmin = () => {

  const { toggleDrawer, toggleUserDrawer, toggleModal, handlePress, filteredEntradas, setBusqueda, setAlmValue, setComValue, isDrawerOpen, isUserDrawerOpen, isModalVisible, almValue, comValue} = useListadoEntradasAdmin();

  return (
    <>
      <Stack style={styles.container}>
        <HStack style={styles.headerContainer}>
          <MenuButton  onPress={toggleDrawer} />
          <Text style={styles.headerText}>Entradas</Text>
          <ProfileButton onPress={ toggleUserDrawer } />
        </HStack>
        
        <Menulateral isDrawerOpen={isDrawerOpen}/>
        <UserMenu isDrawerOpen={isUserDrawerOpen}/>

            {/*Boton de aplicar Filtros a lista de entradas */}
        
        <Stack style={styles.searchFilterContainer}>
          <TextInput style={styles.searchInput} placeholder="Buscar..." placeholderTextColor="#8E8D8A" onChangeText={(text) => setBusqueda(text)}/>
          <FilterButton style={styles.filterButton} onPress={toggleModal}/>
        </Stack>

            {/*Las entradas apareceran aqui */}
        <Divider/>
          <ListaEntradasAdmin listadoEntradas={filteredEntradas} />
        <Divider/>
        
        <Stack style={{justifyContent: 'center', alignItems: 'center', margin: 10}}>
          <VolverButton ruta="/inventario"/>
        </Stack>

        <Modal visible={isModalVisible} onDismiss={toggleModal}>
            <FiltrosEntradasAdmin onPress={handlePress} setAlmValue={setAlmValue} setComValue={setComValue} almValue={almValue} comValue={comValue}/>
        </Modal>
        

      </Stack>
    </>
  );
};


export default ListadoEntradasAdmin;