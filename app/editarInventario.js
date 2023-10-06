import EditProductScreen from "../src/pages/editarInventario/index";

const editProductScreen = ({producto,nombre, cantidad}) => {
    return (
        <EditProductScreen producto ={producto} nombre ={nombre} cantidad ={cantidad}/>
    );
};

export default editProductScreen;