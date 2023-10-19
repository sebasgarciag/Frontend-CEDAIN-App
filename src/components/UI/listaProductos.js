import React from "react";
import { Text, ScrollView, Image } from "react-native";
import { HStack, VStack } from "@react-native-material/core";
import { ArrowButtonConObject } from "./uiButtons";
// import styles from "../../assets/styles";
import styles from '../../assets/buttons/styles';
// import styles from '../../assets/buttons/styles';
import { Surface } from "react-native-paper";
import { useNavigation } from '@react-navigation/native';
import ipApi from "../../apis/ipApi";

const { ip, protocol, port } = ipApi;
const baseUrl = `${protocol}${ip}:${port}`;

function ListaProductos({listadoProductos}){    
    const navigation = useNavigation();
        return(
            <ScrollView style={styles.listaMovs} >
                {listadoProductos.map((producto) => 
                <Surface elevation={5} key={producto.id_producto} style={styles.productItem}> 
                    <HStack spacing={10} style={{ flex: 1 }}>
                    <VStack style={{justifyContent: 'center'}}>
                        <Image 
                        source={ producto.imagen ? { uri: `${baseUrl}/productos/${producto.id_producto}/image?${new Date().getTime()}`} :  require('../../assets/imagenes/no-image.jpg') } // TODO: cambiar por imagen del producto
                        style={styles.productImage}
                        cache='reload'
                        />
                    </VStack>
                    <VStack spacing={3} style={[styles.textoProdMov, { flex: 1 }]}>
                        <Text style={styles.productName}>{producto.nombre}</Text>
                        <HStack spacing={20}>
                        <VStack>
                            <Text style={styles.productQuantity}>Tamaño: {producto.Tamanio.descripcion}</Text>
                            <Text style={styles.productQuantity}>Medida: {producto.medida}</Text>
                            <Text style={styles.productQuantity}>Precio Venta: ${producto.precio_venta}</Text>
                        </VStack>
                        </HStack>
                    </VStack>
                    <ArrowButtonConObject navigation={navigation} path={"editarProducto"} object={producto} />
                    </HStack>
                </Surface>
                )}
            </ScrollView>
        );
};

export default ListaProductos;