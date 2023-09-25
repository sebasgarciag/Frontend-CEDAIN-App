import React from "react";
import { Text, View } from "react-native";
import { Spacer, VStack, HStack, Stack } from "@react-native-material/core";
import { Surface } from "react-native-paper";
import { ScrollView } from "react-native-gesture-handler";
import buttonStyles from "../../assets/buttons/styles";
import styles from "../../assets/styles";
import { VolverButtonN, SiguienteButtonN } from "../../components/UI/uiButtons";
import { useNavigation } from "expo-router";
import ProductoCarrito from "../../components/entradasSalidas/productoCarrito";
import useCarrito from "../carrito/hookProductoCarrito";
import TotalProductos from "../../components/entradasSalidas/totalProductos";

const ArticulosCarritoEntrada = () => {  
    const {carrito, handleCantidad, aumentarCantidad, disminuirCantidad} = useCarrito();
    const navigation = useNavigation();

    return (
        <Stack style={styles.container}>

            <HStack style={styles.titulosContainer}>
                <Text style={styles.headerText}>Productos Seleccionados</Text>
            </HStack>
            
            <ScrollView>
                <VStack>
                    <Spacer/>
                    
                    {carrito.map((producto) => 
                        <Surface elevation={5} key={producto.id} style={styles.productItem}> 
                            <ProductoCarrito                 
                                producto={producto}
                                aumentarCantidad={aumentarCantidad}
                                disminuirCantidad={disminuirCantidad}
                                handleCantidad={handleCantidad}
                            />
                        </Surface> 
                    )}

                </VStack>
                <Surface style={styles.productItem}>
           			<TotalProductos carrito={carrito}/>
            	</Surface>
            </ScrollView>
            <View style={ buttonStyles.containerNavegacion }>
                    <VolverButtonN navigation={navigation} path={"CrearEntrada"} />
                    <SiguienteButtonN navigation={navigation} path={"InfoDestinoE"} />
            </View>
        </Stack>
    );
};

export default ArticulosCarritoEntrada;