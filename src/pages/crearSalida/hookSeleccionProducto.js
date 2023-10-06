import {useState}  from 'react';
import inventarioApi from '../../apis/inventarioApi';
import { useEffect } from 'react';

const useSeleccion = () => {
    const { getAllInventario, getAllCategorias } = inventarioApi();

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

    async function getCategorias() {
        const categoriasApi = await getAllCategorias();
        setCategorias(categoriasApi);
    };

    async function getProductos() {
        const productosApi = await getAllInventario(1);
        setProductos(productosApi);
    };

    useEffect(() => {
        getCategorias();
        getProductos();
    }, []);    

    return { productos, categorias, salida }
}

export default useSeleccion;