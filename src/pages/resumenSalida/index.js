import React from "react";
import { Text } from "react-native";
import { Box, HStack, VStack } from "@react-native-material/core";
import useResumen from "./hookResumen";
import CuadroSalida from "../../components/entradasSalidas/cuadroResumen";

const ResumenSalida = () => { 

    const salida = useResumen();

    return (
        <VStack style={{ padding: 10, borderRadius: 10 }} spacing={10}>
            <Box style={{ backgroundColor: "black", padding: 10}}>
                <Text style={{ color: "white", fontSize: 20 }}>Resumen de salida</Text>
            </Box>
            <CuadroSalida salida={salida} />
        </VStack>
    );
};

export default ResumenSalida;