import React from 'react';
import { View, Text, TextInput, Image} from 'react-native';
import { Card, IconButton } from 'react-native-paper';
import { Box} from "@react-native-material/core";
import { Flex, HStack, VStack } from "@react-native-material/core";
import styles from "../../assets/styles";


const ProductoCarrito = ({ producto, aumentarCantidad, disminuirCantidad, handleCantidad }) => {
    const { nombre, imagen, cantidad, tamaño, precio, } = producto;

      return (
                
        <HStack spacing={10}>
            <VStack style={{justifyContent: "center"}} >
                <Image 
                    source={imagen} // TODO: cambiar por imagen del producto
                    style={ styles.productImage }
                />
            </VStack>
            
            <HStack fill>
            <VStack spacing={3} style={styles.textoProdCarrito}>
                <Text style={styles.productName}>{nombre}</Text>
                <HStack spacing={20}>
                    <VStack>
                        <Text style={styles.productDato}>Tamano: {tamaño}</Text>
                        <Text style={styles.productDato}>Precio: {precio}</Text>
                    </VStack>
                </HStack>
            </VStack>
            <View style={styles.containerCantidadCarrito}>
            {/* <Text style={styles.textoCantidad}>{datos.cantidad}</Text>  */}
            <IconButton
                icon="minus"
                size={15}
                onPress={() =>disminuirCantidad(producto)}
              />
            <TextInput 
                    style={styles.textoCantidadCarrito} 
                    defaultValue="0"
                    onChangeText={ newCantidad => handleCantidad(producto, newCantidad) } // TODO: agregar verificacion de inventario
                    value={( cantidad.toString() )}
                    keyboardType="numeric"
            />
            <IconButton
                icon="plus"
                size={15}
                onPress={() => aumentarCantidad(producto)}
              />
            </View>  
            </HStack>

        </HStack>
       
    );
  };
  
  export default ProductoCarrito;