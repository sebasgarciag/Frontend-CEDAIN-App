import React from "react";
import { Text, ScrollView} from "react-native";
import { HStack, VStack } from "@react-native-material/core";
import { ArrowButton } from "./uiButtons";
import styles from "../../assets/styles";
import { useNavigation } from '@react-navigation/native';

function ListaEntradasAdmin({listadoEntradas}){

        const navigation = useNavigation();
        
        return(
            <ScrollView style={styles.listaMovs} >
                {listadoEntradas.map((entrada)=>
                    <VStack spacing={10} key={entrada.id_entrada}>
                        <HStack style={styles.movItem} spacing={10}>
                            <VStack>
                                <Text style={styles.movName}>Entrada: {entrada.folio + entrada.serie}</Text>
                                <Text style={styles.movDato}>Fecha: {entrada.fecha}</Text>
                                <Text style={styles.movDato}>Almacenista: {entrada.id_usuario}</Text>
                                <Text style={styles.movDato}>Articulos: {entrada.cantidad}</Text>
                            </VStack>
                            <ArrowButton navigation={navigation} path={"EntradaAdmin"} />
                        </HStack>
                    </VStack>
                )}
            </ScrollView>
        );
};

export default ListaEntradasAdmin;