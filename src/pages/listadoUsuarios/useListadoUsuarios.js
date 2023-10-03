import { useState, useEffect }  from 'react';
import UsuariosAPI from '../../apis/usuariosApi';

const useListadoUsuarios = () => {
    const [usuarios, setUsuarios] = useState([])
    const { getTodosUsuarios } = UsuariosAPI();

    async function getListadoUsuarios() {
        const response = await getTodosUsuarios();
        console.log(response)

        if (response !== null) {
            setUsuarios(response.data);
        }
    }

    useEffect(() => {
        getListadoUsuarios();
    }, []);
    
    return { usuarios }
}

export default useListadoUsuarios;