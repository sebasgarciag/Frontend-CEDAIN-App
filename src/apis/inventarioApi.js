import axios from 'axios';
const ip = '10.34.21.253';
const baseURL = `http://${ip}:8080`;

const inventarioApi = () => {

    async function getInventarioByIdAlmacen(id_almacen) {

        console.log(id_almacen, "entroapiiiii")
        let response = null;

        try {
            //response = await axios.get(`http://192.168.1.69:8080/inventario/${id_almacen}`);
        } catch (error) {
            console.error('error' + error);
            throw error;
        }
        return response.data;
    }

    return { getInventarioByIdAlmacen }

}

export default inventarioApi;
