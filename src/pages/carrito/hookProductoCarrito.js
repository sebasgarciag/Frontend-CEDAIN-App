import { useState } from "react";


const useCarrito = () => {
    const [carrito, setCarrito] = useState([
    { 
        id: 1, 
        nombre: 'Aretes de chaquira', 
        imagen: require('../../assets/imagenes/aretesChaquira.jpg'), 
        cantidad: 0,
        expandirInfo: false, // Agrega un estado para controlar la expansión de información
        tamaño: 'Pequeño',
        precio: 10,
        categoría: 'Joyas',
        nombreCorto: 'Aretes', 
    },
    { 
        id: 2, 
        nombre: 'Atrapasueños', 
        imagen:  require('../../assets/imagenes/atrapasuenios.jpeg'), 
        cantidad: 0,
        expandirInfo: false, // Agrega un estado para controlar la expansión de información
        tamaño: 'Mediano',
        precio: 10,
        categoría: 'Hilos',
        nombreCorto: 'Atrapa', 
    },
      
    { 
        id: 3, 
        nombre: 'Cuchara de madera', 
        imagen:  require('../../assets/imagenes/cucharaMadera.jpg'), 
        cantidad: 0,
        expandirInfo: false, // Agrega un estado para controlar la expansión de información
        tamaño: 'Grande',
        precio: 10,
        categoría: 'maderas',
        nombreCorto: 'cuchara mp', 
    },
    ]);
  
    const aumentarCantidad = (producto) => {
        const carritoActualizado = carrito.map((item) => {
            if (item.id === producto.id) {
              return { ...item, cantidad: item.cantidad + 1 };
            } else {
              return item;
            }
          });
      setCarrito(carritoActualizado);
    };
  
    const disminuirCantidad = (producto) => {
      const carritoActualizado = carrito.map((item) => {
        if (item.id === producto.id && item.cantidad > 0) {
            return { ...item, cantidad: item.cantidad - 1 };
          } else {
            return item;
          }
    });

      setCarrito(carritoActualizado);
    };
  
    function handleCantidad(producto, newCantidad) {
        const newCarrito = carrito.map((item) => {
            if (item.id === producto.id) {
                if (isNaN(parseInt(newCantidad))) {
                    newCantidad = 0;
                }
                return { ...item, cantidad: parseInt(newCantidad) };
            } else {
                return item;
            }
        });
        setCarrito(newCarrito);
    }

    const handleExpandirInfo = (producto) => {
        const carritoActualizado = carrito.map((item) => {
          if (item.id === producto.id) {
            return { ...item, expandirInfo: !item.expandirInfo };
          } else {
            return item;
          }
        });
        setCarrito(carritoActualizado);
      };
    
      return { carrito, handleCantidad, aumentarCantidad, disminuirCantidad, handleExpandirInfo };

  };
  
  export default useCarrito;







