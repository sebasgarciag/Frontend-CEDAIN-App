import axios from 'axios';
import ipApi from './ipApi';
const { ip, protocol, port } = ipApi;

const baseURL = `${protocol}${ip}:${port}`;
//const baseURL = `http://${ip}:8080`;
//const baseURL = `https://${ip}`;

/**
 * API utilities for interacting with Salidas endpoints.
 * @returns {Object} Contains various methods for interacting with the Salidas endpoints.
 */
const salidasApi = () => {

    /**
     * Retrieve all Salidas.
     * @async
     * @returns {Array<Object>} An array of Salida objects.
     */
    async function getAllSalidas() {
        let response = null;

        try {
            response = await axios.get(`${baseURL}/salidas`);
        } catch (error) {
            console.error('error' + error);
        }
        return response.data;
    }

    /**
     * Retrieve all Salidas for a given Almacenista.
     * @async
     * @param {string} almacenista - The user ID of the Almacenista.
     * @returns {Array<Object>} An array of Salida objects.
     */
    async function getAllSalidasAlm(almacenista) {
        let response = null;

        try {
            response = await axios.get(`${baseURL}/salidas/?userId=${almacenista}`);
        } catch (error) {
            console.error('error' + error);
        }
        return response.data;
    }

    /**
     * Retrieve the details of a specific Salida.
     * @async
     * @param {string} id_salida - The ID of the Salida.
     * @returns {Object} The details of the Salida.
     */
    async function getDetalles(id_salida) {
        let response = null;

        try {
            response = await axios.get(`${baseURL}/salidas/salida-detalles/${id_salida}`);
        } catch (error) {
            console.error('error' + error);
        }
        return response.data;
    }

    /**
     * Retrieve all Comunidades.
     * @async
     * @returns {Array<Object>} An array of Comunidad objects.
     */
    async function getComunidades() {
        let response = null;

        try {
            response = await axios.get(`${baseURL}/salidas/comunidades`);
        } catch (error) {
            console.error('error' + error);
        }
        return response.data;
    }

    /**
     * Retrieve all Eventos.
     * @async
     * @returns {Array<Object>} An array of Evento objects.
     */
    async function getEventos() {
        let response = null;

        try {
            response = await axios.get(`${baseURL}/salidas/eventos`);
        } catch (error) {
            console.error('error' + error);
        }
        return response.data;
    }

    /**
     * Create a new Salida.
     * @async
     * @param {Object} data - The Salida data to post.
     * @returns {Object} The created Salida object.
     */
    async function postSalida(data) {
        let response = null;
        try {
            response = await axios.post(`${baseURL}/salidas`, data);
        } catch (error) {
            console.error('Error posting salida: ' + error);
        }
        return response.data;
    }

    /**
     * Post details of a Salida.
     * @async
     * @param {Object} data - The details of the Salida to post.
     * @returns {Object} The posted Salida details.
     */
    async function postDetallesSalidas(data) {
        let response = null;
        try {
            response = await axios.post(`${baseURL}/salidas/salidas-detalles`, data);
        } catch (error) {
            console.error('Error posting detalles salida: ' + error);
        }
        return response.data;
    }

    return { getAllSalidas, getAllSalidasAlm, getDetalles, getComunidades, getEventos, postSalida, postDetallesSalidas }

}

export default salidasApi;
