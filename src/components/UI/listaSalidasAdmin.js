import React from "react";
import { Text, ScrollView} from "react-native";
import { HStack, VStack } from "@react-native-material/core";
import { ArrowButton } from "./uiButtons";
import styles from "../../assets/styles";

function ListaSalidasAdmin({listadoSalidas}){
        return(
            <ScrollView style={styles.listaMovs}>
                {listadoSalidas.map((salida)=>
                    <VStack key={salida}>
                        <HStack style={styles.movItem} spacing={10}>
                            <VStack>
                                <Text style={styles.movName}>Salida: {salida.folioSerie}</Text>
                                <Text style={styles.movDato}>Fecha: {salida.fecha}</Text>
                                <Text style={styles.movDato}>Almacenista: {salida.almacenista}</Text>
                                <Text style={styles.movDato}>Articulos: {salida.cantidadArticulos}</Text>
                            </VStack>
                            <ArrowButton style={styles.arrowButton} onPress={() => { alert('Flecha presionada'); }} />
                            
                        </HStack>
                    </VStack>
                )}
            </ScrollView>
        );
};

export default ListaSalidasAdmin;