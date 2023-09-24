import React, {useState} from 'react';
import { TextInput } from 'react-native';
import { HStack, Text, Stack, Divider, VStack } from "@react-native-material/core";
import { MenuButton, ProfileButton, VolverButton, FilterButton } from '../../components/UI/uiButtons';
import ListaSalidasAlm from '../../components/UI/listaSalidasAlm';
import useListadoSalidasAlm from './useListadoSalidasAlm';
import styles from '../../assets/styles';
import Menulateral from '../../components/UI/MenuLateral';
import UserMenu from '../../components/UI/userMenu';


const ListadoSalidasAlm = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const toggleDrawer = () => {setIsDrawerOpen(!isDrawerOpen);};
  const [isUserDrawerOpen, setIsUserDrawerOpen] = useState(false);
  const toggleUserDrawer = () => {setIsUserDrawerOpen(!isUserDrawerOpen);};
  const [isModalVisible, setIsModalVisible] = useState(false);
  const toggleModal = () => {setIsModalVisible(!isModalVisible);};

    const {salidas} = useListadoSalidasAlm();

  return (
    <>
        <Stack style={styles.container}>
          <HStack style={styles.headerContainer}>
            <MenuButton onPress={toggleDrawer} />
            <VStack style={{alignItems: 'center'}}>
                <Text style={styles.headerText}>Salidas</Text>
                <Text style={{font: 16}}>Nombre Almacenista</Text>
            </VStack>
            <ProfileButton onPress={toggleUserDrawer} />
          </HStack>

          <Menulateral isDrawerOpen={isDrawerOpen}/>
          <UserMenu isDrawerOpen={isUserDrawerOpen}/>
  
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
            <VolverButton />
          </Stack>
  
        </Stack>
      </>
  );
};


export default ListadoSalidasAlm;