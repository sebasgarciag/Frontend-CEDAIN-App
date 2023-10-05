import Inventario2 from "../src/pages/inventario";

const InventarioHome = ({route}) => {
    let almacen2 = 1;
    //console.log(almacen2);

    if(route.params == null){
        console.log(almacen2);
        return (
            <Inventario2 almacen={almacen2}/>
        );
    }else{
        return (
            <Inventario2 almacen={route.params}/>
        );

    }    
};

export default InventarioHome;

