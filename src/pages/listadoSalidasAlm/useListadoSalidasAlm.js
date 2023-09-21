import {useState}  from 'react';

const useListadoSalidasAlm = () => {
    const [salidas, setSalidas] = useState([
        {
            idSalida: 1,
            cantidadArticulos: 120,
            fecha: '15/08/2023'
        }, 
        {
            idSalida: 2,
            cantidadArticulos: 100,
            fecha: '29/12/2023'
        }, 
        {
            idSalida: 3,
            cantidadArticulos: 210,
            fecha: '26/08/2023'
        }, 
        {
            idSalida: 4,
            cantidadArticulos: 60,
            fecha: '28/08/2023'
        },
        {
            idSalida: 5,
            cantidadArticulos: 140,
            fecha: '29/07/2023'
        }
    ]);

   


    return { salidas }
}

export default useListadoSalidasAlm;