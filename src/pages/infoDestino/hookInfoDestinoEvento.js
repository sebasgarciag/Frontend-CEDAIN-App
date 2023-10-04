import { useState } from "react";

const useInfoDestinoEvento=()=>{

	const [comunidades, setComunidades] = useState([
		{ 
			nombre: 'comunidad 1', 
			id_comunidad: '1' 
		},
		{ 
			nombre: 'comnuidad 2', 
			id_comunidad: '2' 
		},
		{ 
			nombre: 'comunidad 3', 
			id_comunidad: '3' 
		}
	]);

	const [eventos, setEventos] = useState([
		{ 
			nombre: 'evento 1', 
			id_evento: '1' 
		},
		{ 
			nombre: 'evento 2', 
			id_evento: '2' 
		},
		{ 
			nombre: 'evento 3', 
			id_evento: '3' 
		}
	]);

	const [comunidad, setComunidad] = useState(null);
	const [evento, setEvento] = useState(null);

	const [comentarios, setComentarios] = useState('');
	const [receptor, setReceptor] = useState('');


	return { comunidades, eventos, comunidad, evento, setComunidad, setEvento, comentarios, setComentarios, receptor, setReceptor }
}

export default useInfoDestinoEvento;
