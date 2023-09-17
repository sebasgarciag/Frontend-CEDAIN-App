import React from "react";
import { Text, ScrollView, Image, Pressable } from "react-native";
import { Spacer, HStack, VStack } from "@react-native-material/core";
import { Surface } from "react-native-paper";
import { OpenRegistroButton } from "./uiButtons";

function ListaSalidasAdmin({listadoSalidas}){
        return(
            <ScrollView style={{ borderColor: "lightgray"}} flex={1} padding={5}>
                {listadoSalidas.map((salida)=>
                    <VStack spacing={10} key={salida}>
                        <HStack style={{margin: 5, borderRadius: 10, borderWidth: 2, padding: 10}} spacing={10}>
                            <VStack>
                                <Text style={{fontSize: 19}}>Salida: <Text style={{fontSize: 17}}>{salida.folioSerie}</Text></Text>
                                <Text style={{fontSize: 19}}>Almacenista: <Text style={{fontSize: 17}} >{salida.almacenista}</Text></Text>
                            </VStack>
                            <VStack>
                                <Text style={{fontSize: 19}}>{salida.fecha}</Text>
                                <Text style={{fontSize: 19}}>Articulos: <Text style={{fontSize: 17}}>{salida.cantidadArticulos}</Text> </Text>
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

export default ListaSalidasAdmin;