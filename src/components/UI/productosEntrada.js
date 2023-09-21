import React from "react";
import { Text, Image, ScrollView } from "react-native";
import { HStack, VStack } from "@react-native-material/core";
import { Surface } from "react-native-paper";

function ProductosEntrada({ datos }) { 

    return (
        <ScrollView >
            {datos.map((datosEntrada) => 
                <Surface elevation={5} key={datosEntrada.producto} style={{borderRadius: 10, padding: 4, backgroundColor: "lightgray", marginBottom: 3}}> 
                    <HStack>
                        <Image 
                            source={require('../../assets/imagenes/ware.jpg')} // TODO: cambiar por imagen del producto
                            style={{width: "25%", aspectRatio: 1, borderRadius: 10}}
                        />
                    
                        <VStack style={{width: "50%", paddingLeft: 10 }}>
                            <Text style={{ color: "black", fontSize: 20, fontWeight: "bold" }}>{datosEntrada.producto}</Text>
                            <Text style={{ color: "black", fontSize: 15 }}>{datosEntrada.tamano}</Text>
                            <Text style={{ color: "black", fontSize: 15 }}>{datosEntrada.cantidad}</Text>
                        </VStack>
                    </HStack>
                </Surface>
            )}
        </ScrollView>
    );
};

export default ProductosEntrada;