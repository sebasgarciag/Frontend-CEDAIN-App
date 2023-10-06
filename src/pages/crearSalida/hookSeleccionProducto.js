import {useState}  from 'react';
import inventarioApi from '../../apis/inventarioApi';
import { useEffect } from 'react';

const useSeleccion = () => {
    const { getAllInventario, getAllCategorias } = inventarioApi();

    const [productos, setProductos] = useState([]);

    const [categorias, setCategorias] = useState([]);

    async function getCategorias() {
        console.log('hola')
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

    return { productos, categorias }
}

export default useSeleccion;