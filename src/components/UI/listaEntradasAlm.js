import React from "react";
import { Text, ScrollView} from "react-native";
import { HStack, VStack } from "@react-native-material/core";
import { ArrowButtonConObject } from "./uiButtons";
import styles from "../../assets/styles";
import { useNavigation } from '@react-navigation/native';

function ListaEntradasAlm({ listadoEntradas }){

        const navigation = useNavigation();

        return(
            <ScrollView style={styles.listaMovs}>
                {listadoEntradas.map((entrada)=>
                    <VStack spacing={10} key={entrada.id_entrada}>
                        <HStack style={styles.movItem} spacing={10}>
                            <VStack>
                                <Text style={styles.movName}>Entrada: {entrada.id_entrada}</Text>
                                <Text style={styles.movDato}>Fecha: {entrada.fecha}</Text>
                                <Text style={styles.movDato}>Articulos: {entrada.cantidad}</Text>
                            </VStack>
                            
                            <ArrowButtonConObject navigation={navigation} path={"EntradaAlm"} object={entrada}/>
                            
                        </HStack>
                    </VStack>
                )}
            </ScrollView>
        );
};

export default ListaEntradasAlm;