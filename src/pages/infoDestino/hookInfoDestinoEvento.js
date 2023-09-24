import { useState } from "react";

const useInfoDestinoEvento=()=>{
	const [dataDropDownEvento, setDataDropDownEvento] = useState( [
		{ label: 'Item 1', value: '1' },
		{ label: 'Item 2', value: '2' },
		{ label: 'Item 3', value: '3' }
	]);

	const [valueEvento, setValueEvento] = useState(null);


	return { setValueEvento, dataDropDownEvento, valueEvento }
}

export default useInfoDestinoEvento;
