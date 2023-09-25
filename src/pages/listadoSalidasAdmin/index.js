import React, {useState} from 'react';
import { TextInput } from 'react-native';
import { HStack, Text, Stack, Divider} from "@react-native-material/core";
import { Modal } from 'react-native-paper';
import { MenuButton, ProfileButton, VolverButton, FilterButton } from '../../components/UI/uiButtons';
import ListaSalidasAdmin from '../../components/UI/listaSalidasAdmin';
import useListadoSalidasAdmin from './useListadoSalidasAdmin';
import styles from '../../assets/styles';
import Menulateral from '../../components/UI/MenuLateral';
import UserMenu from '../../components/UI/userMenu';
import FiltrosSalidasAdmin from '../../components/UI/filtrosSalidasAdmin';




const ListadoSalidasAdmin = () => {

    const { toggleDrawer, toggleUserDrawer, toggleModal, handlePress, filteredSalidas, setBusqueda, setAlmValue, setEveValue, isDrawerOpen, isUserDrawerOpen, isModalVisible, almValue, eveValue} = useListadoSalidasAdmin();


  return (
    <>
        <Stack style={styles.container}>
            <HStack style={styles.headerContainer}>
                <MenuButton  onPress={toggleDrawer} />
                <Text style={styles.headerText}>Salidas</Text>
                <ProfileButton  onPress={toggleUserDrawer} />
            </HStack>

            <Menulateral isDrawerOpen={isDrawerOpen}/>
            <UserMenu isDrawerOpen={isUserDrawerOpen}/>

                {/*Boton de aplicar Filtros a lista de entradas */}
            <Stack direction='row' style={styles.searchFilterContainer}>
                <TextInput style={styles.searchInput} placeholder="Buscar..." placeholderTextColor="#8E8D8A" onChangeText={(text) => setBusqueda(text)}/>
                <FilterButton style={styles.filterButton} onPress={toggleModal} />
            </Stack>

                {/*Las entradas apareceran aqui */}
            <Divider/>
            <ListaSalidasAdmin listadoSalidas={filteredSalidas} />
            <Divider/>
            
            <Stack style={{justifyContent: 'center', alignItems: 'center', margin: 10}}>
                <VolverButton ruta="/inventario"/>
            </Stack>

            <Modal visible={isModalVisible} onDismiss={toggleModal}>
                <FiltrosSalidasAdmin onPress={handlePress} setAlmValue={setAlmValue} setEveValue={setEveValue} almValue={almValue} eveValue={eveValue}/>
            </Modal>

        </Stack>
    </>
  );
};

export default ListadoSalidasAdmin;