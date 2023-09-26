import React from 'react';
import { View, Text, Image, TextInput, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import { ProfileButton, MenuButton, FilterButton, ArrowButton, ImportInventoryButton } from '../../components/inventario/buttons';
import styles from '../../assets/buttons/styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { HStack, VStack } from "@react-native-material/core";
import { Surface } from "react-native-paper";
import useInventario from './useInventario';
import { router, useNavigation } from 'expo-router';
import { EntradaNueva, SalidaNueva } from '../../components/UI/uiButtons';


const Inventario2 = () => {
  const navigation = useNavigation();
  const products = Array.from({ length: 20 }, (_, index) => ({
    id: index + 1,
    name: `Producto ${index + 1}`,
    quantity: `Cantidad ${index + 1}`,
    imageUri: 'https://via.placeholder.com/50',
  }));

  const {productos} = useInventario();

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
          <Surface elevation={5} key={producto.producto} style={styles.productItem}> 
            <HStack spacing={10} style={{ flex: 1 }}>
              <VStack style={{justifyContent: 'center'}}>
                <Image 
                  source={require('../../assets/imagenes/ware.jpg')} // TODO: cambiar por imagen del producto
                  style={styles.productImage}
                />
              </VStack>
              <VStack spacing={3} style={[styles.textoProdMov, { flex: 1 }]}>
                <Text style={styles.productName}>{producto.producto}</Text>
                <HStack spacing={20}>
                  <VStack>
                    <Text style={styles.productQuantity}>Tamaño: {producto.tamano}</Text>
                    <Text style={styles.productQuantity}>Cantidad: {producto.cantidad}</Text>
                  </VStack>
                </HStack>
              </VStack>
              <ArrowButton onPress={() => { router.replace("/editarInventario"); }} />
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
