import { useState } from "react";

const useResumen = () => {
    const [salida, setSalida] = useState({
        fecha: '',
        folio: '',
        facturar: 0,
        serie : '',
        observaciones: '',
        id_usuario: 1, // TODO: cambiar por el usuario logeado
        id_almacen: 1, // TODO: cambiar por el almacen seleccionado
        receptor: '',
        id_evento: 0,
        id_tipo_pago: 1,
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

    // const [carrito, setCarrito] = useState([
    //     {
    //         Tamanio: {
    //             nombre: "mediano"
    //         },
    //         cantidad: 1,
    //         id_producto: 1,
    //         nombre: "producto1",
    //         precio_venta: 1
    //     }
    // ]);

    const [carrito, setCarrito] = useState([]);

    const [datosSalida, setDatosSalida] = useState([
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

    async function terminar(salida, detallesSalida) {
        try {
            const response = await api.postSalida(salida);
            const salidaId = response.data.id_salida;
            await api.postDetallesSalida(salidaId, detallesSalida);
        } catch (error) {
            console.error('Error in terminar function: ' + error);
        }
    }

    return { salida, setSalida, datosSalida, handleCantidad, carrito, setCarrito, terminar };
}

export default useResumen;