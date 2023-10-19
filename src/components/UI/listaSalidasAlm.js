import React from "react";
import { Text, ScrollView } from "react-native";
import { HStack, VStack } from "@react-native-material/core";
import { ArrowButtonConObject } from "./uiButtons";
import styles from "../../assets/styles";
import { useNavigation } from '@react-navigation/native';

function ListaSalidasAlm({listadoSalidas}){

        const navigation = useNavigation();
        
        return(
            <ScrollView style={styles.listaMovs}>
                {listadoSalidas.slice(0, 50).map((salida)=>
                    <VStack spacing={10} key={salida.id_salida}>
                        <HStack style={styles.movItem} spacing={10}>
                            <VStack>
                                <Text style={styles.movName}>Salida: {salida.id_salida}</Text>
                                <Text style={styles.movDato}>Fecha: {salida.fecha.slice(0, 16).replace('T', ' ')}</Text>
                            </VStack>
                            
                            <ArrowButtonConObject navigation={navigation} path={"SalidaAlm"} object={salida}/>
                            
                        </HStack>
                    </VStack>
                )}
            </ScrollView>
        );
};

export default ListaSalidasAlm;