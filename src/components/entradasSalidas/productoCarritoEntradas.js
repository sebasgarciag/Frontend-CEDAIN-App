import { useState, React } from 'react';
import { View, Text, TextInput, Image} from 'react-native';
import { Card, IconButton } from 'react-native-paper';
import { Box} from "@react-native-material/core";
import { Flex, HStack, VStack } from "@react-native-material/core";
import styles from "../../assets/styles";
import ipApi from "../../apis/ipApi";

const { ip, protocol, port } = ipApi;
const baseUrl = `${protocol}${ip}:${port}`;

const ProductoCarritoEntradas = ({ producto, aumentarCantidad, disminuirCantidad, handleCantidad }) => {
    const { nombre, imagen, medida, precio_trueque } = producto;


      return (
                
        <HStack spacing={10}>
            <VStack style={{justifyContent: "center"}} >
                <Image 
                    source={ producto.imagen ? { uri: `${baseUrl}/productos/${producto.id_producto}/image?${new Date().getTime()}`} :  require('../../assets/imagenes/no-image.jpg') } // TODO: cambiar por imagen del producto
                    style={ styles.productImage }
                />
            </VStack>
            
            <HStack fill>
            <VStack spacing={3} style={styles.textoProdCarrito}>
                <Text style={styles.productName}>{nombre}</Text>
                <HStack spacing={20}>
                    <VStack>
                        <Text style={styles.productDato}>Medida: {medida}</Text>
                        <Text style={styles.productDato}>Precio Trueque: {precio_trueque}</Text>
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
                    value={( producto.detallesEntrada.cantidad.toString() )}
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
  
  export default ProductoCarritoEntradas;