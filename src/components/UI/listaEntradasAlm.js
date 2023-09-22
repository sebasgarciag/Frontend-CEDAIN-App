import React from "react";
import { Text, ScrollView} from "react-native";
import { HStack, VStack } from "@react-native-material/core";
import { ArrowButton } from "./uiButtons";
import styles from "../../assets/styles";

function ListaEntradasAlm({listadoEntradas}){
        return(
            <ScrollView style={styles.listaMovs}>
                {listadoEntradas.map((entrada)=>
                    <VStack spacing={10} key={entrada}>
                        <HStack style={styles.movItem} spacing={10}>
                            <VStack>
                                <Text style={styles.movName}>Entrada: {entrada.idEntrada}</Text>
                                <Text style={styles.movDato}>Fecha: {entrada.fecha}</Text>
                                <Text style={styles.movDato}>Articulos: {entrada.cantidadArticulos}</Text>
                            </VStack>
                            
                            <ArrowButton style={styles.arrowButton} onPress={() => { alert('Flecha presionada'); }} />
                            
                        </HStack>
                    </VStack>
                )}
            </ScrollView>
        );
};

export default ListaEntradasAlm;