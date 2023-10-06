import axios from 'axios';

const ip = '192.168.1.69';
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

//====================================== POST ENTRADA CONNECTION
    async function postEntrada(data) {
        let response = null;

        try{
            const response = await axios.post(`${baseURL}/entradas/entradas`, data);
            
        }
        catch (error) {
            if (error.response) {
                if (error.response.status === 400) {
                    console.log("Invalid Parameter");
                }
                console.log("Error: " + error);
            }
        }
        return response;
    }



    return { getAllEntradas, getAllEntradasAlm , getDetalles, postEntrada }

}

export default entradasApi;