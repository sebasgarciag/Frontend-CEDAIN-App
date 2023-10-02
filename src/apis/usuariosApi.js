import axios from 'axios';

const baseUrl = 'http://192.168.0.3:8080';

const UsuariosAPI = () => {
    async function getTodosUsuarios() {
        let response = null;

        try {
            response = await axios.get(`${baseUrl}/usuarios`);
            // console.log(response.data)
        } catch (error) {
            // Handle errors
            console.log("Error: " + error);
        }

        return response;
    }

    async function updateUsuario(usuario, id_usuario) {
        let response = null;

        try {
            response = await axios.put(`${baseUrl}/usuarios/${id_usuario}`, usuario)
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
    
    async function getUsuario(id_usuario) {
        let response = null;

        try {
            response = await axios.get(`${baseUrl}/usuarios/${id_usuario}`)
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

    return { getTodosUsuarios, updateUsuario, getUsuario }
}

export default UsuariosAPI;