import React from "react";
import { Text } from "react-native";
import { Box, HStack, VStack } from "@react-native-material/core";
import styles from "../../assets/styles";

function InfoEntrada({ entrada }) { 

    return (
        <Box style={styles.cuandroInfoRegistro}>
            <VStack style={{ margin: 5 }}>
                <HStack spacing={10}>
                    <VStack style={{width: '50%'}}>
                        <Text style={styles.subtituloInfoRegistro}>Receptor:</Text>
                        <Text style={styles.textoInfoRegistro}>{entrada.Usuario.nombre + " " + entrada.Usuario.apellido_paterno}</Text>
                    </VStack>
                    <VStack style={{width: '50%'}}>
                        <Text style={styles.subtituloInfoRegistro}>Emisor:</Text>
                        <Text style={styles.textoInfoRegistro}>{entrada.emisor}</Text>
                    </VStack>
                </HStack>
                <HStack spacing={10}>
                    <VStack style={{width: '50%'}}>
                        <Text style={styles.subtituloInfoRegistro}>Comunidad:</Text>
                        <Text style={styles.textoInfoRegistro}>{entrada.Comunidad.nombre}</Text>
                    </VStack>
                    <VStack style={{width: '50%'}}>
                        <Text style={styles.subtituloInfoRegistro}>Evento:</Text>
                        <Text style={styles.textoInfoRegistro}>{entrada.Evento.nombre}</Text>
                    </VStack>
                </HStack>
                <Box>
                    <Text style={styles.subtituloInfoRegistro}>Observaciones: </Text>
                    <Text style={styles.textoInfoRegistro}>{entrada.observaciones}</Text>
                </Box>
            </VStack>
        </Box>
    );
};

export default InfoEntrada;