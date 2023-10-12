import { useState, useEffect, } from 'react';

const useBusqueda = () => {
    // console.log(almacen);

    const [busqueda,setBusqueda] = useState("");


    return {busqueda, setBusqueda};
};

export default useBusqueda;