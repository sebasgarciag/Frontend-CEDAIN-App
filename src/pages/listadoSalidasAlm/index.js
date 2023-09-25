import React, {useState} from 'react';
import { TextInput, View } from 'react-native';
import { HStack, Text, Stack, Divider, VStack } from "@react-native-material/core";
import { Modal } from 'react-native-paper';
import { MenuButton, ProfileButton, VolverButtonN, SiguienteButtonN, FilterButton } from '../../components/UI/uiButtons';
import ListaSalidasAlm from '../../components/UI/listaSalidasAlm';
import useListadoSalidasAlm from './useListadoSalidasAlm';
import styles from '../../assets/styles';
import Menulateral from '../../components/UI/MenuLateral';
import UserMenu from '../../components/UI/userMenu';
import FiltrosSalidasAlm from '../../components/UI/filtrosSalidasAlm';

import buttonStyles from '../../assets/buttons/styles';
import { useNavigation } from '@react-navigation/native';
import useCurrentScreen from '../../components/UI/useCurrentScreen';

const ListadoSalidasAlm = () => {
    const navigation = useNavigation();  
    const { toggleDrawer, toggleUserDrawer, toggleModal, handlePress, filteredSalidas, setBusqueda, setEveValue, isDrawerOpen, isUserDrawerOpen, isModalVisible, eveValue, salidas} = useListadoSalidasAlm();
    const { currentScreen, setScreen } = useCurrentScreen(); 

  return (
    <>
        <Stack style={styles.container}>
          <HStack style={styles.headerContainer}>
            <MenuButton onPress={toggleDrawer} />
            <VStack>
                <Text style={styles.headerText}>Salidas</Text>
                <Text>Nombre Almacenista</Text>
            </VStack>
            <ProfileButton onPress={toggleUserDrawer} />
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
            <ListaSalidasAlm listadoSalidas={filteredSalidas} />
          <Divider/>
          

          <View style={ buttonStyles.containerNavegacion }>
                <VolverButtonN navigation={navigation} path={"Home"} setScreen={setScreen} screen={""}/>
                <SiguienteButtonN navigation={navigation} path={"CrearSalida"} setScreen={setScreen} screen={"crearSalida"}/>
          </View>

          <Modal visible={isModalVisible} onDismiss={toggleModal}>
                <FiltrosSalidasAlm onPress={handlePress} setEveValue={setEveValue} eveValue={eveValue}/>
          </Modal>

        </Stack>
      </>
  );
};


export default ListadoSalidasAlm;