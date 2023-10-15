import Paginfo from "../src/pages/infoDestinoEntrada";

const InfoDestinoEntrada = ({ route }) => {
    return (
        <Paginfo objeto={route.params.object}/>
    );
};

export default InfoDestinoEntrada;