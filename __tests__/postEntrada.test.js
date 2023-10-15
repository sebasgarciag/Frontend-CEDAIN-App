// import React from 'react';

// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { render, screen, fireEvent, waitFor } from "@testing-library/react-native";

// import CrearEntrada from "../app/crearEntrada";
// import Inventario2 from "../app/inventario";

// const Stack = createNativeStackNavigator();

// jest.mock('@react-navigation/native', () => ({
//     ...jest.requireActual('@react-navigation/native'),
//     useNavigation: () => ({
//         navigate: jest.fn(),
//         goBack: jest.fn(),
//         // add other navigation functions you want to mock here
//     }),
// }));

// //POSTS
// function InventarioScreen() {
//     reutnr (
//         <Inventario2/>
//     );
// }
// function CrearEntradaScreen() {
//     reutnr (
//         <CrearEntrada/>
//     );
// }

// describe('Pruebas de Crear Entrada', () => {
//     test('Given required info to create an entrada, creats a new entrada.', async () => {
//         const serie = 11111;
//         const observaciones = "e2e test";
//         const id_usuario = 1;
//         const emisor = "e2e delivery express";
//         const id_comunidad = 1;
//         const id_evento = 1;
    
//         await render(
//             <NavigationContainer>
//                 <Stack.Navigator>
//                     <Stack.Screen name ="/Inventario2" component={InventarioScreen} />
//                 </Stack.Navigator>
//             </NavigationContainer>
//         );

//         await fireEvent.press(screen.getByText("Entrada Nueva"));
