import React from "react";
import { Text, Image, TextInput } from "react-native";
import { Flex, HStack, VStack } from "@react-native-material/core";
import styles from "../../assets/styles";
import ipApi from "../../apis/ipApi";

const { ip, protocol, port } = ipApi;
const baseUrl = `${protocol}${ip}:${port}`;

function ListaTerminar({ producto }) { 

    return (
                
        <HStack spacing={10}>
            <VStack style={{justifyContent: "center"}} >
                <Image 
                    source={ producto.imagen ? { uri: `${baseUrl}/productos/${producto.id_producto}/image?${new Date().getTime()}`} :  require('../../assets/imagenes/no-image.jpg') } // TODO: cambiar por imagen del producto
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
            
            <Text style={styles.textoCantidad}>{producto.detallesSalida.cantidad}</Text> 

            </HStack>
        </HStack>
       
    );
};

export default ListaTerminar;