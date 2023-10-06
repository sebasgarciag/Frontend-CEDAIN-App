import axios from 'axios';
import ip from './ipApi';

const baseURL = `http://${ip}:8080`;

const entradasApi = () => {

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

    async function getAllEntradasAlm(almacenista) {

        let response = null;

        try {
            response = await axios.get(`${baseURL}/entradas/?userId=${almacenista}`);
        } catch (error) {
            console.error('error' + error);
        }
        return response.data;
    }

    async function getDetalles(id_entrada) {
            
        let response = null;

        try {
            response = await axios.get(`${baseURL}/entradas/entrada-detalles/${id_entrada}`);
        } catch (error) {
            console.error('error' + error);
        }
        return [response.data];
    }


    // A PROBAR POST DE ENTRADA
    async function postEntrada(data) {
        let response = null;
        try {
            response = await axios.post(`${baseURL}/entradas/entradas`, data);
        } catch (error) {
            console.error('Error posting entrada: ' + error);
        }
        return response.data;
    }


    // A PROBAR POST DETALLES DE LA ENTRADA
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