import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F1EFE3',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between', 
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 15,
    marginBottom: 10,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 15,
  },
  searchFilterContainer: {
    alignSelf: 'flex-end',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    marginRight: 10
  },
  searchInput: {
    flex: 1,
    textAlign: 'right',
    verticalAlign: 'middle',
    height: 40,
    borderColor: '#8E8D8A',
    borderWidth: 1,
    borderRadius: 25,
    paddingHorizontal: 20,
    backgroundColor: '#FFFFFF',
    color: '#333',
    marginHorizontal: 10,
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
    marginRight: 10,
    fontWeight: 'bold',
  },

  entradaContainer: {
    flex: 1,
    marginVertical: 10
  },
  movItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
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
    width: '37%',
    padding: 10,
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
  textoProd:{
    paddingLeft: 10,
    width: "75%"
  },
  textoProdCarrito:{
    paddingLeft: 10,
    width: "60%"
  },
  textoCantidadCarrito: {
    textAlign: "center",
    fontSize: 20, 
    fontWeight: "bold" , 
    width: "40%",
    verticalAlign: "middle",
  },
  containerCantidadCarrito: {
    flex: 1, 
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'space-between',
  },
  textoCantidad: {
    textAlign: "center",
    fontSize: 20, 
    fontWeight: "bold" , 
    width: "25%",
    verticalAlign: "middle",
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
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
  view_only: {
    color: "gray",
  },
  editable: {
    color: "black",
  },
  dropdownRol: {
    margin: 16,
    marginTop: 0,
    marginBottom: 0,
    height: 50,
    backgroundColor: "white",
    borderRadius: 12,
    padding: 12,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  modalContainer: {
    backgroundColor: 'white', 
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center', 
    margin: 10
  },
  containerDropDown: {
		padding: 16
	},
	dropdown: {
		padding: 10,
		borderColor: 'gray',
		borderWidth: 0.5,
		borderRadius: 8
	},
	iconDropDown: {
		marginRight: "2%"
	},
	labelDropDown: {
		backgroundColor: 'white',
		paddingHorizontal: 8,
		fontSize: 14
	},
	placeholderStyleDropDown: {
		fontSize: 16
	},
	selectedTextStyleDropDown: {
		fontSize: 16
	},
	iconStyleDropDown: {
		width: 20,
		height: 20
	},
	inputSearchStyleDropDown: {
		height: 40,
		fontSize: 16
	},
  headerContainerOnlyText: {
    flexDirection: 'row',
    justifyContent: 'center', 
    paddingHorizontal: 10,
    paddingVertical: 15,
    marginBottom: 10,
  },
  icon: {
    marginRight: 5,
  },
  item: {
    padding: 17,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textItem: {
    flex: 1,
    fontSize: 16,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  viewOnlySelectedTextStyle: {
    fontSize: 16,
    color: "gray",
  },
  editableSelectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
  link: {
    fontSize: 18,
    textDecorationLine: "underline",
    color: "blue",
  },

});

export default styles;