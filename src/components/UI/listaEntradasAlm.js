import React from "react";
import { Text, ScrollView, Image, Pressable } from "react-native";
import { Spacer, HStack, VStack } from "@react-native-material/core";
import { Surface } from "react-native-paper";

function ListaEntradasAlm({listadoEntradas}){
        return(
            <ScrollView style={{ borderColor: "lightgray"}} flex={1} padding={5}>
                {listadoEntradas.map((entrada)=>
                    <VStack spacing={10} key={entrada}>
                        <HStack style={{margin: 5, borderRadius: 10, borderWidth: 2, padding: 10}} spacing={10}>
                            <VStack>
                                <Text style={{fontSize: 25}}>Entrada: {entrada.idEntrada}</Text>
                                <Text style={{fontSize: 20}}>Articulos: {entrada.cantidadArticulos}</Text>
                            </VStack>
                            <VStack>
                                <Text style={{fontSize: 20}}>{entrada.fecha}</Text>
                            </VStack>
                        </HStack>
                    </VStack>
                )}
            </ScrollView>
        );
};

export default ListaEntradasAlm;