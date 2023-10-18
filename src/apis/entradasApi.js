import axios from 'axios';
import ipApi from './ipApi';
const { ip, protocol, port } = ipApi;

//const baseURL = `http://${ip}:8080`;
//const baseURL = `https://${ip}`;
const baseURL = `${protocol}${ip}:${port}`;

/**
 * Módulo de funciones para interactuar con la API de entradas de almacén.
 * Proporciona métodos para obtener, crear y gestionar entradas y sus detalles.
 * 
 * @typedef {Object} Entrada
 * @property {number} id - ID de la entrada.
 * @property {Object} data - Datos asociados a la entrada o sus detalles.
 */

const entradasApi = () => {

    /**
     * Obtiene todas las entradas de almacén.
     * 
     * @returns {Array<Entrada>} - Una lista de todas las entradas. Retorna un array vacío en caso de error.
     */
    async function getAllEntradas() {

        let response = null;
        console.log('get all entradas');
        try {
            response = await axios.get(`${baseURL}/entradas`);
        } catch (error) {
            console.error('error' + error);
        }
        return response.data;
    }

    /**
     * Obtiene todas las entradas asociadas a un almacenista específico.
     * 
     * @param {number} almacenista - ID del almacenista.
     * @returns {Array<Entrada>} - Una lista de entradas asociadas al almacenista. Retorna un array vacío en caso de error.
     */
    async function getAllEntradasAlm(almacenista) {

        let response = null;

        try {
            response = await axios.get(`${baseURL}/entradas/?userId=${almacenista}`);
        } catch (error) {
            console.error('error' + error);
        }
        return response.data;
    }

    /**
     * Obtiene los detalles de una entrada específica.
     * 
     * @param {number} id_entrada - ID de la entrada.
     * @returns {Entrada} - Detalles de la entrada. Retorna un objeto vacío en caso de error.
     */
    async function getDetalles(id_entrada) {
            
        let response = null;

        try {
            response = await axios.get(`${baseURL}/entradas/entrada-detalles/${id_entrada}`);
        } catch (error) {
            console.error('error' + error);
        }
        return response.data;
    }


    /**
     * Crea una nueva entrada en el almacén.
     * 
     * @param {Entrada['data']} data - Datos de la nueva entrada.
     * @returns {Object} - Respuesta de la API tras crear la entrada. Retorna un objeto vacío en caso de error.
     */
    async function postEntrada(data) {
        let response = null;
        try {
            response = await axios.post(`${baseURL}/entradas/entradas`, data);
        } catch (error) {
            console.error('Error posting entrada: ' + error);
        }
        return response.data;
    }


    /**
     * Crea nuevos detalles para una entrada específica.
     * 
     * @param {Entrada['id']} id - ID de la entrada.
     * @param {Entrada['data']} data - Datos de los detalles de la entrada.
     * @returns {Object} - Respuesta de la API tras crear los detalles. Retorna un objeto vacío en caso de error.
     */
    async function postDetallesEntrada(id, data) {
        let response = null;
        try {
            response = await axios.post(`${baseURL}/entradas/entradas-detalles`, data);
        } catch (error) {
            console.error('Error posting detalles entrada: ' + error);
        }
        return response.data;
    }

    return { getAllEntradas, getAllEntradasAlm , getDetalles, postEntrada, postDetallesEntrada }



}

export default entradasApi;