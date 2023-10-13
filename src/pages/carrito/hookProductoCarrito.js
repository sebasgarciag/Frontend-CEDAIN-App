import { useState } from "react";
import { useEffect } from "react";
import ProductoCarrito from "../../components/entradasSalidas/productoCarrito";

const useCarrito = () => {
    const [carrito, setCarrito] = useState([]);
    const [carrito2, setCarrito2] = useState([]);
    const [salida, setSalida] = useState();
  
    const aumentarCantidad = (producto) => {

		const carritoActualizado = carrito2.map((item) => {
			if (item.detallesSalida.cantidad === producto.cantidad) {
				return {...item, detallesSalida: {...producto.detallesSalida, cantidad: producto.cantidad}}
			} else if (item.id_producto === producto.id_producto) {
				return { ...item, detallesSalida: {...producto.detallesSalida, cantidad: producto.detallesSalida.cantidad + 1 }};
			} else {
				return item;
			}
		});

		setCarrito2(carritoActualizado);
    };
  
    const disminuirCantidad = (producto) => {
		const carritoActualizado = carrito2.map((item) => {
			if (item.id_producto === producto.id_producto && item.detallesSalida.cantidad > 0) {
				return { ...item, detallesSalida: {...producto.detallesSalida, cantidad: producto.detallesSalida.cantidad - 1 }};
			} else {
				return item;
			}
    });

      	setCarrito2(carritoActualizado);
    };
  
    /**
 * Updates the quantity of a product in the cart.
 * @param {Object} producto - The product whose quantity needs to be updated.
 * @param {number|string} newCantidad - The new quantity to set for the product.
 */
function handleCantidad(producto, newCantidad) {
  	const newCarrito = carrito2.map((item) => {
		if (item.id_producto === producto.id_producto) {
			if (isNaN(parseInt(newCantidad))) {
				return {...item, detallesSalida: {...producto.detallesSalida, cantidad: 0}}
			} else if (parseInt(newCantidad) > producto.cantidad) {
				return {...item, detallesSalida: {...producto.detallesSalida, cantidad: producto.cantidad}}
			}
          	return { ...item, detallesSalida: {...producto.detallesSalida, cantidad: parseInt(newCantidad)}  };
		} else {
			return item;
		}
  	});
  	setCarrito2(newCarrito);
}

/**
* Adds a product to the cart or removes it if it already exists in the cart.
* @param {Object} producto - The product to add or remove from the cart.
*/
const handleCarrito = (producto) => {
  // Verifies if the product is already in the cart
  const productoExistenteIndex = carrito.findIndex(
      (item) => item.id_producto === producto.producto.id_producto
  );

  if (productoExistenteIndex !== -1) {
      // If the product already exists in the cart, remove it
      const carritoActualizado = [...carrito];
      carritoActualizado.splice(productoExistenteIndex, 1);
      setCarrito(carritoActualizado);
  } else {
      // If the product doesn't exist in the cart, add it
      const carritoActualizado = [
          ...carrito,
          {
              ...producto.producto,
              detallesSalida: {
                  id_producto: producto.producto.id_producto,
                  cantidad: 0,
                  precio: producto.producto.precio_venta,
              },
            cantidad: producto.cantidad,
          },
      ];
      setCarrito(carritoActualizado);
  }
};
    
      return { carrito, carrito2, handleCantidad, aumentarCantidad, disminuirCantidad, handleCarrito, setCarrito2, salida, setSalida };

  };
  
  export default useCarrito;







