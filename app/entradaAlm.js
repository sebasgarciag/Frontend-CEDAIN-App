import EntradaAlm from "../src/pages/entradaAlm/index";

const EntradaAlma = ({route}) => {
    return (
        <EntradaAlm entrada={route.params.object}/>
    );
};

export default EntradaAlma;
