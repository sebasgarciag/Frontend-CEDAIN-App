import axios from 'axios';
import ip from './ipApi';

const baseURL = `http://${ip}:8080`;

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

    async function putInventario(idInventario,cantidad) {
        let response = null;
        try {
            response = await axios.put(`${baseURL}/inventario?id_inventario=${idInventario}&cantidad=${cantidad}`);
            // console.log('response', response.data);
        } catch (error) {
            console.error('error' + error);
        }
        return response.data;
    }

    return { getAllInventario, getAllCategorias,putInventario }
}

export default inventarioApi;