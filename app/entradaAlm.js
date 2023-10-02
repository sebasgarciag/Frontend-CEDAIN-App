import EntradaAlm from "../src/pages/entradaAlm/index";

const EntradaAlma = ({route}) => {
    return (
        <EntradaAlm entrada={route.params.data}/>
    );
};

export default EntradaAlma;
