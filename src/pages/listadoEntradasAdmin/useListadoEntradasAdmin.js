import {useState}  from 'react';

const useListadoEntradasAdmin = () => {
    const [entradas, setEntradas] = useState([
        {
            idEntrada: 1,
            folioSerie: 'E2023-012',
            almacenista: 1,
            cantidadArticulos: 120,
            fecha: '15/08/2023'
        }, 
        {
            idEntrada: 2,
            folioSerie: 'E2023-011',
            almacenista: 1,
            cantidadArticulos: 100,
            fecha: '21/05/2023'
        }, 
        {
            idEntrada: 3,
            folioSerie: 'E2023-010',
            almacenista: 1,
            cantidadArticulos: 210,
            fecha: '26/08/2023'
        }, 
        {
            idEntrada: 4,
            folioSerie: 'E2023-009',
            almacenista: 2,
            cantidadArticulos: 120,
            fecha: '27/09/2023'
        },
        {
            idEntrada: 5,
            folioSerie: 'E2023-008',
            almacenista: 2,
            cantidadArticulos: 60,
            fecha: '05/08/2023'
        },
        {
            idEntrada: 6,
            folioSerie: 'E2023-007',
            almacenista: 1,
            cantidadArticulos: 40,
            fecha: '05/09/2023'
        },

    ]);

   


    return { entradas }
}

export default useListadoEntradasAdmin;