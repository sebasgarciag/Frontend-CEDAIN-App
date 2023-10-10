import Resumen from "../src/pages/resumenSalida";

const ResumenSalida = ({route}) => {
    return (
        <Resumen objeto={route.params.object} />
    );
};

export default ResumenSalida;