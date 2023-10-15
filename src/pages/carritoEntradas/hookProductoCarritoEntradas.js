import { useState } from "react";
import { useEffect } from "react";

const useCarritoEntradas = () => {
    const [carritoEntradas, setCarritoEntradas] = useState([]);
    const [carrito2Entradas, setCarrito2Entradas] = useState([]);
    const [entrada, setEntrada] = useState();
  
    const aumentarCantidad = (producto) => {
        const carritoActualizado = carrito2Entradas.map((item) => {
            if (item.id_producto === producto.id_producto) {
              return { ...item, detallesEntrada: {...producto.detallesEntrada, cantidad: producto.detallesEntrada.cantidad + 1 }};
            } else {
              return item;
            }
          });
      setCarrito2Entradas(carritoActualizado);
    };
  
    const disminuirCantidad = (producto) => {
      const carritoActualizado = carrito2Entradas.map((item) => {
        if (item.id_producto === producto.id_producto && item.detallesEntrada.cantidad > 0) {
            return { ...item, detallesEntrada: {...producto.detallesEntrada, cantidad: producto.detallesEntrada.cantidad - 1 }};
          } else {
            return item;
          }
    });

      setCarrito2Entradas(carritoActualizado);
    };
  
    function handleCantidad(producto, newCantidad) {
        const newCarrito = carrito2Entradas.map((item) => {
            if (item.id_producto === producto.id_producto) {
                if (isNaN(parseInt(newCantidad))) {
                  return {...item, detallesEntrada: {...producto.detallesEntrada, cantidad: 0}}
                }
                return { ...item, detallesEntrada: {...producto.detallesEntrada, cantidad: parseInt(newCantidad)}  };
            } else {
                return item;
            }
        });
        setCarrito2Entradas(newCarrito);
    }

    const handleCarrito = (producto) => {
      // Verifica si el producto ya está en el carrito
      const productoExistenteIndex = carritoEntradas.findIndex(
        (item) => item.id_producto === producto.producto.id_producto
      );
    
      if (productoExistenteIndex !== -1) {
        // Si el producto ya existe en el carrito, elimínalo
        const carritoActualizado = [...carritoEntradas];
        carritoActualizado.splice(productoExistenteIndex, 1);
        setCarritoEntradas(carritoActualizado);
      } else {
        // Si el producto no existe en el carrito, agrégalo
        const carritoActualizado = [
          ...carritoEntradas,
          {
            ...producto.producto,
            detallesEntrada: {
              id_producto: producto.producto.id_producto,
              cantidad: 0,
              precio: producto.producto.precio_venta,
            },
          },
        ];
        setCarritoEntradas(carritoActualizado);
      }
    };

    
      return { carritoEntradas, carrito2Entradas, handleCantidad, aumentarCantidad, disminuirCantidad, handleCarrito, setCarrito2Entradas, entrada, setEntrada};

  };
  
  export default useCarritoEntradas;