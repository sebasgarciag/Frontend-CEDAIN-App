import axios from 'axios';
import { ip } from './infoIP.js';

const ip = '10.34.27.220';
const baseUrl = `http://${ip}:8080`;

const UsuariosAPI = () => {
    async function getTodosUsuarios() {
        let response = null;

        try {
            response = await axios.get(`${baseUrl}/usuarios`);
            // console.log(response.data)
        } catch (error) {
            console.log("Error: " + error);
        }

        return response;
    }

    async function login(correo, password) {
        let response = null;

        try {
            response = await axios.post(`${baseUrl}/usuarios/login`, { correo, password });
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

    return { getTodosUsuarios, updateUsuario, getUsuario, login }
}

export default UsuariosAPI;
