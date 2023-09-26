import React from "react";
import { Text, ScrollView} from "react-native";
import { HStack, VStack } from "@react-native-material/core";
import { ArrowButton } from "./uiButtons";
import styles from "../../assets/styles";
import { router } from "expo-router";
import { useNavigation } from '@react-navigation/native';


function ListaSalidasAdmin({listadoSalidas}){

        const navigation = useNavigation();
        
        return(
            <ScrollView style={styles.listaMovs}>
                {listadoSalidas.map((salida)=>
                    <VStack spacing={10}>
                        <HStack style={styles.movItem} spacing={10}>
                            <VStack>
                                <Text style={styles.movName}>Salida: {salida.folioSerie}</Text>
                                <Text style={styles.movDato}>Fecha: {salida.fecha}</Text>
                                <Text style={styles.movDato}>Almacenista: {salida.almacenista}</Text>
                                <Text style={styles.movDato}>Articulos: {salida.cantidadArticulos}</Text>
                            </VStack>
                            <ArrowButton navigation={navigation} path={"SalidaAdmin"} />

                            
                        </HStack>
                    </VStack>
                )}
            </ScrollView>
        );
};

export default ListaSalidasAdmin;