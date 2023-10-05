const useObtenerProducto = (id_almacen, id_producto) => {
    const [producto, setProducto] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`http://localhost:8080/inventario/${id_almacen}/${id_producto}`);
                setProducto(response.data);
            } catch (error) {
                console.error('Error al obtener el producto:', error);
            }
        };

        if (id_producto) {
            fetchData();
        }
    }, [id_almacen, id_producto]);

    return { producto };
};