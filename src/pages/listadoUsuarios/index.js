import React from 'react';
import { HStack, Stack, Text, Divider, VStack } from "@react-native-material/core";
import { MenuButton, ProfileButton, VolverButtonN, VolverButtonNDirect } from '../../components/UI/uiButtons';
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
            {/* <ListaUsuarios listadoUsuarios={usuarios} /> */}
            {usuarios.length > 0 ? <ListaUsuarios listadoUsuarios={usuarios} /> : <Text alignSelf='center'> No hay usuarios registrados </Text>}
            <Divider/>
            
            <Stack style={{justifyContent: 'center', alignItems: 'center', margin: 10}}>
              <VolverButtonNDirect navigation={navigation} path="" />
            </Stack>

          </Stack>
        </>
    );
};


export default ListadoUsuarios;
