import axios from "axios";
import ipApi from './ipApi';
const { ip, protocol, port } = ipApi;
//const baseURL = `http://${ip}:8080`;
//const baseURL = `https://${ip}`;
const baseURL = `${protocol}${ip}:${port}`;



/**
 * Solicita al servidor exportar los datos de una entrada en formato EXCEL.
 *
 * @async
 * @function
 * @param {number} entryId - El ID de la entrada para la cual se desea exportar los datos.
 * @returns {ArrayBuffer} - Retorna un ArrayBuffer con los datos exportados.
 * @throws {Error} - Lanza un error si no se reciben datos del servidor o si ocurre cualquier otro error.
 */
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


export const exportSalida = async (salidaId) => {
    try {
        const response = await axios.get(`${baseURL}/salidas/exportar-excel/${salidaId}`, { responseType: 'arraybuffer' });
        if (response.status !== 200) {
            throw new Error("No se recibieron datos del servidor.");
        }
        return response.data;
    } catch (error) {
        console.error("Error exporting combined data:", error);
        throw error;
    }
}



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