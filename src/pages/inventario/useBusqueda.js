/**
 * Importa los módulos necesarios para la aplicación.
 */
import { useState, useEffect, } from 'react';

/**
 * Hook personalizado para manejar la búsqueda.
 * @returns {object} - Retorna el estado de la búsqueda y la función para establecer la búsqueda.
 */
const useBusqueda = () => {

    /**
     * Estado de la búsqueda.
     */
    const [busqueda,setBusqueda] = useState("");

    /**
     * Retorna el estado de la búsqueda y la función para establecer la búsqueda.
     */
    return {busqueda, setBusqueda};
};

/**
 * Exporta el hook personalizado useBusqueda.
 */
export default useBusqueda;
