import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { Spacer, VStack, HStack, Stack } from "@react-native-material/core";
import { Surface } from "react-native-paper";
import { ScrollView } from "react-native-gesture-handler";
import buttonStyles from "../../assets/buttons/styles";
import styles from "../../assets/styles";
import { VolverButtonN, SiguienteButtonNObject } from "../../components/UI/uiButtons";
import { useNavigation } from "expo-router";
import useCarritoEntradas from "./hookProductoCarritoEntradas";
import ProductoCarritoEntradas from "../../components/entradasSalidas/productoCarritoEntradas";
import TotalProductosEntradas from "../../components/entradasSalidas/totalProductosEntradas";

const ArticulosCarritoEntrada = ({objeto}) => {  
    const {handleCantidad, aumentarCantidad, disminuirCantidad, carrito2Entradas, setCarrito2Entradas, entrada, setEntrada } = useCarritoEntradas();
    const navigation = useNavigation();

    useEffect(() => {
        setCarrito2Entradas(objeto.carritoEntradas);
        setEntrada(objeto.entrada);
    }, [objeto]);

    //console.log("Carrito 2 Entradas: ", carrito2Entradas)

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
                            <ProductoCarritoEntradas                 
                                producto={producto}
                                aumentarCantidad={aumentarCantidad}
                                disminuirCantidad={disminuirCantidad}
                                handleCantidad={handleCantidad}
                                tipo = "entrada"
                            />
                        </Surface> 
                    )}

                </VStack>
            </ScrollView>
            <Surface style={styles.productItem}>
           			<TotalProductosEntradas carrito={carrito2Entradas}/>
            </Surface>
            <View style={ buttonStyles.containerNavegacion }>
                    <VolverButtonN navigation={navigation} path={"CrearEntrada"} />
                    <SiguienteButtonNObject navigation={navigation} path={"InfoDestinoE"} object={{ carrito2Entradas, entrada }} />
            </View>
        </Stack>
    );
};

export default ArticulosCarritoEntrada;