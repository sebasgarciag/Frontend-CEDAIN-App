import React from "react";
import { Text, Image, ScrollView } from "react-native";
import { HStack, VStack } from "@react-native-material/core";
import { Surface } from "react-native-paper";
import styles from "../../assets/styles";

function ProductosEntrada({ datos }) { 

    return (
        <ScrollView >
            {datos.map((datosEntrada) => 
                <Surface elevation={5} style={styles.productItem}> 
                    <HStack spacing={10}>
                        <VStack style={{justifyContent: "center"}}>
                            <Image 
                                source={require('../../assets/imagenes/ware.jpg')} // TODO: cambiar por imagen del producto
                                style={styles.productImage}
                            />
                        </VStack>
                        
                        <VStack spacing={3} style={styles.textoProdMov}>
                            <Text style={styles.productName}>{datosEntrada.producto}</Text>
                            <HStack spacing={20}>
                                <VStack>
                                    <Text style={styles.productDato}>Tamaño: {datosEntrada.tamano}</Text>
                                    <Text style={styles.productDato}>Cantidad: {datosEntrada.cantidad}</Text>
                                </VStack>
                                <VStack>
                                    <Text style={styles.productDato}>Precio: {datosEntrada.precio}</Text>
                                    <Text style={styles.productDato}>Importe: {datosEntrada.importe}</Text>
                                </VStack>
                            </HStack>
                        </VStack>
                    </HStack>
                </Surface>
            )}
        </ScrollView>
    );
};

export default ProductosEntrada;