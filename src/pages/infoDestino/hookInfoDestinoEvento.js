import { useState,useEffect } from "react";
import salidasApi from "../../apis/salidasApi";

const useInfoDestinoEvento=()=>{
	const {getComunidades, getEventos}=salidasApi();
	const [comunidades, setComunidades] = useState([]);
	const [eventos, setEventos] = useState([]);

	const [comunidad, setComunidad] = useState(null);
	const [evento, setEvento] = useState(null);

	const [comentarios, setComentarios] = useState('');
	const [receptor, setReceptor] = useState('');

	async function obtenerComunidades(){
		const response= await getComunidades();
		if (response !== null){
			setComunidades(response);
		}
	}

	async function obtenerEventos(){
		const response= await getEventos();
		console.log(response)
		if (response !== null){
			setEventos(response);
		}
	}

	useEffect(()=>{
		obtenerComunidades();
		obtenerEventos();
	},[]);

	return { comunidades, eventos, comunidad, evento, setComunidad, setEvento, comentarios, setComentarios, receptor, setReceptor, obtenerComunidades, obtenerEventos }
}

export default useInfoDestinoEvento;
