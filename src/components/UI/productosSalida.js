import React from "react";
import { Text, Image } from "react-native";
import { HStack, VStack } from "@react-native-material/core";
import { Surface } from "react-native-paper";
import styles from "../../assets/styles";
import useInventario from "../../pages/inventario/useInventario";

function ProductosSalida( salidaDetalle ) { 

    salidaDetalle = salidaDetalle.salidaDetalle;
    
    return (

        <Surface elevation={5} style={styles.productItem}> 
            <HStack spacing={10}>
                <VStack style={{justifyContent: 'center'}}>
                    <Image 
                        source={require('../../assets/imagenes/ware.jpg')} // TODO: cambiar por imagen del producto
                        style={styles.productImage}
                    />
                </VStack>
                <VStack spacing={3} style={styles.textoProdMov}>
                    <Text style={styles.productName}>{salidaDetalle.producto.nombre}</Text>
                    <HStack spacing={20}>
                        <VStack>
                            <Text style={styles.productDato}>Tamaño: {salidaDetalle.producto.Tamanio.descripcion}</Text>
                            <Text style={styles.productDato}>Cantidad: {salidaDetalle.cantidad}</Text>
                        </VStack>
                        <VStack>
                            <Text style={styles.productDato}>Precio: {salidaDetalle.precio_unitario}</Text>
                            <Text style={styles.productDato}>Importe: {salidaDetalle.cantidad * salidaDetalle.precio_unitario}</Text>
                        </VStack>
                    </HStack>
                </VStack>
            </HStack>
        </Surface>

    );
};

export default ProductosSalida;