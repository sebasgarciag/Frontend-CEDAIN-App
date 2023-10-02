import SalidaAlm from "../src/pages/salidaAlm/index";

const SalidaAlma = ({route}) => {
    return (
        <SalidaAlm salida={route.params.object}/>
    );
};

export default SalidaAlma;
