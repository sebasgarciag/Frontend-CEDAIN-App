import axios from "axios";
import ipApi from './ipApi';
const { ip, protocol, port } = ipApi;
//const baseURL = `http://${ip}:8080`;
//const baseURL = `https://${ip}`;
const baseURL = `${protocol}://${ip}:${port}`;


export const exportCombined = async (entryId) => {
    try {
        const response = await axios.get(`${baseURL}/entradas/exportar/${entryId}`, { responseType: 'arraybuffer' });
        if (response.status !== 200) {
            throw new Error("No se recibieron datos del servidor.");
        }
        return response.data;
    } catch (error) {
        console.error("Error exporting combined data:", error);
        throw error;
    }
}

/**
 * Solicita la exportación de todos los datos del inventario para un ID específico.
 *
 * @async
 * @function
 * @param {string|number} invId - El ID del inventario para el cual se desea exportar los datos.
 * @returns {ArrayBuffer} - Retorna un ArrayBuffer con los datos del inventario exportados.
 * @throws {Error} - Lanza un error si no se reciben datos del inventario desde el servidor o si ocurre cualquier otro error.
 */

export const exportAllInventario = async(invId) => {
    try{
        const response = await axios.get(`${baseURL}/inventario/exportar-excel/${invId}`, { responseType: 'arraybuffer' });
        if (response.status !== 200) {
            throw new Error("No se recibieron datos del inventario desde el servidor.");
        }
        return response.data;
    } catch (error) {
        console.error("Error exporting inventario data:", error);
        throw error;
    }
}