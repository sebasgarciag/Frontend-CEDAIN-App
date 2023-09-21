import React from "react";
import { Text } from "react-native";
import { Box, HStack, VStack } from "@react-native-material/core";

function InfoEntrada({ entrada }) { 

    const textColor = "white";
    const backgroundColor = "black";
    const textSize = 20;

    return (
        <Box style={{ backgroundColor: backgroundColor, borderRadius: 10, margin:3}}>
            <VStack spacing={20} style={{ margin: 10 }}>
                <HStack spacing={10}>
                    <Text style={{ color: textColor, width: "50%", fontSize: textSize }}>Receptor: {entrada.receptor}</Text>
                    <Text style={{ color: textColor, width: "50%", fontSize: textSize }}>Emisor: {entrada.emisor}</Text>
                </HStack>
                <HStack spacing={10}>
                    <Text style={{ color: textColor, width: "50%", fontSize: textSize }}>Comunidad: {entrada.comunidad}</Text>
                    <Text style={{ color: textColor, width: "50%", fontSize: textSize }}>Evento: {entrada.evento}</Text>
                </HStack>
                <Box>
                    <Text style={{ color: textColor, fontSize: textSize }}>Observaciones: {entrada.observaciones}</Text>
                </Box>
            </VStack>
        </Box>
    );
};

export default InfoEntrada;