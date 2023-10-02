import React from 'react';
import { HStack, Stack, Text, Divider, VStack } from "@react-native-material/core";
import { MenuButton, ProfileButton, VolverButtonN } from '../../components/UI/uiButtons';
import ListaUsuarios from '../../components/UI/listaUsuarios';
import useListadoUsuarios from './useListadoUsuarios';
import styles from '../../assets/styles';
import { useNavigation } from '@react-navigation/native';

const ListadoUsuarios = () => {
    const navigation = useNavigation();  
    const { usuarios } = useListadoUsuarios();

    return (
        <>
          <Stack style={styles.container}>
            <HStack style={styles.headerContainer}>
              <MenuButton  onPress={() => { alert('Menú presionado'); }} />
              <VStack style={{alignItems: 'center'}}>
                  <Text style={styles.headerText}>Usuarios</Text>
              </VStack>
              <ProfileButton  onPress={() => { alert('Perfil presionado'); }} />
            </HStack>
            <Divider/>
            <ListaUsuarios listadoUsuarios={usuarios} />
            <Divider/>
            
            <Stack style={{justifyContent: 'center', alignItems: 'center', margin: 10}}>
              <VolverButtonN navigation={navigation} path="botonesChernobyl" />
            </Stack>

          </Stack>
        </>
    );
};


export default ListadoUsuarios;
