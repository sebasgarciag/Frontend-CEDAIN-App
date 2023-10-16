/**
 * Importa los módulos necesarios para la aplicación.
 */
import axios from 'axios';
import ipApi from './ipApi';
const { ip, protocol, port } = ipApi;

/**
 * Define la URL base para las solicitudes de la API.
 */

//const baseURL = `${protocol}://${ip}:${port}`;
const baseURL = `http://192.168.1.69:8080`;

/**
 * Funciones para interactuar con la API de inventario.
 */
const inventarioApi = () => {
    /**
     * Obtiene todo el inventario de un almacén específico.
     * @param {string} idAlmacen - El ID del almacén.
     * @returns {object} - Retorna los datos del inventario.
     */
    async function getAllInventario(idAlmacen) {
        let response = null;
        try {
            response = await axios.get(`${baseURL}/inventario?idAlmacen=${idAlmacen}`);
        } catch (error) {
            console.error('error' + error);
            
        }
        return response.data;
    }

    /**
     * Obtiene todas las categorías.
     * @returns {object} - Retorna los datos de las categorías.
     */
    async function getAllCategorias() {
        let response = null;
        try {
            response = await axios.get(`${baseURL}/productos/categorias/todas`);
        } catch (error) {
            console.error('error' + error);
        }
        return response.data;
    }

    /**
     * Actualiza el inventario.
     * @param {string} idInventario - El ID del inventario.
     * @param {number} cantidad - La cantidad a actualizar.
     */
    async function putInventario(idInventario,cantidad) {
        let response = null;
        try {
            response = await axios.put(`${baseURL}/inventario?id_inventario=${idInventario}&cantidad=${cantidad}`);
        } catch (error) {
            console.error('error' + error);
        }
    }

    /**
     * Actualiza las existencias.
     * @param {object} data - Los datos para actualizar las existencias.
     * @returns {object} - Retorna los datos de la respuesta de la API.
     */
    async function putActualizarExistencias(data) {
        let response = null;
        try {
            response = await axios.put(`${baseURL}/inventario/incrementar-inventario`, data);
        } catch (error) {
            console.error('Error put actualizar existencias: ' + error);
        }
        return response.data;
    }

    /**
     * Retorna las funciones de la API de inventario.
     */
    return { getAllInventario, getAllCategorias, putActualizarExistencias, putInventario }
}

/**
 * Exporta las funciones de la API de inventario.
 */
export default inventarioApi;
