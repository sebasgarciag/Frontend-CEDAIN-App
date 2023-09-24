import React from 'react';
import { View, Text, Image, TextInput, FlatList, TouchableOpacity,ScrollView } from 'react-native';
import { ProfileButton, MenuButton, FilterButton, ArrowButton, ImportInventoryButton } from '../../components/inventario/buttons';
import styles from '../../assets/buttons/styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { HStack, VStack } from "@react-native-material/core";
import { Surface } from "react-native-paper";
import useInventario from './useInventario';




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
                                source={require('../../assets/imagenes/ware.jpg')} // TODO: cambiar por imagen del producto
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
        <TouchableOpacity style={[styles.button, { backgroundColor: '#59CD90' }]}>
          <Icon name="add-circle-outline" size={24} color="#F1EFE3" />
          <Text>Entrada Nueva</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, { backgroundColor: '#E87461' }]}>
          <Icon name="remove-circle-outline" size={24} color="#F1EFE3" />
          <Text style={styles.buttonText}>Salida Nueva</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};



export default Inventario2;
