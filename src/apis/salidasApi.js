import axios from 'axios';

// const ip = '10.34.3.73';
const ip = '192.168.1.120';
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

    return { getAllSalidas, getAllSalidasAlm }

}

export default salidasApi;