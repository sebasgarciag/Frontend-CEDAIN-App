import {useState, useEffect}  from 'react';
import ProductosAPI from '../../apis/productosApi';

const useListadoProductos = () => {
    const [productos, setProductos] = useState([]);
    const { getTodosProductos } = ProductosAPI();

    async function getListadoProductos() {
        const response = await getTodosProductos();
        // console.log(response)

        if (response !== null) {
            setProductos(response.data);
        }
    }

    useEffect(() => {
        getListadoProductos();
    }, []);

   


    return { productos }
}

export default useListadoProductos ;