import ArticulosCarrito from "../src/pages/carrito";

const Carrito = ({route}) => {
    return (
        <ArticulosCarrito objeto={route.params.object}/>
    );
};

export default Carrito;