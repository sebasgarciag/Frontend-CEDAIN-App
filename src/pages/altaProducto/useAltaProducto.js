import { useState, useEffect } from "react";
import ProductosAPI from "../../apis/productosApi";
import inventarioApi from "../../apis/inventarioApi"
import { useIsFocused } from "@react-navigation/native";
import { useNavigation } from '@react-navigation/native';
import almacenesReales from "../../assets/almacenes";


const useAltaProducto = () => {
    const [nombre, setNombre] = useState("");
    const [medida, setMedida] = useState("");
    const [precioVenta, setPrecioVenta] = useState("");
    const [precioTrueque, setPrecioTrueque] = useState("");
    const [nombreCorto, setNombreCorto] = useState("");
    const [image, setImage] = useState(null);
	const [tamanio, setTamanio] = useState();
    const [categoria, setCategoria] = useState();
    const [tamaniosData, setTamaniosData] = useState([]);
    const [categoriasData, setCategoriasData] = useState([]);
	const [open, setOpen] = useState(false);    
	const [loading, setLoading] = useState(false);
	const navigation = useNavigation();

    const { createProducto, getTodosTamanios, getTodasCategorias } = ProductosAPI();
	const { postCrearInventario } = inventarioApi();
	const isFocused = useIsFocused();

	const handleSubmit = async () => {
		const formData = new FormData();
        formData.append('nombre', nombre,);
        formData.append('medida', medida,);
        formData.append('precio_venta', precioVenta,);
        formData.append('precio_trueque', precioTrueque,);
        formData.append('nombre_corto', nombreCorto,);
        formData.append('suspendido', open,);
        formData.append('id_tamanio', tamanio,);
        formData.append('id_categoria', categoria,);

        if (image) {
            formData.append('imagen', {
                uri: image,
                type: 'image/jpeg',
                name: 'product-image.jpg',
            });
        }




		// alert("Enlace clickeado");
		try{
		  const response = await createProducto(formData);
		//   console.log(response.status)
		  if (response.status == 201){
			// console.log('entra')
			try{
				for (let i = 0; i < almacenesReales.length; i++) {
					const idAlmacen = almacenesReales[i].id_almacen;
					console.log(idAlmacen);
					await postCrearInventario({
						"id_producto":response.data.id_producto, 
						"id_almacen": idAlmacen, 
						"cantidad":0
					})
				}
			}
			catch{
				//
			}
			navigation.navigate('listadoProductos')
		  }
		}
		catch{
		  alert('No se pudo crear el producto')
		}
	  };
	async function getListadoTamanios() {
	const response = await getTodosTamanios();
	
	if (response !== null) {
		// console.log('tamanios');
		// console.log(response.data);
		// Create an array to hold the tamanios data
		const tamaniosDataList = [];
		
		// Iterate over the response data and create objects
		for (const item of response.data) {
			// Assuming 'id_tamanio' and 'descripcion' are properties in each 'item'
			const tamanioObject = {
				label: item.descripcion,
				value: item.id_tamanio,
			};
			// console.log(tamanioObject)
			tamaniosDataList.push(tamanioObject);
		}
		setTamaniosData(tamaniosDataList);
		}
	}
	
	async function getListadoCategorias() {
		const response = await getTodasCategorias();
		
		if (response !== null) {
			// console.log('categorias');
			// console.log(response.data);
			// Create an array to hold the tamanios data
			const categoriasDataList = [];
			
			// Iterate over the response data and create objects
			for (const item of response.data) {
				// Assuming 'id_tamanio' and 'descripcion' are properties in each 'item'
				const categoriaObject = {
					label: item.nombre,
					value: item.id_categoria,
				};
				// console.log(categoriaObject)
				categoriasDataList.push(categoriaObject);
			}
			setCategoriasData(categoriasDataList);
		}
	}

	useEffect(() => {
		if(isFocused){ 
			getListadoTamanios();
			getListadoCategorias();
			setNombre("");
			setMedida("");
			setPrecioVenta(0);
			setPrecioTrueque(0);
			setNombreCorto("");
			setOpen(Boolean(0));
			setTamanio(null);
			setCategoria(null);
		}
	}, [isFocused]);

	return { nombre, setNombre, medida, setMedida, precioVenta, setPrecioVenta, precioTrueque, setPrecioTrueque, nombreCorto, setNombreCorto, image, setImage, handleSubmit, setTamanio, setCategoria, tamaniosData, categoriasData, open, setOpen, loading, setLoading }
}

export default useAltaProducto;
