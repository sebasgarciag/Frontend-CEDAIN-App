import React from 'react';
import { View, Text, Image, TextInput, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import { ProfileButton, MenuButton, FilterButton, ArrowButton, ImportInventoryButton, EntradaNuevaButton, SalidaNuevaButton } from '../../components/inventario/buttons';
import styles from '../../assets/buttons/styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { HStack, VStack } from "@react-native-material/core";
import { Surface } from "react-native-paper";
import useInventario from './useInventario';
import { router } from 'expo-router';  // Asegúrate de tener esta línea si vas a usar expo-router

const Inventario2 = () => {
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
        <MenuButton style={{ position: 'absolute', left: 10 }} onPress={() => { alert('Menú presionado'); }} />
        <Text style={styles.headerText}>Inventario</Text>
        <ProfileButton style={{ position: 'absolute', right: 10 }} onPress={() => { alert('Perfil presionado'); }} />
        <ImportInventoryButton style={styles.importInventoryButton} onPress={() => { alert('Importar Inventario presionado'); }} />
      </View>

      <View style={styles.searchFilterContainer}>
        <TextInput style={styles.searchInput} placeholder="Buscar..." placeholderTextColor="#8E8D8A" />
        <FilterButton style={styles.filterButton} onPress={() => { alert('Filtro presionado'); }} />
      </View>

      <ScrollView >
        {productos.map((producto) => 
          <Surface elevation={5} key={producto.producto} style={styles.productItem}> 
            <HStack spacing={10}>
              <VStack style={{justifyContent: 'center'}}>
                <Image 
                  source={require('../../assets/imagenes/ware.jpg')} 
                  style={styles.productImage}
                />
              </VStack>
              <VStack spacing={3} style={styles.textoProdMov}>
                <Text style={styles.productName}>{producto.producto}</Text>
                <HStack spacing={20}>
                  <VStack>
                    <Text style={styles.productQuantity}>Tamaño: {producto.tamano}</Text>
                    <Text style={styles.productQuantity}>Cantidad: {producto.cantidad}</Text>
                  </VStack>
                </HStack>
              </VStack>
            </HStack>
          </Surface>
        )}
      </ScrollView>

      <View style={styles.buttonsContainer}>
        <EntradaNuevaButton 
          style={styles.button}
          onPress={() => { 
            router.replace("/ruta"); // Ruta de Entrada nueva
          }}
        />
        <SalidaNuevaButton 
          style={styles.button}
          onPress={() => { 
            router.replace("/ruta"); // Ruta de salida nueva
          }}
        />
      </View>
    </View>
  );
};

export default Inventario2;
