import {useState}  from 'react';

const useSeleccion = () => {
    const [productos, setProductos] = useState([
        {
            id: 1,
            nombre: 'Producto 1',
            categoria: 'Categoria 1',
            imagen: require('../../assets/imagenes/aretesChaquira.jpg'), 
            cantidad: 0,
            expandirInfo: false, // Agrega un estado para controlar la expansión de información
            tamaño: 'Pequeño',
            precio: 10,
            nombreCorto: 'Aretes', 
        }, 
        {
            id: 2,
            nombre: 'Producto 2',
            categoria: 'Categoria 2'
        }, 
        {
            id: 23,
            nombre: 'Producto 23',
            categoria: 'Categoria 2'
        }, 
        {
            id: 24,
            nombre: 'Producto 24',
            categoria: 'Categoria 2'
        },
        {
            id: 25,
            nombre: 'Producto 25',
            categoria: 'Categoria 2'
        },
        {
            id: 26,
            nombre: 'Producto 26',
            categoria: 'Categoria 2'
        },
        {
            id: 3,
            nombre: 'Producto 3',
            categoria: 'Categoria 3'
        }, 
        {
            id: 4,
            nombre: 'Producto 4',
            categoria: 'Categoria 4'
        }, 
        {
            id: 5,
            nombre: 'Producto 5',
            categoria: 'Categoria 5'
        }
    ]);

    const [categorias, setCategorias] = useState(['Categoria 1', 'Categoria 2', 'Categoria 3', 'Categoria 4', 'Categoria 5']);


    return { productos, categorias }
}

export default useSeleccion;