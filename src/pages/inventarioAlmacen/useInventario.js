import {useState}  from 'react';

const useInventario = () => {
   
    const [productos, setProductos] = useState([
        {
            producto: "Nombre Producto",
            cantidad: 0,    
            precio: 1,
            tamano: "mediano",
            importe: 50,
            foto: "C:/Users/Adrian/Desktop/CARRERA 5TO/SeguridadSistemasSoftware/Desarrollo/Frontend-CEDAIN-App/src/assets/imagenes/ware.jpg"
        },
        {
            producto: "Nombre Producto",
            cantidad: 0,
            precio: 2,
            tamano: "grande",
            importe: 50,
            foto: "C:/Users/Adrian/Desktop/CARRERA 5TO/SeguridadSistemasSoftware/Desarrollo/Frontend-CEDAIN-App/src/assets/imagenes/ware.jpg"
        },
        {
            producto: "Nombre Producto",
            cantidad: 0,
            precio: 3,
            tamano: "chico",
            importe: 50,
            foto: "C:/Users/Adrian/Desktop/CARRERA 5TO/SeguridadSistemasSoftware/Desarrollo/Frontend-CEDAIN-App/src/assets/imagenes/ware.jpg"
        },
        {
            producto: "Nombre Producto",
            cantidad: 0,
            precio: 4,
            tamano: "mediano",
            importe: 50,
            foto: "C:/Users/Adrian/Desktop/CARRERA 5TO/SeguridadSistemasSoftware/Desarrollo/Frontend-CEDAIN-App/src/assets/imagenes/ware.jpg"
        },
        {
            producto: "Nombre Producto",
            cantidad: 0,
            precio: 5,
            tamano: "grande",
            importe: 50,
            foto: "C:/Users/Adrian/Desktop/CARRERA 5TO/SeguridadSistemasSoftware/Desarrollo/Frontend-CEDAIN-App/src/assets/imagenes/ware.jpg"
        },

        {
            producto: "Nombre Producto",
            cantidad: 0,    
            precio: 1,
            tamano: "mediano",
            importe: 50,
            foto: "C:/Users/Adrian/Desktop/CARRERA 5TO/SeguridadSistemasSoftware/Desarrollo/Frontend-CEDAIN-App/src/assets/imagenes/ware.jpg"
        },

        {
            producto: "Nombre Producto",
            cantidad: 0,    
            precio: 1,
            tamano: "mediano",
            importe: 50,
            foto: "C:/Users/Adrian/Desktop/CARRERA 5TO/SeguridadSistemasSoftware/Desarrollo/Frontend-CEDAIN-App/src/assets/imagenes/ware.jpg"
        },

        {
            producto: "Nombre Producto",
            cantidad: 0,    
            precio: 1,
            tamano: "mediano",
            importe: 50,
            foto: "C:/Users/Adrian/Desktop/CARRERA 5TO/SeguridadSistemasSoftware/Desarrollo/Frontend-CEDAIN-App/src/assets/imagenes/ware.jpg"
        },

        {
            producto: "Nombre Producto",
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