import ArticulosCarritoEntrada from "../src/pages/carritoEntradas"

const CarritoEntrada = ({route}) => {
  //console.log("Route", route.params.object)
  return (
    <ArticulosCarritoEntrada objeto={route.params.object}/>
  );
};

export default CarritoEntrada