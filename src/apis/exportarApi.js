import axios from "axios";
import ip from './ipApi';
//const baseURL = `http://${ip}:8080`;
const baseURL = `https://${ip}`;

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