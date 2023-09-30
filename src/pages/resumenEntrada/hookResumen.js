import { useState } from "react";

const useResumen = () => {
    const [entrada, setEntrada] = useState({
        idSalida: 1,
        folioSerie: "folio1",
        receptor: "receptor1",
        emisor: "emisor1",
        comunidad: "comunidad1",
        evento: "evento1",
        observaciones: "observaciones1"
    });

    const [datosEntrada, setDatosEntrada] = useState([
        {
            producto: "producto1",
            cantidad: 0,    
            precio: 1,
            tamano: "mediano",
            foto: "../../assets/imagenes/ware.jpg"
        },
        {
            producto: "producto2",
            cantidad: 0,
            precio: 2,
            tamano: "grande",
            foto: "../../assets/imagenes/ware.jpg"
        },
        {
            producto: "producto3",
            cantidad: 0,
            precio: 3,
            tamano: "chico",
            foto: "../../assets/imagenes/ware.jpg"
        },
        {
            producto: "producto4",
            cantidad: 0,
            precio: 4,
            tamano: "mediano",
            foto: "../../assets/imagenes/ware.jpg"
        },
        {
            producto: "producto5",
            cantidad: 0,
            precio: 5,
            tamano: "grande",
            foto: "../../assets/imagenes/ware.jpg"
        }
    
    ]);

    function handleCantidad(producto, newCantidad) {
        const newDatos = datosEntrada.map((datosEntrada) => {
            if (datosEntrada.producto === producto) {
                if (isNaN(parseInt(newCantidad))) {
                    newCantidad = 0;
                }
                return { ...datosEntrada, cantidad: parseInt(newCantidad) };
            } else {
                return datosEntrada;
            }
        });
        setDatosEntrada(newDatos);
    }

    return { entrada, datosEntrada, handleCantidad };
}

export default useResumen;