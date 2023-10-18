import { useState } from "react";
import entradasApi from "../../apis/entradasApi";
import { useNavigation } from "expo-router";
import inventarioApi from "../../apis/inventarioApi";

/**
 * Hook personalizado para manejar la lógica y el estado del resumen de entrada.
 * 
 * Proporciona estado y funciones para gestionar una entrada específica y su 
 * respectivo carrito de productos, así como la funcionalidad para finalizar una entrada.
 * 
 * @returns {Object} 
 * @property {Object} entrada - Detalles de la entrada.
 * @property {Function} setEntrada - Función para actualizar los detalles de la entrada.
 * @property {Array} carrito - Lista de productos asociados.
 * @property {Function} setCarrito - Función para actualizar la lista de productos.
 * @property {Function} terminar - Función para finalizar y registrar una entrada en la base de datos.
 */

const useResumen = () => {
    const navigation = useNavigation();
    const { postEntrada, postDetallesEntrada } = entradasApi(); // TODO: cambiar por el api de entradas
    const {putActualizarExistencias} = inventarioApi();
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

    const [carrito, setCarrito] = useState([]);

    /**
     * Función para finalizar y registrar una entrada en la base de datos.
     * 
     * @param {Object} entrada - Detalles de la entrada.
     * @param {Array} detallesEntrada - Lista de productos asociados.
     */
    async function terminar(entrada, detallesEntrada) {
        const date = new Date();
        const fechaActual = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
        const serie = date.getFullYear() + 'E';
        console.log('entrada', entrada)
        const entradaPost = {
            fecha: fechaActual,
            serie: serie,
            observaciones: entrada.observaciones,
            id_usuario: entrada.id_usuario,
            id_almacen: entrada.id_almacen,
            emisor: entrada.emisor,
            id_evento: entrada.id_evento,
            id_comunidad: entrada.id_comunidad
        };

        const id_almacen = entrada.id_almacen;

        //console.log("Detalles Entrada: ", detallesEntrada);

        const entradaPut = detallesEntrada.map(producto => ({
            id_almacen: id_almacen,
            id_producto: producto.detallesEntrada.id_producto,
            cantidad: producto.detallesEntrada.cantidad, // Multiplicación por -1 para hacerlo negativo
          }));

        console.log('entradaPost', entradaPost);
        try {
            const response = await postEntrada(entradaPost);


            const detallesPost = detallesEntrada.map((detalle) => {
                console.log('detalle', detalle);
                return {
                    id_entrada: response.id_entrada,
                    id_producto: detalle.id_producto,
                    cantidad: detalle.detallesEntrada.cantidad,
                    precio_unitario: detalle.detallesEntrada.precio
                };
            });

            //console.log('detallesPost', detallesPost);

            const entradaId = response.id_entrada;
            await postDetallesEntrada(entradaId, detallesPost);

            //console.log("Entrada Put: ", entradaPut);

            await putActualizarExistencias(entradaPut);

            navigation.navigate('Entradas');
        } catch (error) {
            console.error('Error in terminar function: ' + error);
        }
    }

    return { entrada, setEntrada, carrito, setCarrito, terminar };
}

export default useResumen;
