import axios from 'axios';

// const ip = '10.34.3.73';
const ip = '192.168.1.120';
const baseURL = `http://${ip}:8080`;

const salidasApi = () => {

    async function getAllSalidas() {

        let response = null;

        try {
<<<<<<< HEAD
            console.log(`${baseURL}/salidas`)
=======
>>>>>>> main
            response = await axios.get(`${baseURL}/salidas`);
        } catch (error) {
            console.error('error' + error);
        }
        return response.data;
    }

    async function getAllSalidasAlm(almacenista) {

        let response = null;

        try {
<<<<<<< HEAD
            console.log(`${baseURL}/salidas`)
=======
>>>>>>> main
            response = await axios.get(`${baseURL}/salidas/?userId=${almacenista}`);
        } catch (error) {
            console.error('error' + error);
        }
        return response.data;
    }

<<<<<<< HEAD
    return { getAllSalidas, getAllSalidasAlm }
=======
    async function getDetalles(id_salida) {
            
        let response = null;
        console.log('id_salida', id_salida)

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

    return { getAllSalidas, getAllSalidasAlm, getDetalles, getComunidades, getEventos }
>>>>>>> main

}

export default salidasApi;