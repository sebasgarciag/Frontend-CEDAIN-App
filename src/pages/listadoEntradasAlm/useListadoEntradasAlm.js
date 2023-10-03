import {useState}  from 'react';
import entradasApi from '../../apis/entradasApi';
import salidasApi from '../../apis/salidasApi';

const useListadoEntradasAlm = () => {

    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const toggleDrawer = () => {setIsDrawerOpen(!isDrawerOpen);};
    const [isUserDrawerOpen, setIsUserDrawerOpen] = useState(false);
    const toggleUserDrawer = () => {setIsUserDrawerOpen(!isUserDrawerOpen);};
    const [isModalVisible, setIsModalVisible] = useState(false);
    const toggleModal = () => {setIsModalVisible(!isModalVisible);};
    const [expanded, setExpanded] = useState(true);
    const handlePress = () => setExpanded(!expanded);
  
    const [busqueda, setBusqueda]=useState('');
    const [comValue, setComValue] = useState('');
    
    const { getAllEntradasAlm } = entradasApi();

    const { getComunidades, getEventos } = salidasApi();

    const [entradas, setEntradas] = useState([
        {
            id_entrada: 1,
            folio: 'E2023-012',
            serie: 'aaa',
            id_usuario: 3,
            cantidad: 120,
            fecha: '15/08/2023',
            id_comunidad: 1
        },
    ]);

 
    const filteredEntradas = entradas.filter((entrada) =>{
        // const almacenistaMatch = entrada.id_usuario.includes(busqueda.toLowerCase());
        const folioSerie = entrada.folio + entrada.serie;
        const folioSerieMatch = folioSerie.toLowerCase().includes(busqueda.toLowerCase());
        // const comunidadMatch = entrada.id_comunidad.includes(busqueda.toLowerCase());
    
        // return almacenistaMatch || folioSerieMatch || comunidadMatch;
        return folioSerieMatch;
    });

    async function getEntradas() {
        // TODO: pasar almacenista como parametro
        const entradasApi = await getAllEntradasAlm(1);
        setEntradas(entradasApi);
        return;
    };

    const [comunidades, setComunidades] = useState([
        {
            id_comunidad: 1,
            nombre: 'Comunidad 1'
        },
    ]);
    const [eventos, setEventos] = useState([
        {
           id_evento: 1,
            nombre: 'Evento 1'
        },
    ]);

    async function getAllComunidades() {
        const comunidadesApi = await getComunidades();
        setComunidades(comunidadesApi);
    };

    async function getAllEventos() {
        const eventosApi = await getEventos();
        setEventos(eventosApi);
    };

   
    return { entradas, toggleDrawer, toggleUserDrawer, toggleModal, handlePress, setBusqueda, filteredEntradas, isDrawerOpen, isUserDrawerOpen, isModalVisible, setComValue,comValue, getEntradas, comunidades, eventos, getAllComunidades, getAllEventos}
}

export default useListadoEntradasAlm;