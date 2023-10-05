import {useState}  from 'react';

const useInventario = () => {
   
    const [productos, setProductos] = useState([
        {
            producto: "Producto 1",
            cantidad: 0,    
            precio: 1,
            tamano: "mediano",
            importe: 50,
            foto: "C:/Users/Adrian/Desktop/CARRERA 5TO/SeguridadSistemasSoftware/Desarrollo/Frontend-CEDAIN-App/src/assets/imagenes/ware.jpg"
        },
        {
            producto: "Producto 2",
            cantidad: 0,
            precio: 2,
            tamano: "grande",
            importe: 50,
            foto: "C:/Users/Adrian/Desktop/CARRERA 5TO/SeguridadSistemasSoftware/Desarrollo/Frontend-CEDAIN-App/src/assets/imagenes/ware.jpg"
        },
        {
            producto: "Producto 3",
            cantidad: 0,
            precio: 3,
            tamano: "chico",
            importe: 50,
            foto: "C:/Users/Adrian/Desktop/CARRERA 5TO/SeguridadSistemasSoftware/Desarrollo/Frontend-CEDAIN-App/src/assets/imagenes/ware.jpg"
        },
        {
            producto: "Producto 4",
            cantidad: 0,
            precio: 4,
            tamano: "mediano",
            importe: 50,
            foto: "C:/Users/Adrian/Desktop/CARRERA 5TO/SeguridadSistemasSoftware/Desarrollo/Frontend-CEDAIN-App/src/assets/imagenes/ware.jpg"
        },
        {
            producto: "Producto 5",
            cantidad: 0,
            precio: 5,
            tamano: "grande",
            importe: 50,
            foto: "C:/Users/Adrian/Desktop/CARRERA 5TO/SeguridadSistemasSoftware/Desarrollo/Frontend-CEDAIN-App/src/assets/imagenes/ware.jpg"
        },

        {
            producto: "Producto 6",
            cantidad: 0,    
            precio: 1,
            tamano: "mediano",
            importe: 50,
            foto: "C:/Users/Adrian/Desktop/CARRERA 5TO/SeguridadSistemasSoftware/Desarrollo/Frontend-CEDAIN-App/src/assets/imagenes/ware.jpg"
        },

        {
            producto: "Producto 7",
            cantidad: 0,    
            precio: 1,
            tamano: "mediano",
            importe: 50,
            foto: "C:/Users/Adrian/Desktop/CARRERA 5TO/SeguridadSistemasSoftware/Desarrollo/Frontend-CEDAIN-App/src/assets/imagenes/ware.jpg"
        },

        {
            producto: "Producto 8",
            cantidad: 0,    
            precio: 1,
            tamano: "mediano",
            importe: 50,
            foto: "C:/Users/Adrian/Desktop/CARRERA 5TO/SeguridadSistemasSoftware/Desarrollo/Frontend-CEDAIN-App/src/assets/imagenes/ware.jpg"
        },

        {
            producto: "Producto 9",
            cantidad: 0,    
            precio: 1,
            tamano: "mediano",
            importe: 50,
            foto: "C:/Users/Adrian/Desktop/CARRERA 5TO/SeguridadSistemasSoftware/Desarrollo/Frontend-CEDAIN-App/src/assets/imagenes/ware.jpg"
        },
    


    ]);

    
   


    return { productos }
}

export default useInventario;