import { useState } from "react";
import { useEffect } from "react";

const useCarrito = () => {
    const [carrito, setCarrito] = useState([]);
  
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

      const handleCarrito = (producto) => {
        const carritoActualizado = [...carrito, producto]

        setCarrito(carritoActualizado);
      };

    
      return { carrito, handleCantidad, aumentarCantidad, disminuirCantidad, handleExpandirInfo, handleCarrito };

  };
  
  export default useCarrito;







