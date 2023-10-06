import React, { useEffect } from "react";
import { Text, View } from "react-native";
import { Spacer, VStack, HStack, Stack } from "@react-native-material/core";
import useResumen from "./hookResumen";
import { Surface } from "react-native-paper";
import { ScrollView } from "react-native-gesture-handler";
import buttonStyles from "../../assets/buttons/styles";
import styles from "../../assets/styles";
import { VolverButtonN, SiguienteButtonN, ButtonTerminar } from "../../components/UI/uiButtons";
import { useNavigation } from "expo-router";
import InfoSalida from "../../components/UI/infoSalida";
import ListaTerminar from "../../components/entradasSalidas/listaTerminar";

const Resumen = ({objeto}) => { 

    const { salida, setSalida, carrito, setCarrito, terminar } = useResumen();
    const navigation = useNavigation();

    useEffect (() => {
        setSalida(objeto.salida);
        setCarrito(objeto.carrito);
    }, [objeto]);

    return (
        <Stack style={styles.container}>

            <HStack style={styles.titulosContainer}>
                <Text style={styles.headerText}>Resumen de salida</Text>
            </HStack>

            <InfoSalida salida={salida} />
            
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
                    <VolverButtonN navigation={navigation} path={"InfoDestinoN"} />
                    {/* <SiguienteButtonN navigation={navigation} path={"Salidas"} /> */}
                    <ButtonTerminar terminarFunction={() => terminar(salida, carrito)} />
            </View>
        </Stack>
    );
};

export default Resumen;