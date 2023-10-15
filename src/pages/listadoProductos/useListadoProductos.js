import {useState, useEffect}  from 'react';
import ProductosAPI from '../../apis/productosApi';
import { useIsFocused } from "@react-navigation/native";

const useListadoProductos = () => {
    const [productos, setProductos] = useState([]);
    const { getTodosProductos } = ProductosAPI();
    const isFocused = useIsFocused();

    async function getListadoProductos() {
        const response = await getTodosProductos();

        if (response !== null) {
                setProductos(response.data);
        }
    }

    useEffect(() => {
        if(isFocused){ 
            getListadoProductos();
        }
    }, [isFocused]);

    return { productos }
}

export default useListadoProductos ;