import {useState}  from 'react';
import entradasApi from '../../apis/entradasApi';


/**
 * `useEntradaAlm` es un hook personalizado diseñado para gestionar y interactuar con 
 * las entradas de un almacén utilizando las funciones proporcionadas por `entradasApi`.
 * 
 * Este hook centraliza la lógica y el estado relacionados con la obtención 
 * de detalles específicos de las entradas del almacén.
 * 
 * @returns {Object} 
 * @property {Array} datosEntrada - Un array que contiene los detalles de una entrada específica.
 * @property {Function} setDatosEntrada - Función para actualizar los detalles almacenados en `datosEntrada`.
 * @property {Function} getDetallesEntrada - Función para obtener y almacenar en el estado los detalles 
 *                                           de una entrada específica usando su ID.
 */
const useEntradaAlm = () => {
	// Desestructuramos la función getDetalles de entradasApi.
	const { getDetalles } = entradasApi();

	// Estado que almacena los detalles de una entrada específica.
    const [datosEntrada, setDatosEntrada] = useState([]);
	
    /**
     * Función que utiliza la API para obtener los detalles de una entrada específica 
     * usando su ID y luego actualiza el estado `datosEntrada` con estos detalles.
     * 
     * @param {number} id - ID de la entrada para la cual obtener detalles.
     */
	async function getDetallesEntrada(id) {
		const datosEntradaApi = await getDetalles(id);
		setDatosEntrada(datosEntradaApi);
	}

    return { datosEntrada, setDatosEntrada, getDetallesEntrada }
}

export default useEntradaAlm;