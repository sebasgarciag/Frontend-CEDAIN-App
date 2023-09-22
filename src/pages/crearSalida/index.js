import React from "react";
import useSeleccion from "./hookSeleccionProducto";
import ListaProductos from "../../components/entradasSalidas/listaProductos";
import BotonASC from "../../components/UI/BotonASC";

const SeleccionProductos = () => { 

    const { productos, categorias } = useSeleccion();

    return (
        <>
        <ListaProductos productos={productos} categorias={categorias} />
        <BotonASC textoBoton1={"Cancelar"} textoBoton2={"Siguiente"} direccion1={""} direccion2={"carrito"}/>
        </>
    );
};

export default SeleccionProductos;