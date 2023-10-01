import React from "react";
import { Text, ScrollView} from "react-native";
import { HStack, VStack } from "@react-native-material/core";
import { ArrowButton } from "./uiButtons";
import styles from "../../assets/styles";
import { useNavigation } from '@react-navigation/native';


function ListaSalidasAdmin({listadoSalidas}){

        const navigation = useNavigation();
        
        return(
            <ScrollView style={styles.listaMovs}>
                {listadoSalidas.map((salida)=>
                    <VStack spacing={10}>
                        <HStack style={styles.movItem} spacing={10} key={salida.id_salida}>
                            <VStack>
                                <Text style={styles.movName}>Salida: {salida.folio + salida.serie}</Text>
                                <Text style={styles.movDato}>Fecha: {salida.fecha}</Text>
                                <Text style={styles.movDato}>Almacenista: {salida.id_usuario}</Text>
                                <Text style={styles.movDato}>Articulos: {salida.cantidad}</Text>
                            </VStack>
                            <ArrowButton navigation={navigation} path={"SalidaAdmin"} />

                            
                        </HStack>
                    </VStack>
                )}
            </ScrollView>
        );
};

export default ListaSalidasAdmin;