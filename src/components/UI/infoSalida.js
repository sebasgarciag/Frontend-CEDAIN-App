import React from "react";
import { Text } from "react-native";
import { Box, HStack, VStack } from "@react-native-material/core";
import styles from "../../assets/styles";

function InfoSalida({ salida }) { 

    return (
        <Box style={styles.cuandroInfoRegistro}>
            <VStack  style={{ margin: 5 }}>
                <HStack spacing={10}>
                    <VStack style={{width: '50%'}}>
                        <Text style={styles.subtituloInfoRegistro}>Receptor:</Text>
                        <Text style={styles.textoInfoRegistro}>{salida.receptor}</Text>
                    </VStack>
                    <VStack style={{width: '50%'}}>
                        <Text style={styles.subtituloInfoRegistro}>Emisor:</Text>
                        <Text style={styles.textoInfoRegistro}>{salida.Usuario.nombre + " " + salida.Usuario.apellido_paterno}</Text>
                    </VStack>
                </HStack>
                <HStack spacing={10}>
                    <VStack style={{width: '50%'}}>
                        <Text style={styles.subtituloInfoRegistro}>Evento:</Text>
                        <Text style={styles.textoInfoRegistro}>{salida.Evento.nombre}</Text>
                    </VStack>
                </HStack>
                <Box>
                    <Text style={styles.subtituloInfoRegistro}>Observaciones: </Text>
                    <Text style={styles.textoInfoRegistro}>{salida.observaciones}</Text>
                </Box>
            </VStack>
        </Box>
    );
};

export default InfoSalida;