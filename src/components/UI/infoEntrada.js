import React, { useEffect } from "react";
import { Text } from "react-native";
import { Box, HStack, VStack } from "@react-native-material/core";
import styles from "../../assets/styles";
import useEntradaAlm from "../../pages/entradaAlm/useEntradaAlm";
import useListadoEntradasAlm from "../../pages/listadoEntradasAlm/useListadoEntradasAlm";

function InfoEntrada({ entrada }) { 

    const { comunidad, evento, setComunidad, setEvento } = useEntradaAlm();
    const { comunidades, eventos } = useListadoEntradasAlm();

    useEffect(() => {
        setComunidad(comunidades.find((comunidad) => comunidad.id_comunidad === entrada.id_comunidad));
        setEvento(eventos.find((evento) => evento.id_evento === entrada.id_evento));
    }, [entrada]);

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
                        <Text style={styles.textoInfoRegistro}>{entrada.Evento.descripcion}</Text>
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