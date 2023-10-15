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
import useCarrito from "./hookProductoCarrito";
import TotalProductos from "../../components/entradasSalidas/totalProductos";

const ArticulosCarrito = ({objeto}) => {
    const {handleCantidad, aumentarCantidad, disminuirCantidad, carrito2, setCarrito2, salida, setSalida} = useCarrito();

    const navigation = useNavigation();
    

    useEffect(() => {
        setCarrito2(objeto.carrito);
        setSalida(objeto.salida)
    }, [objeto]);


    return (
        <Stack style={styles.container}>

            <HStack style={styles.titulosContainer}>
                <Text style={styles.headerText}>Productos Seleccionados</Text>
            </HStack>
            
            <ScrollView>
                <VStack>
                    <Spacer/>
                    
                    {carrito2.map((producto) => 
                        <Surface elevation={5} key={producto.id_producto} style={styles.productItem}> 
                            <ProductoCarrito                 
                                producto={producto}
                                aumentarCantidad={aumentarCantidad}
                                disminuirCantidad={disminuirCantidad}
                                handleCantidad={handleCantidad}
                            />
                        </Surface> 
                    )}

                </VStack>
                
            </ScrollView>
            <Surface style={styles.productItem}>
           		    <TotalProductos carrito={carrito2}/>
            </Surface>
            <View style={ buttonStyles.containerNavegacion }>
                    <VolverButtonN navigation={navigation} path={"CrearSalida"} />
                    <SiguienteButtonNObject navigation={navigation} path={"InfoDestinoN"} object={{ carrito2, salida }}/>
            </View>
        </Stack>
    );
};

export default ArticulosCarrito;