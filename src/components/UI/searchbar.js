import * as React from 'react';
import { Searchbar } from 'react-native-paper';
import busquedaStyles from '../../assets/busqueda/styles';

const BarraBusqueda = () => {
  //const [searchQuery, setSearchQuery] = React.useState('');
  //const onChangeSearch = query => setSearchQuery(query);

  return (
   
      <Searchbar
      placeholder="Buscar movimiento"
      icon="magnify"
      style = {busquedaStyles.busqueda}
      />
    
   
  );
};

export default BarraBusqueda;