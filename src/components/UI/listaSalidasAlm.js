import React from "react";
import { Text, ScrollView } from "react-native";
import { HStack, VStack } from "@react-native-material/core";
import { ArrowButton } from "./uiButtons";
import styles from "../../assets/styles";
import { useNavigation } from '@react-navigation/native';
import { router } from "expo-router";

function ListaSalidasAlm({listadoSalidas}){

        const navigation = useNavigation();
        
        return(
            <ScrollView style={styles.listaMovs}>
                {listadoSalidas.map((salida)=>
                    <VStack spacing={10} >
                        <HStack style={styles.movItem} spacing={10} key={salida.idSalida}>
                            <VStack>
                                <Text style={styles.movName}>Salida: {salida.idSalida}</Text>
                                <Text style={styles.movDato}>Fecha: {salida.fecha}</Text>
                                <Text style={styles.movDato}>Articulos: {salida.cantidadArticulos}</Text>
                            </VStack>
                            
                            <ArrowButton navigation={navigation} path={"SalidaAlm"} />
                            
                        </HStack>
                    </VStack>
                )}
            </ScrollView>
        );
};

export default ListaSalidasAlm;