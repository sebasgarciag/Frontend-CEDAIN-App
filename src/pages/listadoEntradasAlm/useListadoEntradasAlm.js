import { useState, useEffect } from 'react';
import entradasApi from '../../apis/entradasApi';
import UsuariosAPI from '../../apis/usuariosApi';

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

    const [fechaInicial, setFechaInicial] = useState(new Date("2023-01-01"));
    const [fechaFinal, setFechaFinal] = useState(new Date());
    
    const { getAllEntradas } = entradasApi();
    const { getTodosUsuarios } = UsuariosAPI();

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

    const [usuarios, setUsuarios] = useState([]);

    const [usuarioSeleccionado, setUsuarioSeleccionado] = useState({});
 
    const filteredEntradas = entradas.filter((entrada) => {
        // const almacenistaMatch = entrada.id_usuario.includes(busqueda.toLowerCase());
        // const folioSerie = entrada.folio + entrada.serie;
        // const folioSerieMatch = folioSerie.toLowerCase().includes(busqueda.toLowerCase());
        // const comunidadMatch = entrada.id_comunidad.includes(busqueda.toLowerCase());

        const fechaMatch = new Date(entrada.fecha) >= fechaInicial && new Date(entrada.fecha) <= fechaFinal;

        console.log('fechaMatch', fechaMatch);
        
        const usuarioMatch = entrada.id_usuario === usuarioSeleccionado.id_usuario || usuarioSeleccionado.id_usuario === undefined;
        return usuarioMatch && fechaMatch;

        // return almacenistaMatch || folioSerieMatch || comunidadMatch;
    });

    async function getEntradas() {
        const entradasApi = await getAllEntradas();
        setEntradas(entradasApi.reverse());
    };

    async function getUsuarios() {
        const usuariosApi = await getTodosUsuarios();
        setUsuarios(usuariosApi.data);
    };

    useEffect(() => {
        getEntradas();
        getUsuarios();
    }, []);

   
    return { entradas, toggleDrawer, toggleUserDrawer, toggleModal, handlePress, setBusqueda, filteredEntradas, isDrawerOpen, isUserDrawerOpen, isModalVisible, setComValue, comValue, usuarios, usuarioSeleccionado, setUsuarioSeleccionado, fechaInicial, setFechaInicial, fechaFinal, setFechaFinal }
}

export default useListadoEntradasAlm;