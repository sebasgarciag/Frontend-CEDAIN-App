import Resumen from "../src/pages/resumenEntrada";

const ResumenEntrada = ({route}) => {
    return (
        <Resumen objeto={route.params.object} />
    );
};

export default ResumenEntrada;