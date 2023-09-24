import React from "react";
import useSeleccion from "./hookSeleccionProducto";
import ListaProductos from "../../components/entradasSalidas/listaProductos";
import { View } from "react-native";
import buttonStyles from "../../assets/buttons/styles";
import styles from "../../assets/styles";
import { useNavigation } from '@react-navigation/native';

const SeleccionProductos = () => { 
    const navigation = useNavigation();
    const { productos, categorias } = useSeleccion();

    return (
        <View style={styles.container}>

            <HStack style={styles.titulosContainer}>
                <Text style={styles.headerText}>Salida</Text>
            </HStack>

            <ListaProductos productos={productos} categorias={categorias} />
            <View style={ buttonStyles.containerNavegacion }>
                <VolverButtonN navigation={navigation} path={"Home"} />
                <SiguienteButtonN navigation={navigation} path={"Carrito"} />
            </View>
        </View>
    );
};

export default SeleccionProductos;