import {useState}  from 'react';

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
    

    const [entradas, setEntradas] = useState([
        {
            idEntrada: 1,
            folioSerie: 'E2023-012',
            almacenista: 'tomas',
            cantidadArticulos: 120,
            fecha: '15/08/2023',
            comunidad: 'Creel'
        }, 
        {
            idEntrada: 2,
            folioSerie: 'E2023-011',
            almacenista: 'tomas',
            cantidadArticulos: 100,
            fecha: '21/05/2023',
            comunidad: 'Creel'
        }, 
        {
            idEntrada: 3,
            folioSerie: 'E2023-010',
            almacenista: 'tomas',
            cantidadArticulos: 210,
            fecha: '26/08/2023',
            comunidad: 'Batopilas'
        }, 
        {
            idEntrada: 4,
            folioSerie: 'E2023-009',
            almacenista: 'alexis',
            cantidadArticulos: 120,
            fecha: '27/09/2023',
            comunidad: 'Batopilas'
        },
        {
            idEntrada: 5,
            folioSerie: 'E2023-008',
            almacenista: 'alexis',
            cantidadArticulos: 60,
            fecha: '05/08/2023',
            comunidad: 'Batopilas'
        },
        {
            idEntrada: 6,
            folioSerie: 'E2023-007',
            almacenista: 'tomas',
            cantidadArticulos: 40,
            fecha: '05/09/2023',
            comunidad: 'Batopilas',
        },
        {
            idEntrada: 7,
            folioSerie: 'E2023-012',
            almacenista: 'alexis',
            cantidadArticulos: 120,
            fecha: '15/08/2023',
            comunidad: 'Batopilas',
        }, 
        {
            idEntrada: 8,
            folioSerie: 'E2023-011',
            almacenista: 'tomas',
            cantidadArticulos: 100,
            fecha: '21/05/2023',
            comunidad: 'Batopilas'
        }, 
        {
            idEntrada: 9,
            folioSerie: 'E2023-010',
            almacenista: 'tomas',
            cantidadArticulos: 210,
            fecha: '26/08/2023',
            comunidad: 'Batopilas'
        }, 
        {
            idEntrada: 10,
            folioSerie: 'E2023-009',
            almacenista: 'alexis',
            cantidadArticulos: 120,
            fecha: '27/09/2023',
            comunidad: 'Creel'
        },
        {
            idEntrada: 11,
            folioSerie: 'E2023-008',
            almacenista: 'tomas',
            cantidadArticulos: 60,
            fecha: '05/08/2023',
            comunidad: 'Creel'
        },
        {
            idEntrada: 12,
            folioSerie: 'E2023-007',
            almacenista: 'alexis',
            cantidadArticulos: 40,
            fecha: '05/09/2023',
            comunidad: 'Creel'
        },

    ]);
 
    const filteredEntradas = entradas.filter((entrada) =>{
        const almacenistaMatch = entrada.folioSerie.toLowerCase().includes(busqueda.toLowerCase());
        const folioSerieMatch = entrada.folioSerie.toLowerCase().includes(busqueda.toLowerCase());
        const comunidadMatch = entrada.comunidad.toLowerCase().includes(busqueda.toLowerCase());
    
        return almacenistaMatch || folioSerieMatch || comunidadMatch;
    
      });

   
    return { entradas, toggleDrawer, toggleUserDrawer, toggleModal, handlePress, setBusqueda, filteredEntradas, isDrawerOpen, isUserDrawerOpen, isModalVisible, setComValue,comValue}
}

export default useListadoEntradasAlm;