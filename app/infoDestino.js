import Paginfo from "../src/pages/infoDestino";

const InfoDestino = ({ route }) => {
    return (
        <Paginfo objeto={route.params.object} />
    );
};

export default InfoDestino;