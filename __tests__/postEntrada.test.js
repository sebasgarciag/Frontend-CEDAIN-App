import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { render, screen, fireEvent, waitFor } from "@testing-library/react-native";

import CrearEntrada from "../app/crearEntrada";
import SeleccionProductos from '../src/pages/crearEntrada';
import Inventario2 from "../app/inventario";
import CarritoEntrada from "../app/carritoEntrada";
import ProductoCarrito from "../src/components/entradasSalidas/productoCarrito";
import ListaProductos from '../src/components/entradasSalidas/listaProductos';

import InfoDestinoEntrada from "../app/infoDestinoEntrada";
import ResumenEntrada from "../app/ResumenEntrada";
import { EntradaNueva } from '../src/components/UI/uiButtons';

const Stack = createNativeStackNavigator();

//MOCKS?
// jest.mock("expo-router", () => ({
//     useRouter: () => ({
//       replace: jest.fn()
//     }),
// }));

jest.mock("expo-router", () => ({
    ...jest.requireActual("expo-router"),
    useRouter: () => ({
        replace: jest.fn().mockImplementation(() => {})
    }),
}));

jest.mock('@react-navigation/native-stack', () => ({
    ...jest.requireActual('@react-navigation/native-stack'),
    createNativeStackNavigator: jest.fn(() => ({
        Navigator: jest.fn(),
        Screen: jest.fn(),
    })),
  }));

////delete this bellow?
jest.mock('@react-navigation/native', () => ({
    ...jest.requireActual('@react-navigation/native'),
    useNavigation: () => ({
        navigate: jest.fn(),
        goBack: jest.fn(),
        // add other navigation functions you want to mock here
    }),
}));
////delete this above?




//Paginas
function InventarioScreen() {
    return (
        <Inventario2/>
    );
}
function CrearnEntradaButtonScreen() {
    return (
        <EntradaNueva/>
    );
}
function CrearEntradaScreen() {
    return (
        <CrearEntrada/>
    );
}
function SeleccionProductoScreen() {
    return (
        <SeleccionProductos/>
    );
}

function ListaProductosScreen() {
    return (
        <ListaProductos/>
    );
}
function CarritoEntradaScreen() {
    return (
        <CarritoEntrada/>
    );
}

function ProductoCarritoScreen() {
    return (
        <ProductoCarrito/>
    );
}
function InfoDestinoEntradaScreen() {
    return (
        <InfoDestinoEntrada/>
    );
}
function ResumenEntradaScreen() {
    return (
        <ResumenEntrada/>
    );
}


describe('Pruebas de Crear Entrada', () => {
    test('Given required info to create an entrada, creats a new entrada.', async () => {
        const serie = 11111;
        const observaciones = "e2e test";
        const id_usuario = 1;
        const emisor = "e2e delivery express";
        const id_comunidad = 1;
        const id_evento = 1;

        await render(
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name ="/Inventario2" component={InventarioScreen} />
                </Stack.Navigator>
            </NavigationContainer>
        );
            
        const mockNavigate = jest.fn();
        render(<EntradaNueva navigation={{ navigate: mockNavigate }} />);
        await fireEvent.press(screen.getByText("Entrada Nueva"));
        
        await render(
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name ="/CrearEntrada" component={CrearEntradaScreen} />
                </Stack.Navigator>
            </NavigationContainer>
        );

        render(<SeleccionProductoScreen/>);
        render(<ListaProductosScreen/>);
        console.log("==========================================");
        await fireEvent.press(screen.findByText("Silla"));
        console.log("==========================================");
        await fireEvent.press(screen.getByText("Siguiente"));
        console.log("==========================================");
        // const canastaDeBarro = await screen.findByText("Silla");
        // fireEvent.press(canastaDeBarro);
        
        await fireEvent.press(screen.getByText("Siguiente"));

        // await render(
        //     <NavigationContainer>
        //         <Stack.Navigator>
        //             <Stack.Screen name ="/carritoEntrada" component={CarritoEntradaScreen} />
        //         </Stack.Navigator>
        //     </NavigationContainer>
        // );

        // console.log("==========================================");
        // render(<ProductoCarrito/>);
        // const increaseButton = screen.getByTestId('increaseQuantityButton');
        // console.log("==========================================");
        // const amountInput = await screen.findByIcon(increaseButton);
        // //fireEvent.changeText(amountInput, '5');
        
        // await fireEvent.press(screen.getByText("Siguiente"));
        
        // await render(
        //     <NavigationContainer>
        //         <Stack.Navigator>
        //             <Stack.Screen name ="/InfoDestinoEntrada" component={InfoDestinoEntradaScreen} />
        //         </Stack.Navigator>
        //     </NavigationContainer>
        // );

        // await fireEvent.press(screen.getByText("Comunidad"));
        // await fireEvent.press(screen.getByText("No Aplica"));
        // await fireEvent.press(screen.getByText("Comunidad"));
        // await fireEvent.press(screen.getByText("No Aplica"));

        // await fireEvent.press(screen.getByText("Evento"));
        // await fireEvent.press(screen.getByText("No Aplica"));
        // await fireEvent.press(screen.getByText("Evento"));
        // await fireEvent.press(screen.getByText("No Aplica"));

        // await fireEvent.changeText(screen.getByLabelText('Observaciones'), observaciones);
        // await fireEvent.changeText(screen.getByLabelText('Emisor'), emisor);
        // await fireEvent.press(screen.getByText("Siguiente"));

        // await render(
        //     <NavigationContainer>
        //         <Stack.Navigator>
        //             <Stack.Screen name ="/ResumenEntrada" component={ResumenEntradaScreen} />
        //         </Stack.Navigator>
        //     </NavigationContainer>
        // );

        // await fireEvent.press(screen.getByText("Terminar"));

        // await waitFor(() => {
        //     expect(screen.getByText(expectedOutput)).toBeTruthy();
        // }, { timeout: 5000 });
    })
})