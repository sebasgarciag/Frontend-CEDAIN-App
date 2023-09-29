import axios from 'axios';

const ip = '10.34.3.73';
const baseURL = `http://${ip}:8080`;

const salidasApi = () => {

    async function getAllSalidas() {

        let response = null;

        try {
            console.log(`${baseURL}/salidas`)
            response = await axios.get(`${baseURL}/salidas`);
            console.log(response.data);
        } catch (error) {
            console.error('error' + error);
        }
        return response.data;
    }

    return { getAllSalidas }

}

export default salidasApi;