import { useState, React } from 'react';
import { View, Text, TextInput, Image} from 'react-native';
import { Card, IconButton } from 'react-native-paper';
import { Box} from "@react-native-material/core";
import { Flex, HStack, VStack } from "@react-native-material/core";
import styles from "../../assets/styles";


const ProductoCarrito = ({ producto, aumentarCantidad, disminuirCantidad, handleCantidad, tipo }) => {
    const { nombre, imagen, medida, precio_trueque, precio_venta } = producto;

    precio = 0;
    tipoPrecio = "";

    if(tipo == "salida") {
        precio = precio_venta;
        tipoPrecio = "Precio Venta: ";
    }
    else {
        precio = precio_trueque;
        tipoPrecio = "Precio Trueque: ";
    }

    // console.log("Producto: ", producto);

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
                        <Text style={styles.productDato}>Medida: {medida}</Text>
                        <Text style={styles.productDato}>{tipoPrecio} {precio}</Text>
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
                    value={( producto.detallesSalida.cantidad.toString() )}
                    keyboardType="numeric"
            />
            <IconButton
                testID="increaseQuantityButton"
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