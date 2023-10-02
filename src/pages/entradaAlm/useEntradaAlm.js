import {useState}  from 'react';
import entradasApi from '../../apis/entradasApi';

const useEntradaAlm = () => {

	const { getDetalles } = entradasApi();

    const [datosEntrada, setDatosEntrada] = useState([]);

    const [comunidad, setComunidad] = useState('');
    const [evento, setEvento] = useState('');

	async function getDetallesEntrada(id) {
		const datosEntradaApi = await getDetalles(id);
		setDatosEntrada(datosEntradaApi);
	}

    return { datosEntrada, setDatosEntrada, getDetallesEntrada, comunidad, setComunidad, evento, setEvento }
}

export default useEntradaAlm;