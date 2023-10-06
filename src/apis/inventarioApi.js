import axios from 'axios';
import ip from './ipApi';

const baseURL = `https://${ip}`;

const inventarioApi = () => {

    async function getAllInventario(idAlmacen) {
        let response = null;
        try {
            response = await axios.get(`${baseURL}/inventario?idAlmacen=${idAlmacen}`);
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