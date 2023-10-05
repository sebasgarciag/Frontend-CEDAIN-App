import {useState}  from 'react';
import entradasApi from '../../apis/entradasApi';

const useEntradaAlm = () => {

	const { getDetalles } = entradasApi();

    const [datosEntrada, setDatosEntrada] = useState([]);

	async function getDetallesEntrada(id) {
		const datosEntradaApi = await getDetalles(id);
		setDatosEntrada(datosEntradaApi);
	}

    return { datosEntrada, setDatosEntrada, getDetallesEntrada }
}

export default useEntradaAlm;