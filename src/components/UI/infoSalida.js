import React, { useEffect } from "react";
import { Text } from "react-native";
import { Box, HStack, VStack } from "@react-native-material/core";
import styles from "../../assets/styles";
import useSalidaAlm from "../../pages/salidaAlm/useSalidaAlm";
import uselistadoSalidasAlm from "../../pages/listadoSalidasAlm/useListadoSalidasAlm";

function InfoSalida({ salida }) { 

    const { evento, setEvento } = useSalidaAlm();
    const { eventos } = uselistadoSalidasAlm();

    useEffect(() => {
        setEvento(eventos.find((evento) => evento.id_evento === salida.id_evento));
    }, [salida]);

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
                        <Text style={styles.textoInfoRegistro}>{salida.Evento.descripcion}</Text>
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