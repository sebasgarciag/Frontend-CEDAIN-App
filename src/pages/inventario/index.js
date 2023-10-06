import React, { useEffect, useState } from 'react';
import { View, Text, Image, TextInput, ScrollView } from 'react-native';
import { ProfileButton,  MenuButton, FilterButton, ArrowButton,ImportInventoryButton } from '../../components/inventario/buttons';
import styles from '../../assets/buttons/styles';
import { HStack, VStack } from "@react-native-material/core";
import { Surface } from "react-native-paper";
import useInventario from './useInventario';
import { useRoute } from '@react-navigation/native'; // Añadido
import { EntradaNueva, SalidaNueva } from '../../components/UI/uiButtons';
import { useNavigation } from '@react-navigation/native';




const Inventario2 = ( {almacen} ) => {
  console.log(almacen);

  
  
  const navigation = useNavigation()

  const { productos } = useInventario(almacen);

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Inventario</Text>
        <ProfileButton style={{ position: 'absolute', right: 10 }} onPress={() => { alert('Perfil presionado'); }} />
        <ImportInventoryButton style={styles.importInventoryButton} onPress={() => { alert('Importar Inventario presionado'); }} />
      </View>

      <View style={styles.searchFilterContainer}>
        <TextInput style={styles.searchInput} placeholder="Buscar..." placeholderTextColor="#8E8D8A" />
        <FilterButton style={styles.filterButton} onPress={() => { alert('Filtro presionado'); }} />
      </View>

      <ScrollView>
      {productos.map((producto) => 
          <Surface elevation={5} key={producto.id_producto} style={styles.productItem}> 
            <HStack spacing={10} style={{ flex: 1 }}>
              <VStack style={{justifyContent: 'center'}}>
                <Image 
                  source={require('../../assets/imagenes/ware.jpg')} // TODO: cambiar por imagen del producto
                  style={styles.productImage}
                />
              </VStack>
              <VStack spacing={3} style={[styles.textoProdMov, { flex: 1 }]}>
              <Text style={styles.productName}>{producto.producto.nombre}</Text>
                <HStack spacing={20}>
                  <VStack>
                     <Text style={styles.productQuantity}>Tamaño: {producto.medida}</Text>
                     <Text style={styles.productQuantity}>Cantidad: {producto.cantidad}</Text>
                  </VStack>
                </HStack>
              </VStack>
              <ArrowButton navigation={navigation} path={"EditarInventario"} nombre={producto.producto.nombre} cantidad = {producto.cantidad}/>
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
