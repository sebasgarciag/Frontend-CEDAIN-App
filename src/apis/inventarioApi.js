import axios from 'axios';
import ip from './infoIP';

const baseURL = `http://${ip}:8080`;

const inventarioApi = () => {

    async function getAllInventario(idAlmacen) {
        let response = null;
        try {
            response = await axios.get(`${baseURL}/inventario/${idAlmacen}`);
            // console.log('response', response.data);
        } catch (error) {
            console.error('error' + error);
        }
        return response.data;
    }

    async function getAllCategorias() {
        let response = null;
        try {
            response = await axios.get(`${baseURL}/productos/categorias/todas`);
            // console.log('response', response.data);
        } catch (error) {
            console.error('error' + error);
        }
        return response.data;
    }

    return { getAllInventario, getAllCategorias }
}

export default inventarioApi;