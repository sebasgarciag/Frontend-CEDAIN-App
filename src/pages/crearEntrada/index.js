import React from "react";
import useSeleccion from "./hookSeleccionProducto";
import ListaProductos from "../../components/entradasSalidas/listaProductos";
import { View, Text } from "react-native";
import { HStack } from "@react-native-material/core";
import buttonStyles from "../../assets/buttons/styles";
import styles from "../../assets/styles";
import { useNavigation } from '@react-navigation/native';
import { VolverButtonN, SiguienteButtonNObject } from "../../components/UI/uiButtons";
import useCarritoEntradas from "../carritoEntradas/hookProductoCarritoEntradas";


const SeleccionProductos = () => { 
    const navigation = useNavigation();
    const { productos, categorias, entrada } = useSeleccion();
    const {carritoEntradas, handleCarrito} = useCarritoEntradas();

    return (
        <View style={styles.container}>

            <HStack style={styles.titulosContainer}>
                <Text style={styles.headerText}>Seleccionar Productos</Text>
            </HStack>

            <ListaProductos productos={productos} categorias={categorias} carrito={carritoEntradas} handleCarrito={handleCarrito}/>
            <View style={ buttonStyles.containerNavegacion }>
                <VolverButtonN navigation={navigation} path={"Inventario"}/>
                <SiguienteButtonNObject navigation={navigation} path={"CarritoEntrada"} object={{carritoEntradas, entrada}}/>
            </View>
        </View>
    );
};

export default SeleccionProductos;