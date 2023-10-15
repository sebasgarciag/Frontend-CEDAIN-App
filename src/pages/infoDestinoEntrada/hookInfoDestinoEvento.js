import { useState,useEffect } from "react";
import salidasApi from "../../apis/salidasApi";

const useInfoDestinoEventoEntradas=()=>{
	const {getComunidades, getEventos}=salidasApi();
	const [comunidades, setComunidades] = useState([]);
	const [eventos, setEventos] = useState([]);

	const [entrada, setEntrada] = useState([]);
	const [carrito, setCarrito] = useState([]);

	const [comunidad, setComunidad] = useState({
		id_comunidad: 17,
		nombre: "No aplica"
	});
	const [evento, setEvento] = useState({
		id_evento: 6,
		nombre: "No aplica"
	});

	const [observaciones, setObservaciones] = useState('');
	const [emisor, setEmisor] = useState('');

	async function obtenerComunidades(){
		const response= await getComunidades();
		if (response !== null){
			setComunidades(response.reverse());
		}
	}

	async function obtenerEventos(){
		const response= await getEventos();
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
		setEmisor('');
	}

	useEffect(()=>{
		obtenerComunidades();
		obtenerEventos();
	},[]);


	useEffect(()=>{
		setEntrada({
			...entrada,
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

	useEffect(()=>{
		setEntrada({
			...entrada,
			emisor: emisor,
			observaciones: observaciones,
		});
	}, [emisor, observaciones]);

	//useEffect(()=>{
	//	console.log('entrada', entrada);
	//}, [entrada]);

	return { comunidades, eventos, comunidad, evento, setComunidad, setEvento, observaciones, setObservaciones, emisor, setEmisor, obtenerComunidades, obtenerEventos, setEntrada, carrito, setCarrito, entrada, limpiar }
}

export default useInfoDestinoEventoEntradas;