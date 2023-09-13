import React from "react";
import useSeleccion from "./hookSeleccionProducto";
import ListaProductos from "../../components/entradasSalidas/listaProductos";

const SeleccionProductos = () => { 

    const { productos, categorias } = useSeleccion();

    return (
        <ListaProductos productos={productos} categorias={categorias} />
    );
};

export default SeleccionProductos;