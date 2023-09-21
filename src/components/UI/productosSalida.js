import React from "react";
import { Text, Image, ScrollView } from "react-native";
import { HStack, VStack } from "@react-native-material/core";
import { Surface } from "react-native-paper";

function ProductosSalida({ datos }) { 

    return (
        <ScrollView >
            {datos.map((datosSalida) => 
                <Surface elevation={5} key={datosSalida.producto} style={{borderRadius: 10, padding: 4, backgroundColor: "lightgray", marginBottom: 3}}> 
                    <HStack>
                        <Image 
                            source={require('../../assets/imagenes/ware.jpg')} // TODO: cambiar por imagen del producto
                            style={{width: "25%", aspectRatio: 1, borderRadius: 10}}
                        />
                    
                        <VStack style={{width: "50%", paddingLeft: 10 }}>
                            <Text style={{ color: "black", fontSize: 20, fontWeight: "bold" }}>{datosSalida.producto}</Text>
                            <Text style={{ color: "black", fontSize: 15 }}>{datosSalida.tamano}</Text>
                            <Text style={{ color: "black", fontSize: 15 }}>{datosSalida.cantidad}</Text>
                        </VStack>
                    </HStack>
                </Surface>
            )}
        </ScrollView>
    );
};

export default ProductosSalida;