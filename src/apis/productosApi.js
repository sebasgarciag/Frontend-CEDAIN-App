import axios from 'axios';
import ipApi from './ipApi';
const { ip, protocol, port } = ipApi;

const baseUrl = `${protocol}${ip}:${port}`;
//const baseUrl = `http://${ip}:8080`;
//const baseUrl = `https://${ip}`;


const ProductosAPI = () => {
    /**
     * Obtiene todos los productos desde la API.
     * @async
     * @function
     * @returns {Promise} Promesa que resuelve en la respuesta de la API.
     */
    async function getTodosProductos() {
        let response = null;

        try {
            response = await axios.get(`${baseUrl}/productos`);
        } catch (error) {
            console.log("Error: " + error);
        }

        return response;
    }

    /**
     * Obtiene todos los tamaños de productos desde la API.
     * @async
     * @function
     * @returns {Promise} Promesa que resuelve en la respuesta de la API.
     */
    async function getTodosTamanios() {
        let response = null;

        try {
            response = await axios.get(`${baseUrl}/productos/tamanios/todos`);
        } catch (error) {
            console.log("Error: " + error);
        }

        return response;
    }

    /**
     * Obtiene todas las categorías de productos desde la API.
     * @async
     * @function
     * @returns {Promise} Promesa que resuelve en la respuesta de la API.
     */
    async function getTodasCategorias() {
        let response = null;

        try {
            response = await axios.get(`${baseUrl}/productos/categorias/todas`);
        } catch (error) {
            console.log("Error: " + error);
        }

        return response;
    }

    /**
     * Crea un nuevo producto utilizando los datos proporcionados en el formulario.
     * @async
     * @function
     * @param {FormData} formData - Datos del formulario para el nuevo producto.
     * @returns {Promise} Promesa que resuelve en la respuesta de la API.
     */
    async function createProducto(formData) {
        let response = null;

        try {
            response = await axios.post(`${baseUrl}/productos`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            console.log(response.data);
        } catch (error) {
            console.log("Error: " + error);

            if (axios.isAxiosError(error) && !error.response) {
                console.log("No se pudo conectar a la base de datos");
                // Alert.alert("Error", "No se pudo conectar a la base de datos");
            }
        }

        return response;
    }

    /**
     * Actualiza un producto con una imagen adjunta.
     * @async
     * @function
     * @param {FormData} formData - Datos del formulario con la imagen a subir.
     * @param {string} id_producto - Identificador del producto a actualizar.
     * @returns {Promise} Promesa que resuelve en la respuesta de la API.
     */
    async function updateProductoConImagen(formData, id_producto) {
        let response = null;

        try {
            response = await axios.put(`${baseUrl}/productos/${id_producto}`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            console.log(response.data);
        } catch (err) {
            console.error("Error al cargar la imagen:", err);
        }

        return response;
    }

    /**
     * Obtiene un producto específico desde la API.
     * @async
     * @function
     * @param {string} id_producto - Identificador del producto a obtener.
     * @returns {Promise} Promesa que resuelve en la respuesta de la API.
     */
    async function getProducto(id_producto) {
        let response = null;

        try {
            response = await axios.get(`${baseUrl}/productos/${id_producto}`);
        } catch (error) {
            if (error.response) {
                if (error.response.status === 400) {
                    console.log("Parámetro inválido");
                }
            }

            console.log("Error: " + error);
        }

        return response;
    }

    return { getTodosProductos, getProducto, createProducto, getTodosTamanios , getTodasCategorias, updateProductoConImagen }
}

export default ProductosAPI;
