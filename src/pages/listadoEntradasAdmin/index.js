import React, {useState} from 'react';
import { TextInput, View } from 'react-native';
import { Portal, Modal, Button } from 'react-native-paper';
import { MenuButton, ProfileButton, VolverButton, FilterButton } from '../../components/UI/uiButtons';
import { HStack, Text, Stack, Divider} from "@react-native-material/core";
import ListaEntradasAdmin from '../../components/UI/listaEntradasAdmin';
import useListadoEntradasAdmin from './useListadoEntradasAdmin';
import Menulateral from '../../components/UI/MenuLateral';
import UserMenu from '../../components/UI/userMenu';
import styles from '../../assets/styles';


const ListadoEntradasAdmin = () => {

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const toggleDrawer = () => {setIsDrawerOpen(!isDrawerOpen);};
  const [isUserDrawerOpen, setIsUserDrawerOpen] = useState(false);
  const toggleUserDrawer = () => {setIsUserDrawerOpen(!isUserDrawerOpen);};
  const [isModalVisible, setIsModalVisible] = useState(false);
  const toggleModal = () => {setIsModalVisible(!isModalVisible);};

  const {entradas} = useListadoEntradasAdmin();
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
          <TextInput style={styles.searchInput} placeholder="Buscar..." placeholderTextColor="#8E8D8A" />
          <FilterButton style={styles.filterButton} />
        </Stack>

        

            {/*Las entradas apareceran aqui */}
        <Divider/>
          <ListaEntradasAdmin listadoEntradas={entradas} />
        <Divider/>
        
        <Stack style={{justifyContent: 'center', alignItems: 'center', margin: 10}}>
          <VolverButton />
        </Stack>
        

      </Stack>
    </>
  );
};


export default ListadoEntradasAdmin;