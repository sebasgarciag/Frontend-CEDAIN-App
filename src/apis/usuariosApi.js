import axios from 'axios';

const baseUrl = 'http://localhost:8080';

const UsuariosAPI = () => {
    async function getTodosUsuarios() {
        let response = null;

        try {
            response = await axios.get(`${baseUrl}/usuarios`);
            console.log(response.data)
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
        }

        return response;
    }

    return { getTodosUsuarios, login }
}

export default UsuariosAPI;
 
    

    // async function saveUsuario(usuario) {
    //     let response = null;

    //     try {
    //         response = await axios.post(`${baseUrl}/usuarios`, usuario)
    //     } catch (error) {
    //         if (error.response) {
    //             if (error.response.status === 400) {
    //                 console.log("Invalid Parameter");
    //             }
    //         }

    //         console.log("Error: " + error);
    //     }

    //     return response;
    // }
