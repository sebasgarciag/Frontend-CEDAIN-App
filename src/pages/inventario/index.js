import React, { useEffect, useState } from 'react';
import { FlatList,View, Text, Image, TextInput, ScrollView } from 'react-native';
import { ProfileButton, MenuButton, FilterButton, ArrowButton, ImportInventoryButton } from '../../components/inventario/buttons';
import styles from '../../assets/buttons/styles';
import { HStack, VStack } from "@react-native-material/core";
import { Surface } from "react-native-paper";
import useInventario from './useInventario';
import { useRoute } from '@react-navigation/native';
import { ArrowButtonConObject, EntradaNueva, SalidaNueva } from '../../components/UI/uiButtons';
import { useNavigation, useIsFocused } from '@react-navigation/native';
import useBusqueda from './useBusqueda';
import ShareInvButton from '../../components/UI/ShareInvButton';
import ipApi from "../../apis/ipApi";

const { ip, protocol, port } = ipApi;
const baseUrl = `${protocol}${ip}:${port}`;

const Inventario2 = ({ almacen }) => {

  /**
   * Navegación y estado del inventario y búsqueda.
   */
  const navigation = useNavigation()
  const { listaInventario, getInventario } = useInventario(almacen);
  const { busqueda, setBusqueda } = useBusqueda();

  const isFocused = useIsFocused();
	useEffect(() => {
		if(isFocused) {
			getInventario(almacen);
		}
	}, [isFocused]);

  /**
   * Renderiza el componente.
   */
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Inventario</Text>
        <ProfileButton style={{ position: 'absolute', right: 10 }} onPress={() => { alert('Perfil presionado'); }} />
        <ShareInvButton style={styles.importInventoryButton} invId={almacen} />
      </View>

      <View style={styles.searchFilterContainer}>
        <TextInput style={styles.searchInput}
          value={busqueda}
          onChangeText = {(text) => setBusqueda(text)}
          placeholder="Buscar..."
          placeholderTextColor="#8E8D8A" 
          />
      </View>
      
    
      <ScrollView>
        {listaInventario.map((inventario) => {
          if(busqueda === ""){
            return(
          
          <Surface elevation={5} key={inventario.id_producto} style={styles.productItem}>
            <HStack spacing={10} style={{ flex: 1 }}>
              <VStack style={{ justifyContent: 'center' }}>
                <Image
                  source={ inventario.producto.imagen ? { uri: `${baseUrl}/productos/${inventario.producto.id_producto}/image?${new Date().getTime()}`} :  require('../../assets/imagenes/no-image.jpg') } // TODO: cambiar por imagen del producto
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
              <ArrowButtonConObject navigation={navigation} path={"EditarInventario"} object={inventario} />
            </HStack>
          </Surface>)}
          if(inventario.producto.nombre.toLowerCase().includes(busqueda.toLowerCase())){
            return(          <Surface elevation={5} key={inventario.id_producto} style={styles.productItem}>
              <HStack spacing={10} style={{ flex: 1 }}>
                <VStack style={{ justifyContent: 'center' }}>
                  <Image
                    source={ inventario.producto.imagen ? { uri: `${baseUrl}/productos/${inventario.producto.id_producto}/image?${new Date().getTime()}`} :  require('../../assets/imagenes/no-image.jpg') } // TODO: cambiar por imagen del producto
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
                <ArrowButtonConObject navigation={navigation} path={"EditarInventario"} object={inventario} />
              </HStack>
            </Surface>)
          }
          if(Number(busqueda) >= inventario.cantidad){
            return(          
            <Surface elevation={5} key={inventario.id_producto} style={styles.productItem}>
              <HStack spacing={10} style={{ flex: 1 }}>
                <VStack style={{ justifyContent: 'center' }}>
                  <Image
                    source={ inventario.producto.imagen ? { uri: `${baseUrl}/productos/${inventario.producto.id_producto}/image?${new Date().getTime()}`} :  require('../../assets/imagenes/no-image.jpg') } // TODO: cambiar por imagen del producto
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
                <ArrowButtonConObject navigation={navigation} path={"EditarInventario"} object={inventario} />
              </HStack>
            </Surface>)
          }

})}
      </ScrollView>

      <View style={styles.buttonsContainer}>
        <EntradaNueva navigation={navigation} />
        <SalidaNueva navigation={navigation} />
      </View>
    </View>
  );
};

export default Inventario2;