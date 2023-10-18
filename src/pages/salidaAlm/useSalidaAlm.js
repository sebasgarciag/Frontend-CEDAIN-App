import {useState}  from 'react';
import salidasApi from '../../apis/salidasApi';

const useSalidaAlm = () => {

    const { getDetalles } = salidasApi();

    const [datosSalida, setDatosSalida] = useState([]);

    const [comunidad, setComunidad] = useState('');
    const [evento, setEvento] = useState('');
/**
 * Asynchronously fetches the details of a specific salida using its ID and updates
 * the state with the retrieved data.
 *
 * @async
 * @param {string|number} id - The ID of the salida for which the details are to be fetched.
 * @returns {undefined} Nothing. Side-effect function that updates a state variable.
 * @throws Will throw an error if the underlying API call fails.
 */
	async function getDetallesSalida(id) {
		const datosSalidaApi = await getDetalles(id);
		setDatosSalida(datosSalidaApi);
	};

    return { datosSalida, setDatosSalida, getDetallesSalida, comunidad, setComunidad, evento, setEvento }
}

export default useSalidaAlm;