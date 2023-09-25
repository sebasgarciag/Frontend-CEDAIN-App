import {useState}  from 'react';

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
    

    const [salidas, setSalidas] = useState([
        {
            idSalida: 1,
            folioSerie: 'S2023-012',
            almacenista: 'tomas',
            cantidadArticulos: 120,
            fecha: '15/08/2023',
            evento: 'wareton'
        }, 
        {
            idSalida: 2,
            folioSerie: 'S2023-011',
            almacenista: 'tomas',
            cantidadArticulos: 100,
            fecha: '21/05/2023',
            evento: 'escuela'
        }, 
        {
            idSalida: 3,
            folioSerie: 'S2023-010',
            almacenista: 'tomas',
            cantidadArticulos: 210,
            fecha: '26/08/2023',
            evento: 'escuela'
        }, 
        {
            idSalida: 4,
            folioSerie: 'S2023-009',
            almacenista: 'alexis',
            cantidadArticulos: 120,
            fecha: '27/09/2023',
            comunidad: 'wareton'
        },
        {
            idSalida: 5,
            folioSerie: 'S2023-012',
            almacenista: 'tomas',
            cantidadArticulos: 120,
            fecha: '15/08/2023',
            evento: 'wareton'
        }, 
        {
            idSalida: 6,
            folioSerie: 'S2023-011',
            almacenista: 'tomas',
            cantidadArticulos: 100,
            fecha: '21/05/2023',
            evento: 'escuela'
        }, 
        {
            idSalida: 7,
            folioSerie: 'S2023-010',
            almacenista: 'tomas',
            cantidadArticulos: 210,
            fecha: '26/08/2023',
            evento: 'escuela'
        }, 
        {
            idSalida: 8,
            folioSerie: 'S2023-009',
            almacenista: 'alexis',
            cantidadArticulos: 120,
            fecha: '27/09/2023',
            comunidad: 'wareton'
        },
        {
            idSalida: 9,
            folioSerie: 'S2023-012',
            almacenista: 'tomas',
            cantidadArticulos: 120,
            fecha: '15/08/2023',
            evento: 'wareton'
        }, 
        {
            idSalida: 10,
            folioSerie: 'S2023-011',
            almacenista: 'tomas',
            cantidadArticulos: 100,
            fecha: '21/05/2023',
            evento: 'escuela'
        }, 
        {
            idSalida: 11,
            folioSerie: 'S2023-010',
            almacenista: 'tomas',
            cantidadArticulos: 210,
            fecha: '26/08/2023',
            evento: 'escuela'
        }, 
        {
            idSalida: 12,
            folioSerie: 'S2023-009',
            almacenista: 'alexis',
            cantidadArticulos: 120,
            fecha: '27/09/2023',
            evento: 'wareton'
        },


    ]);
 
    const filteredSalidas = salidas.filter((salida) =>{
        const almacenistaMatch = (salida.almacenista || '').toLowerCase().includes(busqueda.toLowerCase());
        const folioSerieMatch = (salida.folioSerie || '').toLowerCase().includes(busqueda.toLowerCase());
        const eventoMatch = (salida.evento || '').toLowerCase().includes(busqueda.toLowerCase());
    
        return almacenistaMatch || folioSerieMatch || eventoMatch;
    
    });

   
    return {toggleDrawer, toggleUserDrawer, toggleModal, handlePress, setBusqueda, filteredSalidas, isDrawerOpen, isUserDrawerOpen, isModalVisible, setAlmValue, setAlmValue, almValue, setEveValue, eveValue}
}

export default useListadoSalidasAdmin;