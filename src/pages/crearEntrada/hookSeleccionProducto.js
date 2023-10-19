import { useState, useEffect } from 'react';
import inventarioApi from '../../apis/inventarioApi';
import AsyncStorage from '@react-native-async-storage/async-storage';

const useSeleccion = () => {
    async function sacarUsuario() {
        const value = await AsyncStorage.getItem('@user');
        if (value !== null) {
            // value previously stored
            // Parseamos el valor previamente almacenado
            const user = JSON.parse(value);


            setEntrada({
                ...entrada,
                id_usuario: user.id,
                Usuario: {
                    nombre: user.nombre,
                    apellido_paterno: user.apellido_paterno
                }
            })
        }
    }

    const [entrada, setEntrada] = useState({
        fecha: '',
        folio: '',
        serie : '',
        observaciones: '',
        id_usuario: 1, // TODO: cambiar por el usuario logeado
        id_almacen: 1, // TODO: cambiar por el almacen seleccionado
        emisor: '',
        id_comunidad: 0,
        id_evento: 0,
        Comunidad: {
            id_comunidad: 1,
            nombre: 'si'
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

    const { getAllInventario, getAllCategorias } = inventarioApi();

    const [productos, setProductos] = useState([]);

    const [categorias, setCategorias] = useState([]);

    async function getCategorias() {
        const categoriasApi = await getAllCategorias();
        setCategorias(categoriasApi);
    };

    async function getProductos() {
        const productosApi = await getAllInventario(1);
        setProductos(productosApi);
    };

    useEffect(() => {
        sacarUsuario();
        getCategorias();
        getProductos();
    }, []);    

    return { productos, categorias, entrada, setEntrada }
}

export default useSeleccion;