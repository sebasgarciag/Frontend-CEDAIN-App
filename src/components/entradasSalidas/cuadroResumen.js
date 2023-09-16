import React from "react";
import { Text } from "react-native";
import { Box, HStack, VStack } from "@react-native-material/core";

function CuadroSalida({ salida }) { 

    const textColor = "white";
    const backgroundColor = "black";
    const textSize = 20;

    return (
        <Box style={{ backgroundColor: backgroundColor, borderRadius: 10}}>
            <VStack spacing={20} style={{ margin: 10 }}>
                <HStack spacing={10}>
                    <Text style={{ color: textColor, width: "50%", fontSize: textSize }}>Receptor: {salida.receptor}</Text>
                    <Text style={{ color: textColor, width: "50%", fontSize: textSize }}>Emisor: {salida.emisor}</Text>
                </HStack>
                <HStack spacing={10}>
                    <Text style={{ color: textColor, width: "50%", fontSize: textSize }}>Comunidad: {salida.comunidad}</Text>
                    <Text style={{ color: textColor, width: "50%", fontSize: textSize }}>Evento: {salida.evento}</Text>
                </HStack>
                <Box>
                    <Text style={{ color: textColor, fontSize: textSize }}>Observaciones: {salida.observaciones}</Text>
                </Box>
            </VStack>
        </Box>
    );
};

export default CuadroSalida;