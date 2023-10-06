import { useState } from "react";
import { useEffect } from "react";
import ProductoCarrito from "../../components/entradasSalidas/productoCarrito";

const useCarritoEntradas = () => {
    const [carritoEntradas, setCarritoEntradas] = useState([]);
    const [carrito2Entradas, setCarrito2Entradas] = useState([]);
  
    const aumentarCantidad = (producto) => {
        const carritoActualizado = carrito2Entradas.map((item) => {
            if (item.id_producto === producto.id_producto) {
              return { ...item, detallesSalida: {...producto.detallesSalida, cantidad: producto.detallesSalida.cantidad + 1 }};
            } else {
              return item;
            }
          });
      setCarrito2Entradas(carritoActualizado);
    };
  
    const disminuirCantidad = (producto) => {
      const carritoActualizado = carrito2Entradas.map((item) => {
        //console.log("item: ", item)
        if (item.id_producto === producto.id_producto && item.detallesSalida.cantidad > 0) {
            return { ...item, detallesSalida: {...producto.detallesSalida, cantidad: producto.detallesSalida.cantidad - 1 }};
          } else {
            return item;
          }
    });

      setCarrito2Entradas(carritoActualizado);
    };
  
    function handleCantidad(producto, newCantidad) {
      
      // console.log("producto", producto)
        const newCarrito = carrito2Entradas.map((item) => {
            if (item.id_producto === producto.id_producto) {
              console.log("item", item.detallesSalida)
                if (isNaN(parseInt(newCantidad))) {
                  return {...item, detallesSalida: {...producto.detallesSalida, cantidad: 0}}
                }
                return { ...item, detallesSalida: {...producto.detallesSalida, cantidad: parseInt(newCantidad)}  };
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
            detallesSalida: {
              id_producto: producto.producto.id_producto,
              cantidad: 0,
              precio: producto.producto.precio_venta,
            },
          },
        ];
        setCarritoEntradas(carritoActualizado);
      }
    
      console.log("carrito actualizado: ", carritoEntradas);
    };

    
      return { carritoEntradas, carrito2Entradas, handleCantidad, aumentarCantidad, disminuirCantidad, handleCarrito, setCarrito2Entradas};

  };
  
  export default useCarritoEntradas;