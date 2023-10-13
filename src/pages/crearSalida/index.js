import React from "react";
import useSeleccion from "./hookSeleccionProducto";
import ListaProductos from "../../components/entradasSalidas/listaProductos";
import { View, Text } from "react-native";
import { HStack } from "@react-native-material/core";
import buttonStyles from "../../assets/buttons/styles";
import styles from "../../assets/styles";
import { useNavigation } from '@react-navigation/native';
import { VolverButtonNDirect, SiguienteButtonNObject } from "../../components/UI/uiButtons";
import useCurrentScreen from "../../components/UI/useCurrentScreen";
import useCarrito from "../carrito/hookProductoCarrito";

const SeleccionProductos = () => { 
    const navigation = useNavigation();
    const { productos, categorias, salida } = useSeleccion();
    const {carrito, handleCarrito } = useCarrito();

    return (
        <View style={styles.container}>

            <HStack style={styles.titulosContainer}>
                <Text style={styles.headerText}>Seleccionar Productos</Text>
            </HStack>

            <ListaProductos productos={productos} categorias={categorias} carrito={carrito} handleCarrito={handleCarrito}/>
            <View style={ buttonStyles.containerNavegacion }>
                <VolverButtonNDirect navigation={navigation} />
                <SiguienteButtonNObject navigation={navigation} path={"Carrito"} object={{carrito, salida}}/>
            </View>
        </View>
    );
};

export default SeleccionProductos;