import {useState}  from 'react';
import entradasApi from '../../apis/entradasApi';

const useListadoEntradasAdmin = () => {

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
    const [comValue, setComValue] = useState('');
    
    const { getAllEntradas } = entradasApi();

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
        const entradasApi = await getAllEntradas();
        setEntradas(entradasApi);
        return;
    };

   
    return { entradas, toggleDrawer, toggleUserDrawer, toggleModal, handlePress, setBusqueda, filteredEntradas, isDrawerOpen, isUserDrawerOpen, isModalVisible, setAlmValue, setComValue, almValue, comValue, getEntradas}
}

export default useListadoEntradasAdmin;