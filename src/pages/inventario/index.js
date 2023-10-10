import React, { useEffect, useState } from 'react';
import { View, Text, Image, TextInput, ScrollView } from 'react-native';
import { ProfileButton,  MenuButton, FilterButton, ArrowButton,ImportInventoryButton } from '../../components/inventario/buttons';
import styles from '../../assets/buttons/styles';
import { HStack, VStack } from "@react-native-material/core";
import { Surface } from "react-native-paper";
import useInventario from './useInventario';
import { useRoute } from '@react-navigation/native'; 
import { ArrowButtonConObject, EntradaNueva, SalidaNueva } from '../../components/UI/uiButtons';
import { useNavigation } from '@react-navigation/native';
import ShareInvButton from '../../components/UI/ShareInvButton';



const Inventario2 = ( {almacen} ) => {
  
  const navigation = useNavigation()

  const { listaInventario} = useInventario(almacen);

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Inventario</Text>
        <ProfileButton style={{ position: 'absolute', right: 10 }} onPress={() => { alert('Perfil presionado'); }} />
        <ShareInvButton style={styles.importInventoryButton} invId={1} />
      </View>

      <View style={styles.searchFilterContainer}>
        <TextInput style={styles.searchInput} placeholder="Buscar..." placeholderTextColor="#8E8D8A" />
        <FilterButton style={styles.filterButton} onPress={() => { alert('Filtro presionado'); }} />
      </View>

      <ScrollView>
      {listaInventario.map((inventario) => 
          <Surface elevation={5} key={inventario.id_producto} style={styles.productItem}> 
            <HStack spacing={10} style={{ flex: 1 }}>
              <VStack style={{justifyContent: 'center'}}>
                <Image 
                  source={require('../../assets/imagenes/ware.jpg')} // TODO: cambiar por imagen del producto
                  style={styles.productImage}
                />
              </VStack>
              <VStack spacing={3} style={[styles.textoProdMov, { flex: 1 }]}>
              <Text style={styles.productName}>{inventario.producto.nombre}</Text>
                <HStack spacing={20}>
                  <VStack>
                     <Text style={styles.productQuantity}>Tamaño: {inventario.producto.Tamanio.descripcion}</Text>
                     <Text style={styles.productQuantity}>Cantidad: {inventario.cantidad}</Text>
                  </VStack>
                </HStack>
              </VStack>
              <ArrowButtonConObject navigation={navigation} path={"EditarInventario"} object={inventario}/>
            </HStack>
          </Surface>
        )}
      </ScrollView>

      <View style={styles.buttonsContainer}>
        <EntradaNueva navigation={navigation}/>
        <SalidaNueva navigation={navigation}/>
      </View>
    </View>
  );
};

export default Inventario2;