import React from "react";
import { Text, View } from "react-native";
import { Spacer, VStack, HStack, Stack } from "@react-native-material/core";
import useResumen from "./hookResumen";
import { Surface } from "react-native-paper";
import { ScrollView } from "react-native-gesture-handler";
import buttonStyles from "../../assets/buttons/styles";
import styles from "../../assets/styles";
import { VolverButtonObject, ButtonTerminar } from "../../components/UI/uiButtons";
import { useNavigation } from "expo-router";
import InfoEntrada from "../../components/UI/infoEntrada";
import { useEffect } from "react";
import ListaTerminarEntradas from "../../components/entradasSalidas/listaTerminarEntradas";

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

    //console.log("Carrito resumen Entrada: ", carrito)
    //console.log("Entrada Resumen: ", entrada)

    const carrito2Entradas = [...carrito];

    return (
        <Stack style={styles.container}>

            <HStack style={styles.titulosContainer}>
                <Text style={styles.headerText}>Resumen de entrada</Text>
            </HStack>

            <InfoEntrada entrada={entrada} />
            
            <ScrollView>
                <VStack>
                    <Spacer/>
                    
                    {carrito.map((producto) => 
                        <Surface elevation={5} key={producto.id_producto} style={styles.productItem}> 
                            <ListaTerminarEntradas producto={producto}/>
                        </Surface> 
                    )}

                </VStack>
            </ScrollView>
            <View style={ buttonStyles.containerNavegacion }>
                    <VolverButtonObject navigation={navigation} path={"InfoDestinoE"} object={{ carrito2Entradas, entrada }}/>
                    {/*<VolverButtonObjectDirect navigation={navigation} object={{ carrito2Entradas, entrada }}/>*/}
                    <ButtonTerminar terminarFunction={() => terminar(entrada, carrito)} />
            </View>
        </Stack>
    );
};

export default Resumen;