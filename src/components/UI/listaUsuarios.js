import React from "react";
import { Text, ScrollView} from "react-native";
import { HStack, VStack } from "@react-native-material/core";
import { ArrowButtonConObject } from "./uiButtons";
import styles from "../../assets/styles";
import { useNavigation } from '@react-navigation/native';

function ListaUsuarios({listadoUsuarios}){  
    const navigation = useNavigation();
        return(
            <ScrollView style={styles.listaMovs}>
                {listadoUsuarios.map((usuario)=>
                    <VStack spacing={10} key={usuario.id_usuario}>
                        <HStack style={styles.movItem} spacing={10}>
                            <VStack>
                                <Text style={styles.movName}>{usuario.nombre}</Text>
                                <Text style={styles.movDato}>Email: {usuario.correo}</Text>
                                <Text style={styles.movDato}>Rol: {usuario.tipo}</Text>
                            </VStack>
                            
                            <ArrowButtonConObject navigation={navigation} path={"editarUsuario"} object={usuario} />
                            
                        </HStack>
                    </VStack>
                )}
            </ScrollView>
        );
};

export default ListaUsuarios;