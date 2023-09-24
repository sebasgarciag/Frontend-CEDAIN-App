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



const ListadoEntradasAdmin = () => {

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const toggleDrawer = () => {setIsDrawerOpen(!isDrawerOpen);};
  const [isUserDrawerOpen, setIsUserDrawerOpen] = useState(false);
  const toggleUserDrawer = () => {setIsUserDrawerOpen(!isUserDrawerOpen);};
  const [isModalVisible, setIsModalVisible] = useState(false);
  const toggleModal = () => {setIsModalVisible(!isModalVisible);};
  const [expanded, setExpanded] = React.useState(true);
  const handlePress = () => setExpanded(!expanded);

  const [busqueda, setBusqueda]=useState('');
  const [value, setValue] = useState('');

  const {entradas} = useListadoEntradasAdmin();

  const filteredEntradas = entradas.filter((entrada) =>{
    const almacenistaMatch = entrada.almacenista.toLowerCase().includes(busqueda.toLowerCase());
    const folioSerieMatch = entrada.folioSerie.toLowerCase().includes(busqueda.toLowerCase());
    


    return almacenistaMatch || folioSerieMatch;

  });
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
          <Stack style={styles.modalContainer}>
            <Text style={styles.headerText}>Filter Options</Text>
            <List.Section  style={{width: '80%'}}>
              <List.Accordion
                title="Almacenista">
                <RadioButton.Group onValueChange={newValue => setValue(newValue)} value={value}>
                  <HStack>
                    <Text>tomas</Text>
                    <RadioButton value='tomas'/>
                  </HStack>
                  <HStack>
                    <Text>alexis</Text>
                    <RadioButton value='alexis'/>
                  </HStack>
                </RadioButton.Group>
              </List.Accordion>

              <List.Accordion
                title="Comunidad de origen"
                onPress={handlePress}>
                  <HStack>
                    <Text>Chihuahua</Text>
                    <RadioButton value='Chihuahua'/>
                  </HStack>
                  <HStack>
                    <Text>Creel</Text>
                    <RadioButton value='Creel'/>
                  </HStack>
                
              </List.Accordion>
            </List.Section>
          </Stack>
        </Modal>
        

      </Stack>
    </>
  );
};


export default ListadoEntradasAdmin;