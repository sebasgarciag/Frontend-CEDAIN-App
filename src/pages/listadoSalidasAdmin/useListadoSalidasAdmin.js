import {useState}  from 'react';
import salidasApi from '../../apis/salidasApi';

const useListadoSalidasAdmin = () => {

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
    
    const { getAllSalidas } = salidasApi();

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
 
    const filteredSalidas = salidas.filter((salida) =>{
        // const almacenistaMatch = (salida.id_usuario || '').includes(busqueda.toLowerCase());
        const folioSerie = salida.folio + salida.serie;
        const folioSerieMatch = (folioSerie || '').toLowerCase().includes(busqueda.toLowerCase());
        // const eventoMatch = (salida.id_evento || '').includes(busqueda.toLowerCase());
    
        // return almacenistaMatch || folioSerieMatch || eventoMatch;
        return folioSerieMatch;
    });

    async function getSalidas() {
        // TODO: pasar id de almacenista
        const salidasApi = await getAllSalidas();
        setSalidas(salidasApi);
        return;
    };

   
    return {toggleDrawer, toggleUserDrawer, toggleModal, handlePress, setBusqueda, filteredSalidas, isDrawerOpen, isUserDrawerOpen, isModalVisible, setAlmValue, setAlmValue, almValue, setEveValue, eveValue, getSalidas}
}

export default useListadoSalidasAdmin;