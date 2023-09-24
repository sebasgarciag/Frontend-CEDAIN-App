import React from "react";
import { Text, Image } from "react-native";
import { HStack, VStack } from "@react-native-material/core";

function ListaSalida({ datos }) { 

    return (
                
                    <HStack>
                        <Image 
                            source={require('../../assets/imagenes/ware.jpg')} // TODO: cambiar por imagen del producto
                            style={{width: "25%", aspectRatio: 1, borderRadius: 10}}
                        />
                        
                        <VStack style={{width: "50%", paddingLeft: 10 }}>
                            <Text style={{ color: "black", fontSize: 20, fontWeight: "bold" }}>{datos.producto}</Text>
                            <Text style={{ color: "black", fontSize: 15 }}>{datos.tamano}</Text>
                        </VStack>
                        
                        
                    </HStack>
       
    );
};

export default ListaSalida;