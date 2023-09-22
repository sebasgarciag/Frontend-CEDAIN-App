import React from "react";
import { Text, Image, ScrollView } from "react-native";
import { HStack, VStack } from "@react-native-material/core";
import { Surface } from "react-native-paper";
import styles from "../../assets/styles";

function ProductosSalida({ datos }) { 

    return (
        <ScrollView >
            {datos.map((datosSalida) => 
                <Surface elevation={5} key={datosSalida.producto} style={styles.productItem}> 
                    <HStack spacing={10}>
                        <VStack style={{justifyContent: 'center'}}>
                            <Image 
                                source={require('../../assets/imagenes/ware.jpg')} // TODO: cambiar por imagen del producto
                                style={styles.productImage}
                            />
                        </VStack>
                        <VStack spacing={3} style={styles.textoProdMov}>
                            <Text style={styles.productName}>{datosSalida.producto}</Text>
                            <HStack spacing={20}>
                                <VStack>
                                    <Text style={styles.productDato}>Tamaño: {datosSalida.tamano}</Text>
                                    <Text style={styles.productDato}>Cantidad: {datosSalida.cantidad}</Text>
                                </VStack>
                                <VStack>
                                    <Text style={styles.productDato}>Precio: {datosSalida.precio}</Text>
                                    <Text style={styles.productDato}>Importe: {datosSalida.importe}</Text>
                                </VStack>
                            </HStack>
                        </VStack>
                    </HStack>
                </Surface>
            )}
        </ScrollView>
    );
};

export default ProductosSalida;