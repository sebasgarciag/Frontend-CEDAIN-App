import React, {useState} from 'react';
import { TextInput } from 'react-native';
import { HStack, Stack, Text, Divider, VStack } from "@react-native-material/core";
import { MenuButton, FilterButton, ProfileButton, VolverButton } from '../../components/UI/uiButtons';
import ListaEntradasAlm from '../../components/UI/listaEntradasAlm';
import useListadoEntradasAlm from './useListadoEntradasAlm';
import Menulateral from '../../components/UI/MenuLateral';
import UserMenu from '../../components/UI/userMenu';
import styles from '../../assets/styles';


const ListadoEntradasAlm = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const toggleDrawer = () => {setIsDrawerOpen(!isDrawerOpen);};
    const [isUserDrawerOpen, setIsUserDrawerOpen] = useState(false);
    const toggleUserDrawer = () => {setIsUserDrawerOpen(!isUserDrawerOpen);};
    const [isModalVisible, setIsModalVisible] = useState(false);
    const toggleModal = () => {setIsModalVisible(!isModalVisible);};

    const {entradas} = useListadoEntradasAlm();

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
              <TextInput style={styles.searchInput} placeholder="Buscar..." placeholderTextColor="#8E8D8A" />
              <FilterButton style={styles.filterButton} onPress={() => { alert('Filtro presionado'); }} />
            </Stack>

                {/*Las entradas apareceran aqui */}
            <Divider/>
            <ListaEntradasAlm listadoEntradas={entradas} />
            <Divider/>
            
            <Stack style={{justifyContent: 'center', alignItems: 'center', margin: 10}}>
              <VolverButton />
            </Stack>

          </Stack>
        </>
    );
};


export default ListadoEntradasAlm;
