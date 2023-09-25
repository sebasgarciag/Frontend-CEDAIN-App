import React from 'react';
import { TextInput } from 'react-native';
import { HStack, Text, Stack, Divider} from "@react-native-material/core";
import { MenuButton, ProfileButton, VolverButton, FilterButton } from '../../components/UI/uiButtons';
import ListaSalidasAdmin from '../../components/UI/listaSalidasAdmin';
import useListadoSalidasAdmin from './useListadoSalidasAdmin';
import styles from '../../assets/styles';



const ListadoSalidasAdmin = () => {

    const {salidas} = useListadoSalidasAdmin();

  return (
    <>
        <Stack style={styles.container}>
            <HStack style={styles.headerContainer}>
                <MenuButton  onPress={() => { alert('Menú presionado'); }} />
                <Text style={styles.headerText}>Salidas</Text>
                <ProfileButton  onPress={() => { alert('Perfil presionado'); }} />
            </HStack>

                {/*Boton de aplicar Filtros a lista de entradas */}
            <Stack direction='row' style={styles.searchFilterContainer}>
                <TextInput style={styles.searchInput} placeholder="Buscar..." placeholderTextColor="#8E8D8A" />
                <FilterButton style={styles.filterButton} onPress={() => { alert('Filtro presionado'); }} />
            </Stack>

                {/*Las entradas apareceran aqui */}
            <Divider/>
            <ListaSalidasAdmin listadoSalidas={salidas} />
            <Divider/>
            
            <Stack style={{justifyContent: 'center', alignItems: 'center', margin: 10}}>
                <VolverButton />
            </Stack>

        </Stack>
    </>
  );
};

export default ListadoSalidasAdmin;