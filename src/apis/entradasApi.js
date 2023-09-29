import axios from 'axios';

const ip = '10.34.3.73';
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

    return { getAllEntradas }

}

export default entradasApi;