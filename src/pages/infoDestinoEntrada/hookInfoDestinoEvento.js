import { useState,useEffect } from "react";
import entradasApi from "../../apis/entradasApi";
import salidasApi from "../../apis/salidasApi";

const useInfoDestinoEvento=()=>{
	const {getComunidades, getEventos}=salidasApi();
	const [comunidades, setComunidades] = useState([]);
	const [eventos, setEventos] = useState([]);

	const [entrada, setEntrada] = useState();
	const [carrito, setCarrito] = useState();

	const [comunidad, setComunidad] = useState({});
	const [evento, setEvento] = useState({});

	const [observaciones, setObservaciones] = useState('');
	const [emisor, setEmisor] = useState('');

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
	},[]);


	useEffect(()=>{
		setEntrada({
			...entrada,
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
	},[comunidad, evento]);

	useEffect(()=>{
		setEntrada({
			...entrada,
			emisor: emisor,
			observaciones: observaciones,
		});
	}, [emisor, observaciones]);


	useEffect(()=>{
		console.log('comunidades', comunidades);
		console.log('eventos', eventos);
	} , [comunidades, eventos]);


	return { comunidades, eventos, comunidad, evento, setComunidad, setEvento, observaciones, setObservaciones, emisor, setEmisor, obtenerComunidades, obtenerEventos, setEntrada, carrito, setCarrito, entrada }
}

export default useInfoDestinoEvento;