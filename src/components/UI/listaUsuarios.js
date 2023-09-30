import React from "react";
import { Text, ScrollView} from "react-native";
import { HStack, VStack } from "@react-native-material/core";
import { ArrowButton } from "./uiButtons";
import styles from "../../assets/styles";

function ListaUsuarios({listadoUsuarios}){
        return(
            <ScrollView style={styles.listaMovs}>
                {listadoUsuarios.map((usuario)=>
                    <VStack spacing={10} key={usuario.nombre}>
                        <HStack style={styles.movItem} spacing={10}>
                            <VStack>
                                <Text style={styles.movName}>{usuario.nombre}</Text>
                                <Text style={styles.movDato}>Email: {usuario.tipo}</Text>
                                <Text style={styles.movDato}>Rol: {usuario.id_almacen}</Text>
                            </VStack>
                            
                            <ArrowButton style={styles.arrowButton} onPress={() => { alert('Flecha presionada'); }} />
                            
                        </HStack>
                    </VStack>
                )}
            </ScrollView>
        );
};

export default ListaUsuarios;