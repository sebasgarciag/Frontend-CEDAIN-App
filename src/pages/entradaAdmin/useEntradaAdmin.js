import {useState}  from 'react';

const useEntradaAdmin = () => {
    const [entrada, setEntrada] = useState({
            idEntrada: 1,
            folioSerie: 'E2023-001',
            cantidadArticulos: 120,
            fecha: '15/08/2023',
            receptor: 'Adrian Chavez',
            emisor: 'Nacho Soto',
            comunidad: 'Creel',
            observaciones: 'Olia feo'
        });

    const [datosEntrada, setDatosEntrada] = useState([
        {
            producto: "Nombre Producto",
            cantidad: 0,    
            precio: 1,
            tamano: "mediano",
            importe: 50,
            foto: "C:/Users/alexi/Desktop/cedain/frontend/Frontend-CEDAIN-App/src/assets/imagenes/ware.jpg"
        },
        {
            producto: "Nombre Producto",
            cantidad: 0,
            precio: 2,
            tamano: "grande",
            importe: 50,
            foto: "C:/Users/alexi/Desktop/cedain/frontend/Frontend-CEDAIN-App/src/assets/imagenes/ware.jpg"
        },
        {
            producto: "Nombre Producto",
            cantidad: 0,
            precio: 3,
            tamano: "chico",
            importe: 50,
            foto: "C:/Users/alexi/Desktop/cedain/frontend/Frontend-CEDAIN-App/src/assets/imagenes/ware.jpg"
        },
        {
            producto: "Nombre Producto",
            cantidad: 0,
            precio: 4,
            tamano: "mediano",
            importe: 50,
            foto: "C:/Users/alexi/Desktop/cedain/frontend/Frontend-CEDAIN-App/src/assets/imagenes/ware.jpg"
        },
        {
            producto: "Nombre Producto",
            cantidad: 0,
            precio: 5,
            tamano: "grande",
            importe: 50,
            foto: "C:/Users/alexi/Desktop/cedain/frontend/Frontend-CEDAIN-App/src/assets/imagenes/ware.jpg"
        }
    
    ]);

   


    return { entrada, datosEntrada }
}

export default useEntradaAdmin;