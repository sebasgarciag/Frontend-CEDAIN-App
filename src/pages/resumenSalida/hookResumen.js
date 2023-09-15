import { useState } from "react";

const useResumen = () => {
    const [salida, setSalida] = useState({
        receptor: "receptor1",
        emisor: "emisor1",
        comunidad: "comunidad1",
        evento: "evento1",
        observaciones: "observaciones1"
    });

    return salida;
}

export default useResumen;