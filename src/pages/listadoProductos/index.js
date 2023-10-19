import React from 'react';
import { TextInput, TouchableOpacity } from 'react-native';
import { HStack, Stack, Text, Divider, VStack } from "@react-native-material/core";
import { MenuButton, FilterButton, ProfileButton, VolverButtonNDirect } from '../../components/UI/uiButtons';
import ListaProductos from '../../components/UI/listaProductos';
import useListadoProductos from './useListadoProductos';
import styles from '../../assets/styles';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const ListadoProductos = () => {
    const navigation = useNavigation();
    const {productos} = useListadoProductos();

    return (
        <>
          <Stack style={styles.container}>
            <HStack style={styles.headerContainer}>
              <MenuButton  onPress={() => { alert('Menú presionado'); }} />
              <VStack style={{alignItems: 'center'}}>
                  <Text style={styles.headerText}>Listado de productos</Text>
              </VStack>
              <ProfileButton  onPress={() => { alert('Perfil presionado'); }} />
            </HStack>

            <Stack style={styles.searchFilterContainer}>
              <TextInput style={styles.searchInput} placeholder="Buscar..." placeholderTextColor="#8E8D8A" />
              <FilterButton style={styles.filterButton} onPress={() => { alert('Filtro presionado'); }} />
            </Stack>

            <Divider/>
              <ListaProductos listadoProductos={productos} />
            <Divider/>
            
            <Stack style={{justifyContent: 'center', alignItems: 'center', margin: 10}}>
              <TouchableOpacity
              style={[styles.button, { backgroundColor: '#59CD90' }]}
              onPress={() => { navigation.navigate('altaProducto') }}
              >
                <Icon name="add-circle-outline" size={24} color="#F1EFE3" />
                <Text style={styles.buttonText}>Agregar Producto</Text>
              </TouchableOpacity>
              <VolverButtonNDirect navigation={navigation} path="" />

              
            </Stack>

          </Stack>
        </>
    );
};


export default ListadoProductos;