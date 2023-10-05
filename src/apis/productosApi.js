import axios from 'axios';
import ip from './infoIP';

const baseUrl = `http://${ip}:8080`;

const ProductosAPI = () => {
    async function getTodosProductos() {
        let response = null;

        try {
            console.log(ip)
            response = await axios.get(`${baseUrl}/productos`);
            // console.log(response.data)
        } catch (error) {
            console.log("Error: " + error);
        }

        return response;
    }

    async function createProducto(producto) {
        let response = null;

        try {
            response = await axios.post(`${baseUrl}/productos`, producto);
            console.log(response.data);
        } catch (error) {
            console.log("Error: " + error);
            // Si el error es un error de red (lo que podría indicar un problema de conexión con la base de datos)
            if (axios.isAxiosError(error) && !error.response) {
                console.log("No se pudo conectar a la base de datos");
                Alert.alert("Error", "No se pudo conectar a la base de datos");
            }
        }

        return response;
    }

    async function updateProducto(producto, id_producto) {
        let response = null;

        try {
            response = await axios.put(`${baseUrl}/productos/${id_producto}`, producto)
        } catch (error) {
            if (error.response) {
                if (error.response.status === 400) {
                    console.log("Invalid Parameter");
                }
            }

            console.log("Error: " + error);
        }

        return response;
    }
    
    async function getProducto(id_producto) {
        let response = null;

        try {
            response = await axios.get(`${baseUrl}/productos/${id_producto}`)
        } catch (error) {
            if (error.response) {
                if (error.response.status === 400) {
                    console.log("Invalid Parameter");
                }
            }

            console.log("Error: " + error);
        }

        return response;
    }

    return { getTodosProductos, updateProducto, getProducto, createProducto }
}

export default ProductosAPI;
