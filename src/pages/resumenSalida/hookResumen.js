import { useState } from "react";

const useResumen = () => {
    const [salida, setSalida] = useState({
        receptor: "receptor1",
        emisor: "emisor1",
        comunidad: "comunidad1",
        evento: "evento1",
        observaciones: "observaciones1"
    });

    const [datosSalida, setDatosSalida] = useState([
        {
            producto: "producto1",
            cantidad: 0,    
            precio: 1,
            tamano: "mediano",
            foto: "C:/Users/alexi/Desktop/cedain/frontend/Frontend-CEDAIN-App/src/assets/imagenes/ware.jpg"
        },
        {
            producto: "producto2",
            cantidad: 0,
            precio: 2,
            tamano: "grande",
            foto: "C:/Users/alexi/Desktop/cedain/frontend/Frontend-CEDAIN-App/src/assets/imagenes/ware.jpg"
        },
        {
            producto: "producto3",
            cantidad: 0,
            precio: 3,
            tamano: "chico",
            foto: "C:/Users/alexi/Desktop/cedain/frontend/Frontend-CEDAIN-App/src/assets/imagenes/ware.jpg"
        },
        {
            producto: "producto4",
            cantidad: 0,
            precio: 4,
            tamano: "mediano",
            foto: "C:/Users/alexi/Desktop/cedain/frontend/Frontend-CEDAIN-App/src/assets/imagenes/ware.jpg"
        },
        {
            producto: "producto5",
            cantidad: 0,
            precio: 5,
            tamano: "grande",
            foto: "C:/Users/alexi/Desktop/cedain/frontend/Frontend-CEDAIN-App/src/assets/imagenes/ware.jpg"
        }
    
    ]);

    function handleCantidad(producto, newCantidad) {
        const newDatosSalida = datosSalida.map((datosSalida) => {
            if (datosSalida.producto === producto) {
                if (isNaN(parseInt(newCantidad))) {
                    newCantidad = 0;
                }
                return { ...datosSalida, cantidad: parseInt(newCantidad) };
            } else {
                return datosSalida;
            }
        });
        setDatosSalida(newDatosSalida);
    }

    return { salida, datosSalida, handleCantidad };
}

export default useResumen;