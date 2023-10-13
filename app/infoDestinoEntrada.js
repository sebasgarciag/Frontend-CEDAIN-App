import Paginfo from "../src/pages/infoDestinoEntrada";

const InfoDestinoEntrada = ({ route }) => {
    return (
        console.log("================ InfoDestinoEntrada =============="),
        //es el mismo objeto, un array de objetos con parametros de cada item en carrito, que se manda a 
        //carritoEntrada
        <Paginfo objeto={route.params.object}/>
    );
};

export default InfoDestinoEntrada;