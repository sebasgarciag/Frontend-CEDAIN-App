import {useState}  from 'react';

const useSalidaAdmin = () => {
    const [salida, setSalida] = useState({
            idSalida: 1,
            folioSerie: 'S2023-001',
            cantidadArticulos: 120,
            fecha: '15/08/2023',
            receptor: 'Adrian Chavez',
            emisor: 'Nacho Soto',
            comunidad: '',
            evento: 'Trueque Escolar',
            observaciones: 'Olia feo'
        });

    const [datosSalida, setDatosSalida] = useState([
        {
            producto: "Nombre Producto",
            cantidad: 0,    
            precio: 1,
            tamano: "mediano",
            importe: 50,
            foto: "C:/Users/Adrian/Desktop/CARRERA 5TO/SeguridadSistemasSoftware/Desarrollo/Frontend-CEDAIN-App/src/assets/imagenes/ware.jpg"
        },
        {
            producto: "Nombre Producto",
            cantidad: 0,
            precio: 2,
            tamano: "grande",
            importe: 50,
            foto: "C:/Users/Adrian/Desktop/CARRERA 5TO/SeguridadSistemasSoftware/Desarrollo/Frontend-CEDAIN-App/src/assets/imagenes/ware.jpg"
        },
        {
            producto: "Nombre Producto",
            cantidad: 0,
            precio: 3,
            tamano: "chico",
            importe: 50,
            foto: "C:/Users/Adrian/Desktop/CARRERA 5TO/SeguridadSistemasSoftware/Desarrollo/Frontend-CEDAIN-App/src/assets/imagenes/ware.jpg"
        },
        {
            producto: "Nombre Producto",
            cantidad: 0,
            precio: 4,
            tamano: "mediano",
            importe: 50,
            foto: "C:/Users/Adrian/Desktop/CARRERA 5TO/SeguridadSistemasSoftware/Desarrollo/Frontend-CEDAIN-App/src/assets/imagenes/ware.jpg"
        },
        {
            producto: "Nombre Producto",
            cantidad: 0,
            precio: 5,
            tamano: "grande",
            importe: 50,
            foto: "C:/Users/Adrian/Desktop/CARRERA 5TO/SeguridadSistemasSoftware/Desarrollo/Frontend-CEDAIN-App/src/assets/imagenes/ware.jpg"
        }
    
    ]);
/**
 * Updates the quantity of a given product in the datosSalida array.
 * 
 * Iterates over the `datosSalida` array and, when it finds the specified product,
 * it updates its quantity based on the provided `newCantidad`. If the new quantity
 * is not a valid number, it defaults to 0.
 * 
 * After processing, the function updates the state of `datosSalida`.
 *
 * @param {Object} producto - The product object to be updated.
 * @param {string|number} newCantidad - The new quantity value (can be a string to be parsed).
 * @returns {undefined} Nothing. Side-effect function that updates a state variable.
 */
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

   


    return { salida, datosSalida, handleCantidad }
}

export default useSalidaAdmin;