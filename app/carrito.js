import ArticulosCarrito from "../src/pages/carrito";

const Carrito = ({route}) => {
    return (
        <ArticulosCarrito carrito={route.params.object}/>
    );
};

export default Carrito;