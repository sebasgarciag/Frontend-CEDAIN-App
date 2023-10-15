const buttonStyles = {

  menuB: {
      flexDirection: 'row',
      justifyContent: 'flex-start', 
      width: 'auto',
      padding: 'auto', 
      
  },

  containerNavegacion: {
    backgroundColor: '#F1EFE3',
    flexDirection: 'row', 
    justifyContent: 'space-around', 
    padding: 10
  },

  volverB: {
      justifyContent: 'center', 
      alignItems: 'center', 
      padding: 'auto', 
      backgroundColor: 'gray',
  },
  filtrosB: {
      justifyContent: 'center', 
      alignItems: 'center', 
      padding: 'auto', 
      backgroundColor: 'gray',
  },
  
  exportarB: {
      justifyContent: 'center', 
      alignItems: 'center', 
      padding: 'auto', 
      backgroundColor: 'gray',
  },
  
  burgerButton: {
      width: 55, 
      height: 40,
      borderRadius: 20, 
      backgroundColor: 'lightgray',
  },

  userButton: {
      width: 40, 
      height: 40,
      borderRadius: 20, 
      backgroundColor: 'lightgray',
  },

  // This is the layout for buttons that appear at the bottom of the screen. pending aproval from team members
  bottomButtons: {
      alignItems:'baseline', 
      justifyContent: 'flex-end', 
      flex: 1, 
      alignSelf: 'center', 
      marginBottom: 20
  },

  container: {
      flex: 1,
      backgroundColor: '#F1EFE3',
    },

    containerWithHeader: {
      flex: 1,
      backgroundColor: '#F1EFE3',


    },
  
    importInventoryButton: {
      position: 'absolute',
      right: 50,
    },
    headerContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center', 
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
    productQuantity: {
      fontSize: 16,
      color: '#8E8D8A',
    },
    arrowButton: {
        position: 'absolute',
        right: 10,
        top: 15,
      },
      editarButton: {
        justifyContent: "center",
        alignItems: "center",
        padding: "auto",
        backgroundColor: "gray",
        height: 50
      },
      view_only_button: {
        color: "#CCCCCC",
      },
      editable_button: {
        color: "white",
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
      borderRadius: 25,
    },
    buttonText: {
      color: '#F1EFE3',
      fontSize: 16,
      marginLeft: 10,
    },




}
export default buttonStyles;