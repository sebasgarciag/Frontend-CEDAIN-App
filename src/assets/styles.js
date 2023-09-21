
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F1EFE3',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between', 
    paddingHorizontal: 10,
    paddingVertical: 15,
    marginBottom: 10,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  searchFilterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  searchInput: {
    flex: 1,
    height: 40,
    borderColor: '#8E8D8A',
    borderWidth: 1,
    borderRadius: 25,
    paddingHorizontal: 20,
    backgroundColor: '#FFFFFF',
    color: '#333',
    marginRight: 10,
  },
  filterButton: {
    padding: 10,
    borderRadius: 50,
    backgroundColor: '#FFFFFF',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  productContainer: {
    flex: 1,
    marginVertical: 10,
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
    padding: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  productItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#D3D1C9',
    backgroundColor: '#FFFFFF'
  },
  productImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  productDetails: {
    flex: 1,
    justifyContent: 'space-between', 
    paddingHorizontal: 10,
  },
  productName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  productDato: {
    fontSize: 16,
    color: '#8E8D8A',
  },
  arrowButton: {
      position: 'absolute',
      right: 10,
      top: '50%',
      transform: [{ translateY: -12 }], 
    },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 30,
    
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderRadius: 25
  },
  buttonText: {
    color: '#F1EFE3',
    fontSize: 16,
    marginLeft: 10,
  },

  entradaContainer: {
    flex: 1,
    marginVertical: 10
  },
  movItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#D3D1C9',
    backgroundColor: '#FFFFFF'
  },

  volverButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    height: 40,
    width: 120
  },

  cuandroInfoRegistro: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    margin: 3
  },
  subtituloInfoRegistro: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    
  },
  textoInfoRegistro: {
    fontSize: 16,
    color: '#8E8D8A',
  },
  movName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  movDato: {
    fontSize: 16,
    color: '#8E8D8A',
  },
  listaMovs: {
    borderColor: 'lightgray',
    flex: 1,
    padding: 5
  },
  textoProdMov:{
    paddingLeft: 10
  },
  titulosContainer:{
    flexDirection: 'row',
    m: 5,
    marginBottom: 15,
    justifyContent: 'space-between',
    paddingLeft: 5,
    paddingRight: 5
  },
  volverContainer:{
    flexDirection: 'row',
    justifyContent: 'center',
    margin: 10,
    alignItems: 'center'
    
  },
  movFolioSerie: {
    fontWeight: 'normal',
    fontSize: 20
  }


});

export default styles;
