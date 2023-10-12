import { useState } from "react";
import ProductosAPI from "../../apis/productosApi";

const useAltaProducto = () => {
    const [nombre, setNombre] = useState("");
    const [medida, setMedida] = useState("");
    const [precioVenta, setPrecioVenta] = useState("");
    const [precioTrueque, setPrecioTrueque] = useState("");
    const [nombreCorto, setNombreCorto] = useState("");
    const [image, setImage] = useState(null);

    const { createProducto } = ProductosAPI();
	// nombre
	// 					id_tamanio
	// medida
	// precio_venta
	// precio_trueque
	// 					id_categoria
	// nombre_corto
	const [dataDropDownEvento, setDataDropDownEvento] = useState( [
		{ label: 'Item 1', value: '1' },
		{ label: 'Item 2', value: '2' },
		{ label: 'Item 3', value: '3' }
	]);

	const handleSubmit = async () => {
		//request a backend
		let new_producto = {
		  'nombre': nombre,
		  'medida': medida,
		  'precio_venta': precioVenta,
		  'precio_trueque': precioTrueque,
		  'nombre_corto': nombreCorto,
		  'id_categoria': 1,
		  'id_tamanio': 1,
		}
  
		// alert("Enlace clickeado");
		try{
		  await createProducto(new_producto);
		  alert('producto creado')
		}
		catch{
		  alert('No se pudo crear el producto')
		}
	  };


	return { dataDropDownEvento, nombre, setNombre, medida, setMedida, precioVenta, setPrecioVenta, precioTrueque, setPrecioTrueque, nombreCorto, setNombreCorto, image, setImage, handleSubmit }
}

export default useAltaProducto;
