import React from 'react';
import { TextInput, View } from 'react-native';
import { HStack, Text, Stack, Divider, VStack } from "@react-native-material/core";
import { MenuButton, ProfileButton, VolverButtonN, SiguienteButtonN, FilterButton } from '../../components/UI/uiButtons';
import ListaSalidasAlm from '../../components/UI/listaSalidasAlm';
import useListadoSalidasAlm from './useListadoSalidasAlm';
import styles from '../../assets/styles';
import buttonStyles from '../../assets/buttons/styles';
import { useNavigation } from '@react-navigation/native';
import useCurrentScreen from '../../components/UI/useCurrentScreen';

const ListadoSalidasAlm = () => {
    const navigation = useNavigation();
    const {salidas} = useListadoSalidasAlm();
    const { currentScreen, setScreen } = useCurrentScreen(); 

  return (
    <>
        <Stack style={styles.container}>
          <HStack style={styles.headerContainer}>
            <VStack>
                <Text style={styles.headerText}>Salidas</Text>
                <Text>Nombre Almacenista</Text>
            </VStack>
          </HStack>
  
              {/*Boton de aplicar Filtros a lista de entradas */}
          <Stack style={styles.searchFilterContainer}>
            <TextInput style={styles.searchInput} placeholder="Buscar..." placeholderTextColor="#8E8D8A" />
            <FilterButton style={styles.filterButton} onPress={() => { alert('Filtro presionado'); }} />
          </Stack>
  
              {/*Las entradas apareceran aqui */}
          <Divider/>
            <ListaSalidasAlm listadoSalidas={salidas} />
          <Divider/>
          
          {/* <Stack style={{justifyContent: 'center', alignItems: 'center', margin: 10}}>
            <VolverButton />
          </Stack> */}
  
          <View style={ buttonStyles.containerNavegacion }>
                <VolverButtonN navigation={navigation} path={"Home"} setScreen={setScreen} screen={""}/>
                <SiguienteButtonN navigation={navigation} path={"CrearSalida"} setScreen={setScreen} screen={"crearSalida"}/>
          </View>

        </Stack>
      </>
  );
};


export default ListadoSalidasAlm;