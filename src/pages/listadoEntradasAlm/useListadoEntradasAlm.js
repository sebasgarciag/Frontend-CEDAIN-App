import { useState, useEffect } from 'react';
import entradasApi from '../../apis/entradasApi';
import UsuariosAPI from '../../apis/usuariosApi';
import { useIsFocused } from '@react-navigation/core';

const useListadoEntradasAlm = () => {

    const isFocused = useIsFocused();

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

    const [almacenes, setAlmacenes] = useState([
        {
            id_almacen: 1,
            nombre: 'Central',
            ciudad: 'Chihuahua'
        },
        {
            id_almacen: 2,
            nombre: 'Central',
            ciudad: 'Creel'
        }
    ]);

    const [almacenSeleccionado, setAlmacenSeleccionado] = useState({});
 
    const filteredEntradas = entradas.filter((entrada) => {
        const fechaMatch = new Date(entrada.fecha) >= fechaInicial && new Date(entrada.fecha) <= fechaFinal;
        const usuarioMatch = entrada.id_usuario === usuarioSeleccionado.id_usuario || usuarioSeleccionado.id_usuario === undefined;
        const almacenMatch = entrada.id_almacen === almacenSeleccionado.id_almacen || almacenSeleccionado.id_almacen === undefined;
        return usuarioMatch && fechaMatch && almacenMatch;
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
        getUsuarios();
    }, []);

    useEffect(() => {
        if (isFocused) {
            console.log('==============================================');
            getEntradas();
        }
    }, [isFocused]);
   
    return { entradas, toggleDrawer, toggleUserDrawer, toggleModal, handlePress, setBusqueda, filteredEntradas, isDrawerOpen, isUserDrawerOpen, isModalVisible, setComValue, comValue, usuarios, usuarioSeleccionado, setUsuarioSeleccionado, fechaInicial, setFechaInicial, fechaFinal, setFechaFinal, almacenes, almacenSeleccionado, setAlmacenSeleccionado }
}

export default useListadoEntradasAlm;