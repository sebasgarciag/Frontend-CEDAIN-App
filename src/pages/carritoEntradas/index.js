import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { Spacer, VStack, HStack, Stack } from "@react-native-material/core";
import { Surface } from "react-native-paper";
import { ScrollView } from "react-native-gesture-handler";
import buttonStyles from "../../assets/buttons/styles";
import styles from "../../assets/styles";
import { VolverButtonN, SiguienteButtonNObject } from "../../components/UI/uiButtons";
import { useNavigation } from "expo-router";
import ProductoCarrito from "../../components/entradasSalidas/productoCarrito";
import useCarritoEntradas from "./hookProductoCarritoEntradas";
import TotalProductos from "../../components/entradasSalidas/totalProductos";

const ArticulosCarritoEntrada = ({objeto}) => {  
    const {handleCantidad, aumentarCantidad, disminuirCantidad, carrito2Entradas, setCarrito2Entradas, entrada, setEntrada } = useCarritoEntradas();
    const navigation = useNavigation();

    useEffect(() => {
        setCarrito2Entradas(objeto.carrito);
        setEntrada(objeto.entrada);
    }, [objeto]);

    return (
        <Stack style={styles.container}>

            <HStack style={styles.titulosContainer}>
                <Text style={styles.headerText}>Productos Seleccionados</Text>
            </HStack>
            
            <ScrollView>
                <VStack>
                    <Spacer/>
                    
                    {carrito2Entradas.map((producto) => 
                        <Surface elevation={5} key={producto.id_producto} style={styles.productItem}> 
                            <ProductoCarrito                 
                                producto={producto}
                                aumentarCantidad={aumentarCantidad}
                                disminuirCantidad={disminuirCantidad}
                                handleCantidad={handleCantidad}
                                tipo = "salida"
                            />
                        </Surface> 
                    )}

                </VStack>
                <Surface style={styles.productItem}>
           			<TotalProductos carrito={carrito2Entradas}/>
            	</Surface>
            </ScrollView>
            <View style={ buttonStyles.containerNavegacion }>
                    <VolverButtonN navigation={navigation} path={"CrearSalida"} />
                    <SiguienteButtonNObject navigation={navigation} path={"InfoDestinoN"} object={{ carrito2Entradas, entrada }} />
            </View>
        </Stack>
    );
};

export default ArticulosCarritoEntrada;