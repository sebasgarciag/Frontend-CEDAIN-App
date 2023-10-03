import {useState}  from 'react';
import salidasApi from '../../apis/salidasApi';

const useSalidaAlm = () => {

    const { getDetalles } = salidasApi();

    const [datosSalida, setDatosSalida] = useState([]);

    const [comunidad, setComunidad] = useState('');
    const [evento, setEvento] = useState('');

	async function getDetallesSalida(id) {
		const datosSalidaApi = await getDetalles(id);
		setDatosSalida(datosSalidaApi);
	};

    return { datosSalida, setDatosSalida, getDetallesSalida, comunidad, setComunidad, evento, setEvento }
}

export default useSalidaAlm;