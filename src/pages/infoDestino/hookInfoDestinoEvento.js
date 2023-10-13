import { useState,useEffect } from "react";
import salidasApi from "../../apis/salidasApi";

const useInfoDestinoEvento=()=>{
	const {getComunidades, getEventos}=salidasApi();
	const [comunidades, setComunidades] = useState([]);
	const [eventos, setEventos] = useState([]);

	const [salida, setSalida] = useState();
	const [carrito, setCarrito] = useState();

	const [comunidad, setComunidad] = useState({
		id_comunidad: 17,
		nombre: "No aplica"
	});
	const [evento, setEvento] = useState({
		id_evento: 6,
		nombre: "No aplica"
	});

	const [observaciones, setObservaciones] = useState('');
	const [receptor, setReceptor] = useState('');

	/**
 * Asynchronously fetches all communities and updates the state with the retrieved communities.
 * @async
 */
async function obtenerComunidades(){
    const response = await getComunidades();
    if (response !== null){
        setComunidades(response.reverse());
    }
}

/**
 * Asynchronously fetches all events and updates the state with the retrieved events.
 * @async
 */
async function obtenerEventos(){
    const response = await getEventos();
    if (response !== null){
        setEventos(response.reverse());
    }
}

	function limpiar() {
		setComunidad({
			id_comunidad: 17,
			nombre: "No aplica"
		});
		setEvento({
			id_evento: 6,
			nombre: "No aplica"
		});
		setObservaciones('');
		setReceptor('');
	}

// This hook is responsible for fetching the initial data when the component mounts.
useEffect(() => {
    obtenerComunidades();
    obtenerEventos();
}, []);

// This hook updates the salida state whenever comunidad or evento changes.
useEffect(() => {
    setSalida({
        ...salida,
        id_comunidad: comunidad.id_comunidad,
        Comunidad: {
            nombre: comunidad.nombre,
            id_comunidad: comunidad.id_comunidad
        },
        id_evento: evento.id_evento,
        Evento: {
            nombre: evento.nombre,
            id_evento: evento.id_evento
        }
    });
}, [comunidad, evento]);

// This hook updates specific properties of the salida state based on receptor and observaciones changes.
useEffect(() => {
    setSalida({
        ...salida,
        receptor: receptor,
        observaciones: observaciones,
    });
}, [receptor, observaciones]);

	return { comunidades, eventos, comunidad, evento, setComunidad, setEvento, observaciones, setObservaciones, receptor, setReceptor, obtenerComunidades, obtenerEventos, setSalida, carrito, setCarrito, salida, limpiar }
}

export default useInfoDestinoEvento;
