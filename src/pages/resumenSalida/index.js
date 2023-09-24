import React from "react";
import { Text, View, TextInput } from "react-native";
import { Box, HStack, Spacer, VStack } from "@react-native-material/core";
import useResumen from "./hookResumen";
import CuadroSalida from "../../components/entradasSalidas/cuadroResumen";
import ListaSalida from "../../components/entradasSalidas/listaResumen";
import { Surface } from "react-native-paper";
import { ScrollView } from "react-native-gesture-handler";
import { VolverButton } from "../../components/UI/uiButtons";
import buttonStyles from "../../assets/buttons/styles";
import styles from "../../assets/styles";
import { VolverButtonN } from "../../components/UI/uiButtons";
import { SiguienteButtonN } from "../../components/UI/uiButtons";
import { useNavigation } from "expo-router";
import useCurrentScreen from "../../components/UI/useCurrentScreen";

const Resumen = () => { 

    const { salida, datosSalida, handleCantidad } = useResumen();
    const navigation = useNavigation();
    const {currentScreen,setScreen} = useCurrentScreen(); 
    return (
        <>
        <ScrollView>
        <VStack>
            <Box style={{ backgroundColor: "black", padding: 10, borderRadius: 10 }}>
                <Text style={{ color: "white", fontSize: 20 }}>Resumen de salida</Text>
            </Box>
            <CuadroSalida salida={salida} />
            <Spacer/>
            
            
            {datosSalida.map((datosSalida) => 
            
                <Surface elevation={5} key={datosSalida.producto} style={styles.productItem}> 
                    
                    <ListaSalida datos={datosSalida} handleCantidad={handleCantidad}/>
                
                    {/* <HStack>

                        <ListaSalida datos={datosSalida}/>

                    <Box style={{width: "25%", justifyContent: "center"}}>
                            <TextInput 
                                style={{ textAlign: "center", textAlignVertical: "bottom", paddingRight: 10, fontSize: 20, fontWeight: "bold" }} 
                                defaultValue="0"
                                onChangeText={ newCantidad => handleCantidad(datosSalida.producto, newCantidad) } // TODO: agregar verificacion de inventario
                                value={( datosSalida.cantidad.toString() )}
                                keyboardType="numeric"
                            />
                        </Box>



                    </HStack> */}

                </Surface> 
            )}

        </VStack>
        </ScrollView>
        {/* <BotonASC textoBoton1={"Anterior"} textoBoton2={"Terminar"} direccion1={"infoDestino"} direccion2={""}/> */}
        <View style={ buttonStyles.containerNavegacion }>
                <VolverButtonN navigation={navigation} path={"InfoDestinoN"} setScreen={setScreen} screen={"InfoDestino"}/>
                <SiguienteButtonN navigation={navigation} path={"Home"} setScreen={setScreen} screen={""}/>
        </View>
        </>
    );
};

export default Resumen;