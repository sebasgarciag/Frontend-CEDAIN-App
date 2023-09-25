import React from "react";
import { Text, ScrollView} from "react-native";
import { HStack, VStack } from "@react-native-material/core";
import { ArrowButton } from "./uiButtons";
import styles from "../../assets/styles";

function ListaProductos({listadoProductos}){
        return(
            <ScrollView style={styles.listaMovs} >
                {listadoProductos.map((entrada)=>
                    <VStack key={entrada}>
                        <HStack style={styles.movItem} spacing={10}>
                            <VStack>
                                <Text style={styles.movName}>Producto: {entrada.folioSerie}</Text>
                                <Text style={styles.movDato}>Fecha: {entrada.fecha}</Text>
                                <Text style={styles.movDato}>Almacenista: {entrada.almacenista}</Text>
                                <Text style={styles.movDato}>Cantidad: {entrada.cantidadArticulos}</Text>
                            </VStack>
                            <ArrowButton style={styles.arrowButton} onPress={() => { alert('Flecha presionada'); }} />
                        </HStack>
                    </VStack>
                )}
            </ScrollView>
        );
};

export default ListaProductos;