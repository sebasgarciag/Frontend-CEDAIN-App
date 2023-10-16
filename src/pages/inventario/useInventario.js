/**
 * Importa los módulos necesarios para la aplicación.
 */
import { useState, useEffect, } from 'react';
import inventarioApi from '../../apis/inventarioApi';

/**
 * Hook personalizado para manejar el inventario.
 * @param {string} id_almacen - El ID del almacén.
 * @returns {object} - Retorna la lista de inventario.
 */
const useInventario = (id_almacen) => {

    /**
     * Estado del inventario y API para obtener todos los inventarios.
     */
    const [listaInventario, setlistaInventario] = useState([]);
    const { getAllInventario } = inventarioApi();

    /**
     * Efecto para obtener todos los inventarios cuando el ID del almacén cambia.
     */
    useEffect(() => {
        (async () => {
            const listaInventarioResponse = await getAllInventario(id_almacen);
            setlistaInventario(listaInventarioResponse);
            
        })();
    }, [id_almacen]);

    /**
     * Retorna la lista de inventario.
     */
    return { listaInventario };
};

/**
 * Exporta el hook personalizado useInventario.
 */
export default useInventario;