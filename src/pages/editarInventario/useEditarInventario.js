/**
 * Importa los módulos necesarios para la aplicación.
 */
import { useState, useEffect, } from 'react';
import inventarioApi from '../../apis/inventarioApi';

/**
 * Hook personalizado para manejar la edición del inventario.
 * @returns {object} - Retorna la función para actualizar el inventario y el resultado de la actualización.
 */
const useEditarInventario = () => {

    /**
     * Estado del resultado y API para actualizar el inventario.
     */
	const [resultado, setResultado] = useState('');
    const { putInventario } = inventarioApi();

    /**
     * Función asíncrona para actualizar el inventario.
     * @param {string} idInventario - El ID del inventario.
     * @param {number} cantidad - La cantidad a actualizar.
     */
	async function updateInventario(idInventario,cantidad) {
        
        const resultadoApi = await putInventario(idInventario,cantidad);
		if (resultadoApi != null){
			setResultado("Cambio guardado")
		}
		else{
			setResultado("Error al guardarse")
		}
    };

    /**
     * Retorna la función para actualizar el inventario y el resultado de la actualización.
     */
    return { updateInventario,resultado};
};

/**
 * Exporta el hook personalizado useEditarInventario.
 */
export default useEditarInventario;
