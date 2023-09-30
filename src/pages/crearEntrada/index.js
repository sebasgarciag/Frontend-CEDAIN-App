import React from "react";
import useSeleccion from "./hookSeleccionProducto";
import ListaProductos from "../../components/entradasSalidas/listaProductos";
import { View, Text } from "react-native";
import { HStack } from "@react-native-material/core";
import buttonStyles from "../../assets/buttons/styles";
import styles from "../../assets/styles";
import { useNavigation } from '@react-navigation/native';
import { VolverButtonN, SiguienteButtonN } from "../../components/UI/uiButtons";
import useCurrentScreen from "../../components/UI/useCurrentScreen";

const SeleccionProductos = () => { 
    const navigation = useNavigation();
    const { productos, categorias } = useSeleccion();
    const {currentScreen,setScreen} = useCurrentScreen()

    return (
        <View style={styles.container}>

            <HStack style={styles.titulosContainer}>
                <Text style={styles.headerText}>Seleccionar Productos</Text>
            </HStack>

            <ListaProductos productos={productos} categorias={categorias} />
            <View style={ buttonStyles.containerNavegacion }>
                <VolverButtonN navigation={navigation} path={"Entradas"}/>
                <SiguienteButtonN navigation={navigation} path={"CarritoEntrada"}/>
            </View>
        </View>
    );
};

export default SeleccionProductos;