import { useState } from "react";

const useAltaProducto = () => {
    const [isEditable, setEditable] = useState(false);
    const [nombre, setNombre] = useState(producto.nombre);
    const [medida, setMedida] = useState(producto.medida);
    const [precioVenta, setPrecioVenta] = useState(producto.precio_venta);
    const [precioTrueque, setPrecioTrueque] = useState(producto.precio_trueque);
    const [nombreCorto, setNombreCorto] = useState(producto.nombre_corto);
    const [image, setImage] = useState(null);
    const [editarText, setEditarText] = useState("Editar");

    const { updateProducto } = ProductosAPI();
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
		let new_producto_data = {
		  'nombre': nombre,
		  'medida': medida,
		  'precio_venta': precioVenta,
		  'precio_trueque': precioTrueque,
		  'nombre_corto': nombreCorto,
		}
  
		// alert("Enlace clickeado");
		try{
		  await updateProducto(new_producto_data, producto.id_producto);
		  alert('producto actualizado')
		}
		catch{
		  alert('No se pudo actualizar el producto')
		  setNombre(producto.nombre)
		  setMedida(producto.medida)
		  setPrecioVenta(producto.precio_venta)
		  setPrecioTrueque(producto.precio_trueque)
		  setNombreCorto(producto.nombre_corto)
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
		// volvera tomar los valores de la BDD
	} else {
		// Qué pasar cuando cambias de modo no editar a modo editar
		setEditarText("Cancelar edición");
	}

	setEditable(!isEditable);
	// togglear valor del botón editar-cancelar edición
	// prender submit
	// si se cancela edición
	// volver los valores a los que estaban inicialmente
	// apagar submit
	};


	return { isEditable, editarText, handleEditable, dataDropDownEvento, nombre, setNombre, medida, setMedida, precioVenta, setPrecioVenta, precioTrueque, setPrecioTrueque, nombreCorto, setNombreCorto, image, setImage, handleSubmit }
}

export default useAltaProducto;
