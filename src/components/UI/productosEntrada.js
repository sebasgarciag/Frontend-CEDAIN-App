import React from "react";
import { Text, Image } from "react-native";
import { HStack, VStack } from "@react-native-material/core";
import { Surface } from "react-native-paper";
import styles from "../../assets/styles";
import ipApi from "../../apis/ipApi";

const { ip, protocol, port } = ipApi;
const baseUrl = `${protocol}${ip}:${port}`;

function ProductosEntrada( entradaDetalle ) { 

    entradaDetalle = entradaDetalle.entradaDetalle;

    return (

        <Surface elevation={5} style={styles.productItem}> 
            <HStack spacing={10}>
                <VStack style={{justifyContent: "center"}}>
                    <Image 
                    source={{ uri: `${baseUrl}/productos/${entradaDetalle.id_producto}/image?${new Date().getTime()}`}} // TODO: cambiar por imagen del producto
                    style={styles.productImage}
                />
            </VStack>
            
            <VStack spacing={3} style={styles.textoProdMov}>
                <Text style={styles.productName}>{entradaDetalle.producto.nombre}</Text>
                <HStack spacing={20}>
                    <VStack>
                        <Text style={styles.productDato}>Tamaño: {entradaDetalle.producto.Tamanio.descripcion}</Text>
                        <Text style={styles.productDato}>Cantidad: {entradaDetalle.cantidad}</Text>
                    </VStack>
                    <VStack>
                        <Text style={styles.productDato}>Precio: {entradaDetalle.precio_unitario}</Text>
                        <Text style={styles.productDato}>Importe: {entradaDetalle.cantidad * entradaDetalle.precio_unitario}</Text>
                    </VStack>
                </HStack>
            </VStack>
        </HStack>
    </Surface>
    );
};

export default ProductosEntrada;