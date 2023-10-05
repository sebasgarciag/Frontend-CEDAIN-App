import EditarProducto from "../src/pages/editarProducto";

const EditarProductoPage = ({route}) => {
    return (
        <EditarProducto idProducto={route.params} />
    );
};

export default EditarProductoPage;
