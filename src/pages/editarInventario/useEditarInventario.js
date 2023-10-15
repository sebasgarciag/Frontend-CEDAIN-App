import { useState, useEffect, } from 'react';
import inventarioApi from '../../apis/inventarioApi';

const useEditarInventario = () => {

	const [resultado, setResultado] = useState('');
    const { putInventario } = inventarioApi();


	async function updateInventario(idInventario,cantidad) {
        
        const resultadoApi = await putInventario(idInventario,cantidad);
		if (resultadoApi != null){
			setResultado("Cambio guardado")
		}
		else{
			setResultado("Error al guardarse")
		}
    };

    return { updateInventario,resultado};
};

export default useEditarInventario;