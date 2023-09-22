import React from "react";
import useSeleccion from "./hookSeleccionProducto";
import ListaProductos from "../../components/entradasSalidas/listaProductos";
import { VolverButton } from "../../components/UI/uiButtons";
import { View } from "react-native";
import buttonStyles from "../../assets/buttons/styles";
import styles from "../../assets/styles";

const SeleccionProductos = () => { 

    const { productos, categorias } = useSeleccion();

    return (
        <View style={styles.container}>
            <ListaProductos productos={productos} categorias={categorias} />
            <View style={ buttonStyles.containerNavegacion }>
                <VolverButton path={""} />
                <VolverButton path={"carrito"} />
            </View>
        </View>
    );
};

export default SeleccionProductos;