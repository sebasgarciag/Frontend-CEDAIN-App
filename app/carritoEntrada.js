import ArticulosCarritoEntrada from "../src/pages/carritoEntradas"

const CarritoEntrada = ({route}) => {
  //console.log("Route", route.params.object)
  return (
    console.log("================ CARRITO ENTRADA =============="),
    console.log(route.params.object),
    //route.params.object contiene id_categoria, id_producto, id_tamanio,
    // medida, nombre, nombre_corto, precie_trueque, precio_venta, suspendido
    //de cada uno de los articulos seleccionados en pagina de Seleccionar Productos.
    <ArticulosCarritoEntrada objeto={route.params.object}/>
  );
};

export default CarritoEntrada