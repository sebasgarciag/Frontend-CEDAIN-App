import axios from axios;

const baseURL = `http://${ip}:8080`;

const inventariosAPI = () => {
    async function getTodosProductos() {
        let response = null;

        try {
            response = await axios.get(`${baseUrl}/inventarios`);
        } catch (error) {
            // Handle errors
            console.log("Error: " + error);
        }

        return response;
    }

    return { getTodosProductos }
}