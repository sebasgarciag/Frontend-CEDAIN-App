import {useState}  from 'react';
import inventarioApi from '../../apis/inventarioApi';
import { useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const useSeleccion = () => {
    const { getAllInventario, getAllCategorias } = inventarioApi();
    const [usuario, setUsuario] = useState({});


    async function sacarUsuario() {
        const value = await AsyncStorage.getItem('@user');
        if (value !== null) {
            // value previously stored
            // Parseamos el valor previamente almacenado
            const user = JSON.parse(value);


            setSalida({
                ...salida,
                id_usuario: user.id,
                Usuario: {
                    nombre: user.nombre,
                    apellido_paterno: user.apellido_paterno
                }
            })
        }
    }

    

    const [salida, setSalida] = useState({
        fecha: '',
        folio: '',
        facturar: 0,
        serie : '',
        observaciones: '',
        id_usuario: 1, // TODO: cambiar por el usuario logeado
        id_almacen: 1, // TODO: cambiar por el almacen seleccionado
        receptor: '',
        id_evento: 0,
        id_tipo_pago: 1,
        Comunidad: {
            id_comunidad: 1,
            nombre: 'HOLA'
        },
        Evento: {
            id_evento: 0,
            nombre: ''
        },
        Almacen: {
            id_almacen: 1,
            nombre: 'Creel'
        },
        Usuario: {
            nombre: 'hola', 
            apellido_paterno: 'si'
        },
    });

    const [productos, setProductos] = useState([]);

    const [categorias, setCategorias] = useState([]);

   /**
 * Asynchronously fetches all categories and updates the state with the retrieved categories.
 * @async
 */
async function getCategorias() {
    const categoriasApi = await getAllCategorias();
    setCategorias(categoriasApi);
}

/**
 * Asynchronously fetches all products from the inventory of a specified type (in this case, type 1) and updates the state with the retrieved products.
 * @async
 */
async function getProductos() {
    const productosApi = await getAllInventario(1);
    setProductos(productosApi);
}

    useEffect(() => {
        sacarUsuario();
        getCategorias();
        getProductos();
    }, []);    

    return { productos, categorias, salida}
}

export default useSeleccion;