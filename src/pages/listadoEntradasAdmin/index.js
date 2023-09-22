import React from 'react';
import { TextInput } from 'react-native';
import { MenuButton, ProfileButton, VolverButton, FilterButton } from '../../components/UI/uiButtons';
import { HStack, Text, Stack, Divider} from "@react-native-material/core";
import ListaEntradasAdmin from '../../components/UI/listaEntradasAdmin';
import useListadoEntradasAdmin from './useListadoEntradasAdmin';
import styles from '../../assets/styles';


const ListadoEntradasAdmin = () => {

  const {entradas} = useListadoEntradasAdmin();
  return (
    <>
      <Stack style={styles.container}>
        <HStack style={styles.headerContainer}>
          <MenuButton  onPress={() => { alert('Menú presionado'); }} />
          <Text style={styles.headerText}>Entradas</Text>
          <ProfileButton onPress={() => { alert('Perfil presionado'); }} />
        </HStack>

            {/*Boton de aplicar Filtros a lista de entradas */}
        <Stack style={styles.searchFilterContainer}>
          <TextInput style={styles.searchInput} placeholder="Buscar..." placeholderTextColor="#8E8D8A" />
          <FilterButton style={styles.filterButton} onPress={() => { alert('Filtro presionado'); }} />
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