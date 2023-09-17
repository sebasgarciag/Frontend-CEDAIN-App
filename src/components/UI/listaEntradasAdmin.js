import React from "react";
import { Text, ScrollView, Image, Pressable } from "react-native";
import { Spacer, HStack, VStack } from "@react-native-material/core";
import { Surface } from "react-native-paper";

function ListaEntradasAdmin({listadoEntradas}){
        return(
            <ScrollView style={{ borderColor: "lightgray"}} flex={1} padding={5}>
                {listadoEntradas.map((entrada)=>
                    <VStack spacing={10} key={entrada}>
                        <HStack style={{margin: 5, borderRadius: 10, borderWidth: 2, padding: 10}} spacing={10}>
                            <VStack>
                                <Text style={{fontSize: 19}}>Entrada: <Text style={{fontSize: 17}}>{entrada.folioSerie}</Text></Text>
                                <Text style={{fontSize: 19}}>Almacenista: <Text style={{fontSize: 17}} >{entrada.almacenista}</Text></Text>
                            </VStack>
                            <VStack>
                                <Text style={{fontSize: 19}}>{entrada.fecha}</Text>
                                <Text style={{fontSize: 19}}>Articulos: <Text style={{fontSize: 17}}>{entrada.cantidadArticulos}</Text> </Text>
                            </VStack>
                        </HStack>
                    </VStack>
                )}
            </ScrollView>
        );
};

export default ListaEntradasAdmin;