import ArticulosCarritoEntrada from "../src/pages/carritoEntradas"

const CarritoEntrada = ({route}) => {
  return (
    <ArticulosCarritoEntrada carrito={route.params.object}/>
  );
};

export default CarritoEntrada