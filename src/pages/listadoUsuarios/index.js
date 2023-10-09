import React from 'react';
import { HStack, Stack, Text, Divider, VStack } from "@react-native-material/core";
import { MenuButton, ProfileButton, VolverButtonN, VolverButtonNDirect } from '../../components/UI/uiButtons';
import ListaUsuarios from '../../components/UI/listaUsuarios';
import useListadoUsuarios from './useListadoUsuarios';
import styles from '../../assets/styles';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';



const ListadoUsuarios = () => {
    const navigation = useNavigation();  
    const { usuarios } = useListadoUsuarios();

    return (
        <>
          <Stack style={styles.container}>
            <View style={styles.headerContainer} >
              <Text style={[styles.headerText, {marginLeft: "50%"}]}>Usuarios</Text>
              <ProfileButton style={{ position: 'absolute', right: 10,  }} onPress={() => { alert('Perfil presionado'); }} />
              {/* <ImportInventoryButton style={styles.importInventoryButton} onPress={() => { alert('Importar Inventario presionado'); }} /> */}
            </View>
            {/* <HStack style={styles.headerContainer}>
              <MenuButton  onPress={() => { alert('Menú presionado'); }} />
              <VStack style={{alignItems: 'center'}}>
                  <Text style={styles.headerText}>Usuarios</Text>
              </VStack>
              <ProfileButton  onPress={() => { alert('Perfil presionado'); }} />
            </HStack> */}
            <Divider/>
            {/* <ListaUsuarios listadoUsuarios={usuarios} /> */}
            {usuarios.length > 0 ? <ListaUsuarios listadoUsuarios={usuarios} /> : <Text alignSelf='center'> No hay usuarios registrados </Text>}
            <Divider/>
            
            <Stack style={{justifyContent: 'center', alignItems: 'center', margin: 10}}>
            <VolverButtonNDirect navigation={navigation} path="" />
            <TouchableOpacity
              style={[styles.button, { backgroundColor: '#59CD90' }]}
              onPress={() => { navigation.navigate('AltaUsuario') }}
            >
              <Icon name="add-circle-outline" size={24} color="#F1EFE3" />
              <Text style={styles.buttonText}>Agregar Usuario</Text>
            </TouchableOpacity>
            </Stack>

          </Stack>
        </>
    );
};


export default ListadoUsuarios;
