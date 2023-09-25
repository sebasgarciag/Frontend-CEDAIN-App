import * as React from 'react';
import { Text } from 'react-native';
import { DrawerContentScrollView, createDrawerNavigator} from '@react-navigation/drawer';
import CrearSalida from '../../../app/crearSalida';
import Carrito from '../../../app/carrito';
import InfoDestino from '../../../app/infoDestino';
import { StyleSheet } from 'react-native';
import MenuButtonItem from './MenuButtonItem';
import PagInicio from './pagInicio';
import Adise from '../../../app/botonesAdise';
import Eq2 from '../../../app/botonesEq2';
import ResumenSalida from '../../../app/resumenSalida';
import ListadoSalidasAlmacenista from '../../../app/listadoSalidasAlm';
import useCurrentScreen from './useCurrentScreen';
import CrearEntrada from '../../../app/crearEntrada';
import InfoDestinoEntrada from '../../../app/infoDestinoEntrada';
import ResumenEntrada from '../../../app/resumenEntrada';
import ListadoEntradasAlmacenista from '../../../app/listadoEntradasAlm';
import CarritoEntrada from '../../../app/carritoEntrada';
import InventarioHome from '../../../app/inventario';

const Drawer = createDrawerNavigator();

function Menulateral() {
  return (
    <Drawer.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: "#F1EFE3",
        elevation: 0,
        shadowOpacity: 0,
      },
      headerTitle: '',
    }}
    drawerContent = { (props) => <MenuItems {...props} /> } >
      <Drawer.Screen name="Inventario" component={InventarioHome} options={{ headerTransparent: true }} />
       {/* Pantallas que si tendrán botón en el menú */}
      <Drawer.Screen name="Chernobyl" component={PagInicio} options={{ }} />
      <Drawer.Screen name="Eq2" component={Eq2} options={{ }} />
      <Drawer.Screen name="Adise" component={Adise} options={{ }} />
      <Drawer.Screen name="Salidas" component={ListadoSalidasAlmacenista} options={{ headerTransparent: true }} />
      {/* Pantallas adicionales de Salidas */} 
      <Drawer.Screen name="CrearSalida" component={CrearSalida} options={{ headerShown: false }} />
      <Drawer.Screen name="Carrito" component={Carrito} options={{headerShown: false}}/>
      <Drawer.Screen name="InfoDestinoN" component={InfoDestino} options={{headerShown: false}}/>
      <Drawer.Screen name="ResumenSalida" component={ResumenSalida}  options={{headerShown: false}}/>
      {/* Pantallas de Entradas */}
      <Drawer.Screen name="Entradas" component={ListadoEntradasAlmacenista} options={{ headerTransparent: true }} />
      <Drawer.Screen name="CrearEntrada" component={CrearEntrada} options={{ headerShown: false }} />
      <Drawer.Screen name="CarritoEntrada" component={CarritoEntrada} options={{headerShown: false}}/>
      <Drawer.Screen name="InfoDestinoE" component={InfoDestinoEntrada} options={{headerShown: false}}/>
      <Drawer.Screen name="ResumenEntrada" component={ResumenEntrada}  options={{headerShown: false}}/>
      {/* Inventario */}



      {/* Agregar pantallas de los demás equipos */} 

    </Drawer.Navigator>
  );
}
export default Menulateral

const MenuItems = ({ navigation }) => {
  const {currentScreen, setScreen} = useCurrentScreen();

  return (
      <DrawerContentScrollView  style={styles.container}>
        <Text style={styles.title}>CEDAIN</Text>
        <MenuButtonItem 
          text= "Chernobyl" 
          currentScreen = {currentScreen}
          onPress = {() => {
            navigation.navigate('Chernobyl'); 
            setScreen("Chernobyl")
          }}
        />
        <MenuButtonItem 
          text= "Eq2" 
          currentScreen = {currentScreen}
          onPress = {() => {
            navigation.navigate('Eq2'); 
            setScreen("Eq2")
          }}
        />
        <Text style={styles.text}>Entradas</Text>
        <MenuButtonItem 
          text= "Ver entradas" 
          currentScreen = {currentScreen}
          onPress = {() => {
            navigation.navigate('Entradas'); 
            setScreen("Ver entradas")
          }}
        />
        <MenuButtonItem 
          text= "Registrar Entrada" 
          currentScreen = {currentScreen}
          onPress = {() => {
            navigation.navigate('CrearEntrada'); 
            setScreen("Registrar Entrada")
          }}
        />
        <Text style={styles.text}>Salidas</Text>
        <MenuButtonItem 
          text= "Ver Salidas" 
          currentScreen = {currentScreen}
          onPress = {() => {
            navigation.navigate('Salidas'); 
            setScreen("Ver Salidas")
          }}
        /> 
        <MenuButtonItem 
          text= "Registrar Salida" 
          currentScreen = {currentScreen}
          onPress = {() => {
            navigation.navigate('CrearSalida'); 
            setScreen("Registrar Salidas")
          }}
        /> 
      </DrawerContentScrollView> 
  );
}

const styles = StyleSheet.create({

  container: {
    padding: 15,
    backgroundColor: '#FBB03B',
  },
  title:{
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
    fontWeight: 'bold',
    color: 'black',
    marginTop: 15,
  },
})