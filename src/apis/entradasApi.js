import axios from 'axios';
import ip from './ipApi';

const baseURL = `http://${ip}:8080`;

const entradasApi = () => {

    async function getAllEntradas() {

        let response = null;

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

    return { getAllEntradas, getAllEntradasAlm , getDetalles }



}

export default entradasApi;