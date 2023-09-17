import React from "react";
import { Text, ScrollView, Image, Pressable } from "react-native";
import { Spacer, HStack, VStack } from "@react-native-material/core";
import { Surface } from "react-native-paper";
import { OpenRegistroButton } from "./uiButtons";

function ListaSalidasAlm({listadoSalidas}){
        return(
            <ScrollView style={{ borderColor: "lightgray"}} flex={1} padding={5}>
                {listadoSalidas.map((salida)=>
                    <VStack spacing={10} key={salida}>
                        <HStack style={{margin: 5, borderRadius: 10, borderWidth: 2, padding: 10}} spacing={10}>
                            <VStack>
                                <Text style={{fontSize: 25}}>Salida: {salida.idSalida}</Text>
                                <Text style={{fontSize: 20}}>Articulos: {salida.cantidadArticulos}</Text>
                            </VStack>
                            <VStack>
                                <Text style={{fontSize: 20}}>{salida.fecha}</Text>
                            </VStack>
                            <VStack style={{flex: 1, alignItems: 'center'}}>
                                <OpenRegistroButton/>
                            </VStack>
                        </HStack>
                    </VStack>
                )}
            </ScrollView>
        );
};

export default ListaSalidasAlm;