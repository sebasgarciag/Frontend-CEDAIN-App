import {useState}  from 'react';

const useListadoEntradasAlm = () => {
    const [entradas, setEntradas] = useState([
        {
            idEntrada: 1,
            cantidadArticulos: 120,
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
        {
            idEntrada: 4,
            cantidadArticulos: 60,
            fecha: '28/08/2023'
        },
        {
            idEntrada: 5,
            cantidadArticulos: 140,
            fecha: '29/07/2023'
        }
    ]);

   


    return { entradas }
}

export default useListadoEntradasAlm;