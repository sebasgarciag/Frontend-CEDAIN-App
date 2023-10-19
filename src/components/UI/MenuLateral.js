import * as React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { DrawerContentScrollView, createDrawerNavigator } from '@react-navigation/drawer';
import CrearSalida from '../../../app/crearSalida';
import Carrito from '../../../app/carrito';
import InfoDestino from '../../../app/infoDestino';
import { StyleSheet } from 'react-native';
import MenuButtonItem from './MenuButtonItem';
import PagInicio from './pagInicio';
import Adise from '../../../app/botonesAdise';
import Eq2 from '../../../app/botonesEq2';
import Chernobyl from '../../../app/botonesChernobyl';
import AltaProductoPage from '../../../app/altaProducto';
import ResumenSalida from '../../../app/resumenSalida';
import ListadoSalidasAlmacenista from '../../../app/listadoSalidasAlm';
import useCurrentScreen from './useCurrentScreen';
import CrearEntrada from '../../../app/crearEntrada';
import InfoDestinoEntrada from '../../../app/infoDestinoEntrada';
import ResumenEntrada from '../../../app/resumenEntrada';
import ListadoEntradasAlmacenista from '../../../app/listadoEntradasAlm';
import CarritoEntrada from '../../../app/carritoEntrada';
import InventarioHome from '../../../app/inventario';
import InventarioAlm from '../../../app/inventarioAlm';
import EntradaAlma from '../../../app/entradaAlm';
import SalidaAlma from '../../../app/salidaAlm';
import EntradaAdministrador from '../../../app/entradaAdmin';
import SalidaAdministrador from '../../../app/salidaAdmin';
import ListadoEntradasAdministrador from '../../../app/listadoEntradasAdmin'
import ListadoSalidasAdministrador from '../../pages/listadoSalidasAdmin';
import DecidirInventario from '../../../app/decidirInventario';
import EditarInventario from '../../../app/editarInventario';
import EditarProductoPage from '../../../app/editarProducto';
import EditarUsuarioPage from '../../pages/editarUsuario';
import ListadoUsuariosRef from '../../../app/listadoUsuarios';
import CambiarContrasena from '../../../app/cambiarContrasena'

// import listadoProductos from '../../../app/listadoProductos';
import altaUsuarioPage from '../../../app/altaUsuario';
import log from '../../../app/logInn';



import ListadoProductosRef from '../../../app/listadoProductos';

const Drawer = createDrawerNavigator();

function Menulateral() {
  return (
    <Drawer.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: "#E8D7A8",
        elevation: 0,
        shadowOpacity: 0,
        height: 0,
      },
      headerTitle: '',
    }}
      drawerContent={(props) => <MenuItems {...props} />} >
      <Drawer.Screen name="Inventario" component={InventarioHome} options={{ headerTransparent: true }} />
      <Drawer.Screen name="InventarioAlmace" component = {InventarioAlm}options={{ headerTransparent: true }} />
       {/* Pantallas que si tendrán botón en el menú */}
      <Drawer.Screen name="Chernobyl" component={Chernobyl} options={{ }} />
      <Drawer.Screen name="Eq2" component={Eq2} options={{ }} />
      <Drawer.Screen name="Adise" component={Adise} options={{ }} />
      <Drawer.Screen name="Salidas" component={ListadoSalidasAlmacenista} options={{ headerTransparent: true }} />
      {/* Pantallas adicionales de Salidas */}
      <Drawer.Screen name="CrearSalida" component={CrearSalida} options={{ headerShown: false }} />
      <Drawer.Screen name="Carrito" component={Carrito} options={{ headerShown: false }} />
      <Drawer.Screen name="InfoDestinoN" component={InfoDestino} options={{ headerShown: false }} />
      <Drawer.Screen name="ResumenSalida" component={ResumenSalida} options={{ headerShown: false }} />
      <Drawer.Screen name="SalidaAlm" component={SalidaAlma} options={{ headerShown: false }} />
      <Drawer.Screen name="SalidasAdmin" component={ListadoSalidasAdministrador} options={{ headerTransparent: true }} />
      <Drawer.Screen name="SalidaAdmin" component={SalidaAdministrador} options={{ headerShown: false }} />
      {/* Pantallas de Entradas */}
      <Drawer.Screen name="Entradas" component={ListadoEntradasAlmacenista} options={{ headerTransparent: true }} />
      <Drawer.Screen name="EntradasAdmin" component={ListadoEntradasAdministrador} options={{ headerTransparent: true }} />
      <Drawer.Screen name="CrearEntrada" component={CrearEntrada} options={{ headerShown: false }} />
      <Drawer.Screen name="CarritoEntrada" component={CarritoEntrada} options={{ headerShown: false }} />
      <Drawer.Screen name="InfoDestinoE" component={InfoDestinoEntrada} options={{ headerShown: false }} />
      <Drawer.Screen name="ResumenEntrada" component={ResumenEntrada} options={{ headerShown: false }} />
      <Drawer.Screen name="EntradaAlm" component={EntradaAlma} options={{ headerShown: false }} />
      <Drawer.Screen name="EntradaAdmin" component={EntradaAdministrador} options={{ headerShown: false }} />
      {/* Inventario */}
      <Drawer.Screen name="DecidirInventario" component={DecidirInventario} options={{ headerTransparent: true }} />
      <Drawer.Screen name="EditarProducto" component={EditarProductoPage} options={{ headerTransparent: true, headerShown: false }} />
      <Drawer.Screen name="listadoProductos" component={ListadoProductosRef} />
      <Drawer.Screen name="EditarInventario" component={EditarInventario} options={{ headerTransparent: true, headerShown: false }} />



      {/* Agregar pantallas de los demás equipos */} 
      <Drawer.Screen name="ListadoUsuariosRef" component={ListadoUsuariosRef} />
      <Drawer.Screen name="editarUsuario" component={EditarUsuarioPage}  />
      <Drawer.Screen name="editarProducto" component={EditarProductoPage}  />
      <Drawer.Screen name="altaProducto" component={AltaProductoPage}  />
      <Drawer.Screen name="AltaUsuario" component={altaUsuarioPage}  />
      <Drawer.Screen name="cambiarContrasena" component={CambiarContrasena}  />
      
      {/* Login*/} 
      <Drawer.Screen name="log" component={log} options={{ headerShown: false }} />



    </Drawer.Navigator>
  );
}
export default Menulateral

