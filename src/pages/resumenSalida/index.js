import React from "react";
import { Text, View, TextInput } from "react-native";
import { Box, HStack, Spacer, VStack } from "@react-native-material/core";
import useResumen from "./hookResumen";
import CuadroSalida from "../../components/entradasSalidas/cuadroResumen";
import ListaSalida from "../../components/entradasSalidas/listaResumen";
import { Surface } from "react-native-paper";
import { ScrollView } from "react-native-gesture-handler";

const ResumenSalida = () => { 

    const { salida, datosSalida, handleCantidad } = useResumen();

    return (

        <ScrollView>
        <VStack style={{ padding: 10 }} spacing={20}>
            <Box style={{ backgroundColor: "black", padding: 10, borderRadius: 10 }}>
                <Text style={{ color: "white", fontSize: 20 }}>Resumen de salida</Text>
            </Box>
            <CuadroSalida salida={salida} />
            <Spacer/>
            
            
            {datosSalida.map((datosSalida) => 
            
                <Surface elevation={5} key={datosSalida.producto} style={{borderRadius: 10, padding: 4, backgroundColor: "lightgray"}}> 
                    <HStack>
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
                    </HStack>
                </Surface>
            )}

        </VStack>
        </ScrollView>
    );
};

export default ResumenSalida;