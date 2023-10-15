import React from "react";
import { Text, Image, TextInput } from "react-native";
import { Flex, HStack, VStack } from "@react-native-material/core";
import styles from "../../assets/styles";

function ListaTerminarEntradas({ producto }) { 

    return (
                
        <HStack spacing={10}>
            <VStack style={{justifyContent: "center"}} >
                <Image 
                    source={require('../../assets/imagenes/ware.jpg')} // TODO: cambiar por imagen del producto
                    style={ styles.productImage }
                />
            </VStack>
            
            <HStack fill>
            <VStack spacing={3} style={styles.textoProd}>
                <Text style={styles.productName}>{producto.nombre}</Text>
                <HStack spacing={20}>
                    <VStack>
                        <Text style={styles.productDato}>Tamano: {producto.Tamanio.descripcion}</Text>
                        <Text style={styles.productDato}>Precio: {producto.precio_venta}</Text>
                    </VStack>
                </HStack>
            </VStack>
            
            <Text style={styles.textoCantidad}>{producto.detallesEntrada.cantidad}</Text> 

            </HStack>
        </HStack>
       
    );
};

export default ListaTerminarEntradas;