const MenuItems = ({ navigation }) => {
  const { currentScreen, setScreen } = useCurrentScreen();

  return (
      <><DrawerContentScrollView style={styles.container}>
      <Text style={styles.title}>CEDAIN</Text>
      <MenuButtonItem
        text="Usuarios"
        currentScreen={currentScreen}
        onPress={() => {
          navigation.navigate('ListadoUsuariosRef');
          setScreen("Usuarios");
        } } />
      <MenuButtonItem
        text="Productos"
        currentScreen={currentScreen}
        onPress={() => {
          navigation.navigate('listadoProductos');
          setScreen("Productos");
        } } />
      <MenuButtonItem
        text="Inventario"
        currentScreen={currentScreen}
        onPress={() => {
          navigation.navigate('Inventario');
          setScreen("Inventario");
        } } />
      <MenuButtonItem
        text="Ver entradas"
        currentScreen={currentScreen}
        onPress={() => {
          navigation.navigate('Entradas');
          setScreen("Ver entradas");
        } } />
      <MenuButtonItem
        text="Registrar Entrada"
        currentScreen={currentScreen}
        onPress={() => {
          navigation.navigate('CrearEntrada');
          setScreen("Registrar Entrada");
        } } />
      <MenuButtonItem
        text="Ver Salidas"
        currentScreen={currentScreen}
        onPress={() => {
          navigation.navigate('Salidas');
          setScreen("Ver Salidas");
        } } />
      <MenuButtonItem
        text="Registrar Salida"
        currentScreen={currentScreen}
        onPress={() => {
          navigation.navigate('CrearSalida');
          setScreen("Registrar Salida");
        } } />
      <MenuButtonItem
        text="Cambiar almacén"
        currentScreen={currentScreen}
        onPress={() => {
          navigation.navigate('DecidirInventario');
          setScreen("Cambiar almacén");
        } } />


    </DrawerContentScrollView><View style={{ backgroundColor: "#F5E1B9" }}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Login');
          } }
          style={{
            backgroundColor: '#fff',
            borderRadius: 50,
            borderWidth: 1,
            borderColor: '#ccc',
            padding: 10,
            flexDirection: 'row',
            flex: 0,
            width: 120,
            bottom: 20,
            left: 10,
            zIndex: 100,
            backgroundColor: '#F5E1B9',
            borderColor: "black",
          }}
        >
          <AntDesign name="logout" size={24} color="black" style={{ paddingRight: "5%" }} />
          <Text style={{ fontSize: 20, color: '#8F8B36' }}>Log Out</Text>
        </TouchableOpacity>
      </View></>
      
    
    
  );
}

const styles = StyleSheet.create({

  container: {
    padding: 15,
    backgroundColor: '#F5E1B9',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#F74A3E',
    marginBottom: '30',
    textAlign: 'center'
  },
  image: {
    alignSelf: 'flex-start',
    borderRadius: 40,
    width: '30',
    height: '30',
  },
  text: {
    fontSize: 18,
    color: '#fff',
    marginTop: 15,
    marginLeft: 20,
  },

})