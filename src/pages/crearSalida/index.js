import React from "react";
import useSeleccion from "./hookSeleccionProducto";
import ListaProductos from "../../components/entradasSalidas/listaProductos";
import { SiguienteButtonN, VolverButtonN } from "../../components/UI/uiButtons";
import { View, Text } from "react-native";
import buttonStyles from "../../assets/buttons/styles";
import styles from "../../assets/styles";
import { useNavigation } from '@react-navigation/native';
import useCurrentScreen from "../../components/UI/useCurrentScreen";
import { HStack } from "@react-native-material/core";

const SeleccionProductos = () => { 
    const navigation = useNavigation();
    const { productos, categorias } = useSeleccion();
    const { currentScreen, setScreen } = useCurrentScreen(); 

    return (
        <View style={styles.container}>

            <HStack style={styles.titulosContainer}>
                <Text style={styles.headerText}>Salida</Text>
            </HStack>

            <ListaProductos productos={productos} categorias={categorias} />
            <View style={ buttonStyles.containerNavegacion }>
                <VolverButtonN navigation={navigation} path={"Home"} setScreen={setScreen} screen={""}/>
                <SiguienteButtonN navigation={navigation} path={"Carrito"} setScreen={setScreen} screen={"Carrito"}/>
            </View>
        </View>
    );
};

export default SeleccionProductos;