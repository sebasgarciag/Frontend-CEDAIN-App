import {useState}  from 'react';

const useSalidaAlm = () => {
    const [salida, setSalida] = useState({
            idSalida: 1,
            folioSerie: 'S2023-001',
            cantidadArticulos: 120,
            fecha: '15/08/2023',
            receptor: 'Adrian Chavez',
            emisor: 'Nacho Soto',
            comunidad: 'Creel',
        });

    const [datosSalida, setDatosSalida] = useState([
        {
            producto: "producto1",
            cantidad: 0,    
            precio: 1,
            tamano: "mediano",
            foto: "C:/Users/alexi/Desktop/cedain/frontend/Frontend-CEDAIN-App/src/assets/imagenes/ware.jpg"
        },
        {
            producto: "producto2",
            cantidad: 0,
            precio: 2,
            tamano: "grande",
            foto: "C:/Users/alexi/Desktop/cedain/frontend/Frontend-CEDAIN-App/src/assets/imagenes/ware.jpg"
        },
        {
            producto: "producto3",
            cantidad: 0,
            precio: 3,
            tamano: "chico",
            foto: "C:/Users/alexi/Desktop/cedain/frontend/Frontend-CEDAIN-App/src/assets/imagenes/ware.jpg"
        },
        {
            producto: "producto4",
            cantidad: 0,
            precio: 4,
            tamano: "mediano",
            foto: "C:/Users/alexi/Desktop/cedain/frontend/Frontend-CEDAIN-App/src/assets/imagenes/ware.jpg"
        },
        {
            producto: "producto5",
            cantidad: 0,
            precio: 5,
            tamano: "grande",
            foto: "C:/Users/alexi/Desktop/cedain/frontend/Frontend-CEDAIN-App/src/assets/imagenes/ware.jpg"
        }
    
    ]);

   


    return { salida, datosSalida }
}

export default useSalidaAlm;