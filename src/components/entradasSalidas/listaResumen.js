import React from "react";
import { Text, Image, TextInput } from "react-native";
import { Flex, HStack, VStack } from "@react-native-material/core";
import styles from "../../assets/styles";

function ListaSalida({ datos, handleCantidad }) { 

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
                <Text style={styles.productName}>{datos.producto}</Text>
                <HStack spacing={20}>
                    <VStack>
                        <Text style={styles.productDato}>Tamano: {datos.tamano}</Text>
                        <Text style={styles.productDato}>Precio: {datos.precio}</Text>
                    </VStack>
                </HStack>
            </VStack>
            
            {/* <Text style={styles.textoCantidad}>{datos.cantidad}</Text>  */}

            <TextInput 
                    style={styles.textoCantidad} 
                    defaultValue="0"
                    onChangeText={ newCantidad => handleCantidad(datos.producto, newCantidad) } // TODO: agregar verificacion de inventario
                    value={( datos.cantidad.toString() )}
                    keyboardType="numeric"
            />

            </HStack>
        </HStack>
       
    );
};

export default ListaSalida;