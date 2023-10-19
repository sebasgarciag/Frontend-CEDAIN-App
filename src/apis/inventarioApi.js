import axios from 'axios';
import ipApi from './ipApi';
const { ip, protocol, port } = ipApi;

//const baseURL = 'http://192.168.1.68:8080';
const baseURL = `${protocol}${ip}:${port}`;
//const baseURL = `http://${ip}:8080`;
//const baseURL = `https://${ip}`;

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
    }

    async function putActualizarExistencias(data) {
        let response = null;
        try {
            response = await axios.put(`${baseURL}/inventario/incrementar-inventario`, data);
        } catch (error) {
            console.error('Error put actualizar existencias: ' + error);
        }
        return response.data;
    }

    async function postCrearInventario(data) {
        let response = null;
        try {
            response = await axios.post(`${baseURL}/inventario`, data);
        } catch (error) {
            console.error('Error post actualizar inventario: ' + error);
        }
        return response.data;
    }



    return { getAllInventario, getAllCategorias, putActualizarExistencias, putInventario,postCrearInventario }
}

export default inventarioApi;