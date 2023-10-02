import React, { useEffect } from "react";
import { Text, Image, ScrollView } from "react-native";
import { HStack, VStack } from "@react-native-material/core";
import { Surface } from "react-native-paper";
import styles from "../../assets/styles";
import useInventario from "../../pages/inventario/useInventario";

function ProductosEntrada( entradaDetalle ) { 

    const { productos } = useInventario();

    let producto = productos.find((producto) => producto.id_producto === entradaDetalle?.id_producto);
    // console.log('producto', producto);

    // useEffect(() => { 
    //     producto = productos.find((producto) => producto.id_producto === entradaDetalle?.id_producto);
    // }, [entradaDetalle?.id_producto]);

    return (

        <Surface elevation={5} style={styles.productItem}> 
            <HStack spacing={10}>
                <VStack style={{justifyContent: "center"}}>
                    <Image 
                    source={require('../../assets/imagenes/ware.jpg')} // TODO: cambiar por imagen del producto
                    style={styles.productImage}
                />
            </VStack>
            
            <VStack spacing={3} style={styles.textoProdMov}>
                <Text style={styles.productName}>{producto.producto}</Text>
                <HStack spacing={20}>
                    <VStack>
                        <Text style={styles.productDato}>Tamaño: {producto.tamano}</Text>
                        <Text style={styles.productDato}>Cantidad: {producto.cantidad}</Text>
                    </VStack>
                    <VStack>
                        <Text style={styles.productDato}>Precio: {producto.precio}</Text>
                        <Text style={styles.productDato}>Importe: {producto.importe}</Text>
                    </VStack>
                </HStack>
            </VStack>
        </HStack>
    </Surface>
    );
};

export default ProductosEntrada;