import { useState, useEffect, } from 'react';
import inventarioApi from '../../apis/inventarioApi';

const useInventario = (id_almacen) => {
    // console.log(almacen);

    const [listaInventario, setlistaInventario] = useState([]);
    const { getAllInventario } = inventarioApi();


    //console.log(id_almacen);
    useEffect(() => {
        (async () => {
            const listaInventarioResponse = await getAllInventario(id_almacen);
            setlistaInventario(listaInventarioResponse);
            
        })();
    }, [id_almacen]);

    return { listaInventario };
};

export default useInventario;