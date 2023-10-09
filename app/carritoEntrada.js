import ArticulosCarritoEntrada from "../src/pages/carritoEntradas"

const CarritoEntrada = ({route}) => {
  return (
    <ArticulosCarritoEntrada objeto={route.params.object}/>
  );
};

export default CarritoEntrada