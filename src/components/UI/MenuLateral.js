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
import Chernobyl from '../../../app/botonesChernobyl';
import ResumenSalida from '../../../app/resumenSalida';
import ListadoSalidasAlm from '../../pages/listadoSalidasAlm';
import useCurrentScreen from './useCurrentScreen';


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
      <Drawer.Screen name="Home" component={PagInicio} options={{ }} />
       {/* Pantallas que si tendrán botón en el menú */}
      <Drawer.Screen name="Chernobyl" component={Chernobyl} options={{ }} />
      <Drawer.Screen name="Eq2" component={Eq2} options={{ }} />
      <Drawer.Screen name="Adise" component={Adise} options={{ }} />
      <Drawer.Screen name="Salidas" component={ListadoSalidasAlm} options={{ }} />
      {/* Pantallas adicionales de Salidas */} 
      <Drawer.Screen name="CrearSalida" component={CrearSalida} options={{ headerShown: false }} />
      <Drawer.Screen name="Carrito" component={Carrito} options={{headerShown: false}}/>
      <Drawer.Screen name="InfoDestinoN" component={InfoDestino} options={{headerShown: false}}/>
      <Drawer.Screen name="ResumenSalida" component={ResumenSalida}  options={{headerShown: false}}/>
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
        <MenuButtonItem 
          text= "Adise" 
          currentScreen = {currentScreen}
          onPress = {() => {
            navigation.navigate('Adise'); 
            setScreen("Adise")
          }}
        />
        <MenuButtonItem 
          text= "Salidas" 
          currentScreen = {currentScreen}
          onPress = {() => {
            navigation.navigate('Salidas'); 
            setScreen("CED")
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
  }
})