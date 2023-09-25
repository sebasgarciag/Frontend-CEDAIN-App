import React from "react";
import useSeleccion from "./hookSeleccionProducto";
import ListaProductos from "../../components/entradasSalidas/listaProductos";
<<<<<<< HEAD
import { View, Text } from "react-native";
import { HStack } from "@react-native-material/core";
import buttonStyles from "../../assets/buttons/styles";
import styles from "../../assets/styles";
import { useNavigation } from '@react-navigation/native';
import { VolverButtonN, SiguienteButtonN } from "../../components/UI/uiButtons";
import useCurrentScreen from "../../components/UI/useCurrentScreen";
=======
>>>>>>> main

const SeleccionProductos = () => { 

    const { productos, categorias } = useSeleccion();
<<<<<<< HEAD
    const {currentScreen,setScreen} = useCurrentScreen()

    return (
        <View style={styles.container}>

            <HStack style={styles.titulosContainer}>
                <Text style={styles.headerText}>Seleccionar Productos</Text>
            </HStack>

            <ListaProductos productos={productos} categorias={categorias} />
            <View style={ buttonStyles.containerNavegacion }>
                <VolverButtonN navigation={navigation} path={"Salidas"} setScreen={setScreen} screen={""}/>
                <SiguienteButtonN navigation={navigation} path={"Carrito"} setScreen={setScreen} screen={"Carrito"}/>
            </View>
        </View>
=======

    return (
        <ListaProductos productos={productos} categorias={categorias} />
>>>>>>> main
    );
};

export default SeleccionProductos;