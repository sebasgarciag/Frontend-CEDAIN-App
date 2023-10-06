import { useState, useEffect, } from 'react';
import inventarioApi from '../../apis/inventarioApi';

const useInventario = (id_almacen) => {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`http://localhost:8080/inventario/${id_almacen}`);
                const data = await response.json();
                setProductos(data);
            } catch (error) {
                console.error('Error al obtener los productos:', error);
            }
        };

        fetchData();
    }, [id_almacen]);

    return { productos };
};

export default useInventario;
