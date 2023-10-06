import { useState,useEffect } from "react";
import salidasApi from "../../apis/salidasApi";

const useInfoDestinoEvento=()=>{
	const {getComunidades, getEventos}=salidasApi();
	const [comunidades, setComunidades] = useState([]);
	const [eventos, setEventos] = useState([]);

	const [salida, setSalida] = useState();
	const [carrito, setCarrito] = useState();

	const [comunidad, setComunidad] = useState({});
	const [evento, setEvento] = useState({});

	const [observaciones, setObservaciones] = useState('');
	const [receptor, setReceptor] = useState('');

	async function obtenerComunidades(){
		const response= await getComunidades();
		if (response !== null){
			setComunidades(response);
		}
	}

	async function obtenerEventos(){
		const response= await getEventos();
		if (response !== null){
			setEventos(response);
		}
	}

	useEffect(()=>{
		obtenerComunidades();
		obtenerEventos();
	}, []);


	useEffect(()=>{
		setSalida({
			...salida,
			id_comunidad: comunidad.id,
			Comunidad: {
				nombre: comunidad.nombre,
				id_comunidad: comunidad.id_comunidad
			},
			id_evento: evento.id,
			Evento: {
				nombre: evento.nombre,
				id_evento: evento.id_evento
			}
		});
	}, [comunidad, evento]);

	useEffect(()=>{
		setSalida({
			...salida,
			receptor: receptor,
			observaciones: observaciones,
		});
	}, [receptor, observaciones]);

	return { comunidades, eventos, comunidad, evento, setComunidad, setEvento, observaciones, setObservaciones, receptor, setReceptor, obtenerComunidades, obtenerEventos, setSalida, carrito, setCarrito, salida }
}

export default useInfoDestinoEvento;
