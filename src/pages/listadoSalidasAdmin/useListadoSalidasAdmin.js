import {useState}  from 'react';

const useListadoSalidasAdmin = () => {
    const [salidas, setSalidas] = useState([
        {
            idSalida: 1,
            folioSerie: 'S2023-012',
            almacenista: 1,
            cantidadArticulos: 120,
            fecha: '15/08/2023'
        }, 
        {
            idSalida: 2,
            folioSerie: 'S2023-011',
            almacenista: 1,
            cantidadArticulos: 100,
            fecha: '21/05/2023'
        }, 
        {
            idSalida: 3,
            folioSerie: 'S2023-010',
            almacenista: 1,
            cantidadArticulos: 210,
            fecha: '26/08/2023'
        }, 
        {
            idSalida: 4,
            folioSerie: 'S2023-009',
            almacenista: 2,
            cantidadArticulos: 120,
            fecha: '27/09/2023'
        },
        {
            idSalida: 5,
            folioSerie: 'S2023-008',
            almacenista: 2,
            cantidadArticulos: 60,
            fecha: '05/08/2023'
        },
        {
            idSalida: 6,
            folioSerie: 'S2023-007',
            almacenista: 1,
            cantidadArticulos: 40,
            fecha: '05/09/2023'
        },

    ]);

    return { salidas }
}

export default useListadoSalidasAdmin;