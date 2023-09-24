import React from "react";
import { Text, ScrollView} from "react-native";
import { HStack, VStack } from "@react-native-material/core";
import { ArrowButton } from "./uiButtons";
import styles from "../../assets/styles";
import { router } from 'expo-router';

function ListaEntradasAdmin({listadoEntradas}){
        return(
            <ScrollView style={styles.listaMovs} >
                {listadoEntradas.map((entrada)=>
                    <VStack spacing={10}>
                        <HStack style={styles.movItem} spacing={10}>
                            <VStack>
                                <Text style={styles.movName}>Entrada: {entrada.folioSerie}</Text>
                                <Text style={styles.movDato}>Fecha: {entrada.fecha}</Text>
                                <Text style={styles.movDato}>Almacenista: {entrada.almacenista}</Text>
                                <Text style={styles.movDato}>Articulos: {entrada.cantidadArticulos}</Text>
                            </VStack>
                            <ArrowButton style={styles.arrowButton} onPress={() => { router.replace("/entradaAdmin"); }} />
                        </HStack>
                    </VStack>
                )}
            </ScrollView>
        );
};

export default ListaEntradasAdmin;