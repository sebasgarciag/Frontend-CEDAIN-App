import React from "react";
import { Text, ScrollView} from "react-native";
import { HStack, VStack } from "@react-native-material/core";
import { ArrowButton } from "./uiButtons";
import styles from "../../assets/styles";

function ListaUsuarios({listadoUsuarios}){
        return(
            <ScrollView style={styles.listaMovs}>
                {listadoUsuarios.map((usuario)=>
                    <VStack spacing={10} key={usuario.nombreCompleto}>
                        <HStack style={styles.movItem} spacing={10}>
                            <VStack>
                                <Text style={styles.movName}>{usuario.nombreCompleto}</Text>
                                <Text style={styles.movDato}>Email: {usuario.email}</Text>
                                <Text style={styles.movDato}>Rol: {usuario.rol}</Text>
                            </VStack>
                            
                            <ArrowButton style={styles.arrowButton} onPress={() => { alert('Flecha presionada'); }} />
                            
                        </HStack>
                    </VStack>
                )}
            </ScrollView>
        );
};

export default ListaUsuarios;