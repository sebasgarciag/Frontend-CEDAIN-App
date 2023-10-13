import React from "react";
import { Text, View } from "react-native";
import { Spacer, VStack, HStack, Stack } from "@react-native-material/core";
import useResumen from "./hookResumen";
import { Surface } from "react-native-paper";
import { ScrollView } from "react-native-gesture-handler";
import buttonStyles from "../../assets/buttons/styles";
import styles from "../../assets/styles";
import { VolverButtonN, SiguienteButtonN } from "../../components/UI/uiButtons";
import { useNavigation } from "expo-router";
import InfoSalida from "../../components/UI/infoSalida";
import { useEffect } from "react";
import ListaTerminar from "../../components/entradasSalidas/listaTerminar";

/**
 * Componente para mostrar un resumen de entrada.
 * 
 * Este componente presenta un resumen detallado de una entrada específica, 
 * incluyendo los productos asociados.
 * Utiliza el hook `useResumen` para manejar la lógica y el estado.
 * 
 * @param {Object} objeto - Datos que incluyen detalles de la entrada y el carrito.
 * @returns {JSX.Element}
 */

const Resumen = ({objeto}) => { 

    const { entrada, setEntrada, carrito, setCarrito, terminar } = useResumen();
    const navigation = useNavigation();

    useEffect (() => {
        setEntrada(objeto.entrada);
        setCarrito(objeto.carrito);
    }, [objeto]);

    return (
        <Stack style={styles.container}>

            <HStack style={styles.titulosContainer}>
                <Text style={styles.headerText}>Resumen de entrada</Text>
            </HStack>

            <InfoSalida salida={entrada} />
            
            <ScrollView>
                <VStack>
                    <Spacer/>
                    
                    {carrito.map((producto) => 
                        <Surface elevation={5} key={producto.id_producto} style={styles.productItem}> 
                            <ListaTerminar producto={producto}/>
                        </Surface> 
                    )}

                </VStack>
            </ScrollView>
            <View style={ buttonStyles.containerNavegacion }>
                    <VolverButtonN navigation={navigation} path={"InfoDestinoE"} />
                    {/* <SiguienteButtonN navigation={navigation} path={"Entradas"} /> */}
                    <ButtonTerminar terminarFunction={() => terminar(entrada, carrito)} />
            </View>
        </Stack>
    );
};

export default Resumen;