import PaginfoEntrada from "../src/pages/infoDestinoEntrada";

const InfoDestinoEntrada = ({ route }) => {
    return (
        <PaginfoEntrada objeto={route.params.object}/>
    );
};

export default InfoDestinoEntrada;