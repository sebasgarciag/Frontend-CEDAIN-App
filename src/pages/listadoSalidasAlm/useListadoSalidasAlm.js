import { useState, useEffect }  from 'react';
import salidasApi from '../../apis/salidasApi';
import { useEffect } from 'react';
import UsuariosAPI from '../../apis/usuariosApi';

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

    const [fechaInicial, setFechaInicial] = useState(new Date("2023-01-01"));
    const [fechaFinal, setFechaFinal] = useState(new Date());
    
    const { getAllSalidas } = salidasApi();
    const { getTodosUsuarios } = UsuariosAPI();

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

    const [usuarios, setUsuarios] = useState([]);
    
    const [usuarioSeleccionado, setUsuarioSeleccionado] = useState({});

/**
 * Filters the salidas based on a search query. The filter checks if the concatenated value 
 * of 'folio' and 'serie' includes the search query.
 * 
 * @constant
 * @type {Array}
 */
const filteredSalidas = salidas.filter((salida) => {
    // const folioSerie = salida.folio + salida.serie;
    // const folioSerieMatch = (folioSerie || '').toLowerCase().includes(busqueda.toLowerCase());
    // return folioSerieMatch;

    const fechaMatch = new Date(salida.fecha) >= fechaInicial && new Date(salida.fecha) <= fechaFinal;
    const usuarioMatch = salida.id_usuario === usuarioSeleccionado.id_usuario || usuarioSeleccionado.id_usuario === undefined;
    
    return usuarioMatch && fechaMatch;
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
    const salidasApi = await getAllSalidas();
    setSalidas(salidasApi.reverse());
}

async function getUsuarios() {
    const usuariosApi = await getTodosUsuarios();
    setUsuarios(usuariosApi.data);
};

/**
 * Hook to initialize salidas when the component mounts.
 */
useEffect(() => {
    getSalidas();
    getUsuarios();
}, []);

   
    return {toggleDrawer, toggleUserDrawer, toggleModal, handlePress, setBusqueda, filteredSalidas, isDrawerOpen, isUserDrawerOpen, isModalVisible, setAlmValue, almValue, setEveValue, eveValue, usuarios, usuarioSeleccionado, setUsuarioSeleccionado, fechaInicial, setFechaInicial, fechaFinal, setFechaFinal }
}

export default useListadoSalidasAlm;