import {useState}  from 'react';
import salidasApi from '../../apis/salidasApi';
import { useEffect } from 'react';

const useListadoSalidasAlm = () => {

    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const toggleDrawer = () => {setIsDrawerOpen(!isDrawerOpen);};
    const [isUserDrawerOpen, setIsUserDrawerOpen] = useState(false);
    const toggleUserDrawer = () => {setIsUserDrawerOpen(!isUserDrawerOpen);};
    const [isModalVisible, setIsModalVisible] = useState(false);
    const toggleModal = () => {setIsModalVisible(!isModalVisible);};
    const [expanded, setExpanded] = useState(true);
    const handlePress = () => setExpanded(!expanded);
  
    const [busqueda, setBusqueda]=useState('');
    const [almValue, setAlmValue] = useState('');
    const [eveValue, setEveValue] = useState('');
    
    const { getAllSalidasAlm } = salidasApi();

    const [salidas, setSalidas] = useState([
        {
            id_salida: 1,
            folio: 'a',
            serie: 'b',
            id_usuario: 1,
            cantidad: 20,
            fecha: '2020',
            id_evento: '4'
        }
    ]);
/**
 * Filters the salidas based on a search query. The filter checks if the concatenated value 
 * of 'folio' and 'serie' includes the search query.
 * 
 * @constant
 * @type {Array}
 */
const filteredSalidas = salidas.filter((salida) => {
    const folioSerie = salida.folio + salida.serie;
    const folioSerieMatch = (folioSerie || '').toLowerCase().includes(busqueda.toLowerCase());
    return folioSerieMatch;
});

/**
 * Asynchronously fetches all salidas for a specific almacenista and updates the state 
 * with the retrieved salidas, sorted in reverse order.
 * Note: The hardcoded '1' as a parameter will be replaced with a dynamic almacenista ID later.
 * 
 * @async
 * @returns {undefined} Nothing. Side-effect function that updates state.
 */
async function getSalidas() {
    const salidasApi = await getAllSalidasAlm(1);
    setSalidas(salidasApi.reverse());
}

/**
 * Hook to initialize salidas when the component mounts.
 */
useEffect(() => {
    getSalidas();
}, []);

   
    return {toggleDrawer, toggleUserDrawer, toggleModal, handlePress, setBusqueda, filteredSalidas, isDrawerOpen, isUserDrawerOpen, isModalVisible, setAlmValue, almValue, setEveValue, eveValue, getSalidas }
}

export default useListadoSalidasAlm;