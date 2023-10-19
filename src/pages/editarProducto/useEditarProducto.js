import { useState, useEffect } from "react";
import ProductosAPI from "../../apis/productosApi";
import { useIsFocused } from "@react-navigation/native";

const useEditarProducto=(producto)=>{
    const [isEditable, setEditable] = useState(false);
    const [nombre, setNombre] = useState(producto.nombre);
    const [medida, setMedida] = useState(producto.medida);
    const [precioVenta, setPrecioVenta] = useState(producto.precio_venta);
    const [precioTrueque, setPrecioTrueque] = useState(producto.precio_trueque);
    const [nombreCorto, setNombreCorto] = useState(producto.nombre_corto);
    const [tamanio, setTamanio] = useState(producto.id_tamanio);
    const [categoria, setCategoria] = useState(producto.id_categoria);
    const [tamaniosData, setTamaniosData] = useState([]);
    const [categoriasData, setCategoriasData] = useState([]);
    const [image, setImage] = useState(null);
	const [editarText, setEditarText] = useState("Editar");
	const [open, setOpen] = useState(Boolean(producto.suspendido));
	const [loading, setLoading] = useState(false);
	
    const { getTodosTamanios , getTodasCategorias, updateProductoConImagen } = ProductosAPI();
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

		try {
			await updateProductoConImagen(formData, producto.id_producto)
			producto.nombre = nombre
			producto.medida = medida
			producto.precio_venta = precioVenta
			producto.precio_trueque = precioTrueque
			producto.nombre_corto = nombreCorto
			producto.suspendido = open
			producto.id_tamanio = tamanio
			producto.id_categoria = categoria
			alert('producto actualizado')
			console.log('Producto Actualizado')
		}
		
		catch{
		  alert('No se pudo actualizar el producto')
		  setNombre(producto.nombre)
		  setMedida(producto.medida)
		  setPrecioVenta(producto.precio_venta)
		  setPrecioTrueque(producto.precio_trueque)
		  setNombreCorto(producto.nombre_corto)
		  setOpen(producto.suspendido)
		  setTamanio(producto.id_tamanio)
		  setCategoria(producto.id_categoria)
		}
		setEditarText("Editar");
		setEditable(!isEditable);
	};
	
	const handleEditable = () => {
		// !isEditable
		if (isEditable) {
			// Qué pasar cuando cancelas
			setEditarText("Editar");
			setNombre(producto.nombre)
			setMedida(producto.medida)
			setPrecioVenta(producto.precio_venta)
			setPrecioTrueque(producto.precio_trueque)
			setNombreCorto(producto.nombre_corto)
			setOpen(Boolean(producto.suspendido))
			setTamanio(producto.id_tamanio)
			setCategoria(producto.id_categoria)
			// volvera tomar los valores de la BDD
		} else {
		// Qué pasar cuando cambias de modo no editar a modo editar
		setEditarText("Cancelar edición");
	}
	
	setEditable(!isEditable);
};

async function getListadoTamanios() {
	const response = await getTodosTamanios();
	
	if (response !== null) {
		console.log('tamanios');
		console.log(response.data);
		// Create an array to hold the tamanios data
		const tamaniosDataList = [];
		
		// Iterate over the response data and create objects
		for (const item of response.data) {
			// Assuming 'id_tamanio' and 'descripcion' are properties in each 'item'
			const tamanioObject = {
				label: item.descripcion,
				value: item.id_tamanio,
			};
			console.log(tamanioObject)
			tamaniosDataList.push(tamanioObject);
		}
		setTamaniosData(tamaniosDataList);
        }
    }
	
    async function getListadoCategorias() {
		const response = await getTodasCategorias();
		
        if (response !== null) {
			console.log('categorias');
			console.log(response.data);
			// Create an array to hold the tamanios data
			const categoriasDataList = [];
			
			// Iterate over the response data and create objects
			for (const item of response.data) {
				// Assuming 'id_tamanio' and 'descripcion' are properties in each 'item'
				const categoriaObject = {
					label: item.nombre,
					value: item.id_categoria,
				};
				console.log(categoriaObject)
				categoriasDataList.push(categoriaObject);
			}
            setCategoriasData(categoriasDataList);
        }
    }

    useEffect(() => {
        if(isFocused){ 
            getListadoTamanios();
			getListadoCategorias();
			setImage(null);
			setNombre(producto.nombre)
			setMedida(producto.medida)
			setPrecioVenta(producto.precio_venta)
			setPrecioTrueque(producto.precio_trueque)
			setNombreCorto(producto.nombre_corto)
			setOpen(Boolean(producto.suspendido))
			setTamanio(producto.id_tamanio)
			setCategoria(producto.id_categoria)
        }
    }, [isFocused]);

	return { isEditable, editarText, handleEditable, nombre, setNombre, medida, setMedida, precioVenta, setPrecioVenta, precioTrueque, setPrecioTrueque, nombreCorto, setNombreCorto, image, setImage, handleSubmit, open, setOpen, tamaniosData, categoriasData, tamanio, categoria, setTamanio, setCategoria, loading, setLoading}
}

export default useEditarProducto;