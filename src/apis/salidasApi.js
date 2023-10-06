import axios from 'axios';
import ip from './ipApi';

const baseURL = `http://${ip}:8080`;

const salidasApi = () => {

    async function getAllSalidas() {

        let response = null;

        try {
            console.log(`${baseURL}/salidas`)

            response = await axios.get(`${baseURL}/salidas`);
        } catch (error) {
            console.error('error' + error);
        }
        return response.data;
    }

    async function getAllSalidasAlm(almacenista) {

        let response = null;

        try {
            console.log(`${baseURL}/salidas`)

            response = await axios.get(`${baseURL}/salidas/?userId=${almacenista}`);
        } catch (error) {
            console.error('error' + error);
        }
        return response.data;
    }

    async function getDetalles(id_salida) {
            
        let response = null;

        try {
            response = await axios.get(`${baseURL}/salidas/salida-detalles/${id_salida}`);
        } catch (error) {
            console.error('error' + error);
        }
        return [response.data];
    }

    async function getComunidades() {
        let response = null;

        try {
            response = await axios.get(`${baseURL}/salidas/comunidades`);
        } catch (error) {
            console.error('error' + error);
        }
        return response.data;
    }

    async function getEventos() {
        let response = null;

        try {
            response = await axios.get(`${baseURL}/salidas/eventos`);
        } catch (error) {
            console.error('error' + error);
        }
        return response.data;
    }

    // A PROBAR POST DE ENTRADA
    async function postSalida(data) {
        let response = null;
        try {
            response = await axios.post(`${baseURL}/salidas`, data);
        } catch (error) {
            console.error('Error posting salida: ' + error);
        }
        return response.data;
    }


    // A PROBAR POST DETALLES DE LA ENTRADA
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