import {useState}  from 'react';

const useListadoProductos = () => {
    const [entradas, setEntradas] = useState([
        {
            idEntrada: 1,
            cantidadArticulos: 10,
            fecha: '15/08/2023'
        }, 
        {
            idEntrada: 2,
            cantidadArticulos: 100,
            fecha: '29/12/2023'
        }, 
        {
            idEntrada: 3,
            cantidadArticulos: 210,
            fecha: '26/08/2023'
        }, 
        
    ]);

   


    return { entradas }
}

export default useListadoProductos ;