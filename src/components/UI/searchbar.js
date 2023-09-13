import * as React from 'react';
import { View } from 'react-native';
import { Searchbar } from 'react-native-paper';
import busquedaStyles from '../../assets/busqueda/styles';

const BarraBusqueda = () => {
  //const [searchQuery, setSearchQuery] = React.useState('');
  //const onChangeSearch = query => setSearchQuery(query);

  return (
    <View>
        <Searchbar
        placeholder="Buscar movimiento"
        icon="magnify"
        style = {busquedaStyles.busquedaContainer}
        />
    </View>
   
  );
};

export default BarraBusqueda;