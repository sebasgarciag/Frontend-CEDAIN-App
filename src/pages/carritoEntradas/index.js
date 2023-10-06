import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { Spacer, VStack, HStack, Stack } from "@react-native-material/core";
import { Surface } from "react-native-paper";
import { ScrollView } from "react-native-gesture-handler";
import buttonStyles from "../../assets/buttons/styles";
import styles from "../../assets/styles";
import { VolverButtonN, SiguienteButtonN } from "../../components/UI/uiButtons";
import { useNavigation } from "expo-router";
import ProductoCarrito from "../../components/entradasSalidas/productoCarrito";
import useCarritoEntradas from "./hookProductoCarritoEntradas";
import TotalProductos from "../../components/entradasSalidas/totalProductos";

const ArticulosCarritoEntrada = ({carrito}) => {  
    const {handleCantidad, aumentarCantidad, disminuirCantidad, carrito2Entradas, setCarrito2Entradas} = useCarritoEntradas();
    const navigation = useNavigation();


   // console.log("pantalla carrito: ",carrito);
   // console.log("pantalla carrito2: ",carrito2);


    useEffect(() => {
        setCarrito2Entradas(carrito)
    }, [carrito]);

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
                    <SiguienteButtonN navigation={navigation} path={"InfoDestinoN"} />
            </View>
        </Stack>
    );
};

export default ArticulosCarritoEntrada;