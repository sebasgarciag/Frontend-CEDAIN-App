import {useState}  from 'react';

const useSeleccion = () => {
    const [productos, setProductos] = useState([
        {
            idProducto: 1,
            nombreProducto: 'Producto 1',
            categoria: 'Categoria 1'
        }, 
        {
            idProducto: 2,
            nombreProducto: 'Producto 2',
            categoria: 'Categoria 2'
        }, 
        {
            idProducto: 3,
            nombreProducto: 'Producto 3',
            categoria: 'Categoria 3'
        }, 
        {
            idProducto: 4,
            nombreProducto: 'Producto 4',
            categoria: 'Categoria 4'
        }
    ]);

    const [categorias, setCategorias] = useState(['Categoria 1', 'Categoria 2', 'Categoria 3', 'Categoria 4', 'Categoria 5']);


    return { productos, categorias }
}

export default useSeleccion;