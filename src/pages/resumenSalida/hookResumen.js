import { useState } from "react";
import { useNavigation } from "expo-router";
import salidasApi from "../../apis/salidasApi";
import inventarioApi from "../../apis/inventarioApi";

const useResumen = () => {
    const navigation = useNavigation();
    const { postSalida, postDetallesSalidas } = salidasApi();
    const {putActualizarExistencias} = inventarioApi();
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

    const [carrito, setCarrito] = useState([]);
/**
 * Asynchronously processes and finalizes a "salida" transaction by creating a new salida 
 * and its associated details.
 * 
 * The function constructs the salida object with the current date, series, and other parameters.
 * It then posts this salida and subsequently posts the details of the salida.
 * After successful transactions, it navigates to the 'Salidas' page.
 *
 * @async
 * @param {Object} salida - The main object containing the details for the salida.
 * @param {Array} detallesSalida - An array of product details associated with the salida.
 * @returns {undefined} Nothing. Side-effect function that updates a database and navigates pages.
 * @throws Will throw an error if any of the Axios POST operations fail.
 */
    async function terminar(salida, detallesSalida) {
        const date = new Date();
        const fechaActual = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
        const serie = date.getFullYear() + 'S';
        const salidaPost = {
            fecha: fechaActual,
            serie: serie,
            observaciones: salida.observaciones,
            id_usuario: salida.id_usuario,
            id_almacen: salida.id_almacen,
            receptor: salida.receptor,
            id_evento: salida.id_evento,
            facturar: 0,
            id_tipo_pago: salida.id_tipo_pago
        };
        // console.log('salidaPost', salidaPost);
        
        //console.log("Detalles Salida: ", detallesSalida);

        const id_almacen = salida.id_almacen;

        const salidaPut = detallesSalida.map(producto => ({
            id_almacen: id_almacen,
            id_producto: producto.detallesSalida.id_producto,
            cantidad: -1 * producto.detallesSalida.cantidad, // Multiplicación por -1 para hacerlo negativo
          }));
        
        try {
            const response = await postSalida(salidaPost);
            console.log('response', response.id_salida);
            const detallesPost = detallesSalida.map((detalle) => {
                console.log('detalle', detalle);
                return {
                    id_producto: detalle.id_producto,
                    cantidad: detalle.detallesSalida.cantidad,
                    id_salida: response.id_salida,
                    precio_unitario: detalle.detallesSalida.precio
                };
            });
            //console.log('detallesPost', detallesPost);

            const salidaId = response.id_salida;
            await postDetallesSalidas(detallesPost);

            //console.log("SalidaPut: ", salidaPut);

            await putActualizarExistencias(salidaPut);

            navigation.navigate('Salidas');
        } catch (error) {
            console.error('Error in terminar function: ' + error);
        }
    }

    return { salida, setSalida, carrito, setCarrito, terminar };
}

export default useResumen;