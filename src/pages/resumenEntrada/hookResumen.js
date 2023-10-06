import { useState } from "react";

const useResumen = () => {
    const [entrada, setEntrada] = useState({
        fecha: '',
        folio: '',
        serie : '',
        observaciones: '',
        id_usuario: 1, // TODO: cambiar por el usuario logeado
        id_almacen: 1, // TODO: cambiar por el almacen seleccionado
        emisor: '',
        id_evento: 0,
        Comunidad: {
            id_comunidad: 1,
            nombre: 'HOLA'
        },
        Evento: {
            id_evento: 0,
            nombre: ''
        },
        Almacen: {
            id_almacen: 1,
            nombre: 'Creel'
        },
        Usuario: {
            nombre: 'hola', 
            apellido_paterno: 'si'
        },
    });

    const [carrito, setCarrito] = useState();

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

    return { entrada, setEntrada, datosEntrada, handleCantidad, carrito, setCarrito };
}

export default useResumen;
