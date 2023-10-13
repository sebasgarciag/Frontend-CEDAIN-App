import React from "react";
//import useSeleccion from "./hookSeleccionProducto";
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { render, screen, fireEvent, waitFor } from "@testing-library/react-native";
import CrearEntrada from "../../app/crearEntrada";

const Stack = createNativeStackNavigator();

jest.mock("expo-router", () => ({
    ...jest.requireActual("expo-router"),
    useRouter: () => ({
        replace: jest.fn().mockImplementation(() => {})
    }),
}));

function CrearEntradaScreen() {
    return (
        <CrearEntrada/>
    );
}

describe('Prueba de CREAR ENTRADA', () => {
    test('Given requirements (serie, observaciones, id_usuario, id_almacen, emisor, id_comunidad, id_evento) Entrada es creada', 
    async () => {
        //GIVE REQUIREMENTS
        const serie = '2023E';
        const observaciones = 'Automatic Jest test';
        const id_usuario = 1;
        const id_almacen = 1;
        const emisor = "Vladimir Horowitz";
        const id_comunidad = 1;
        const id_evento = 1;
        
        await render(
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="/entradas/entradas" component={CrearEntradaScreen} />
                </Stack.Navigator>
            </NavigationContainer>
        );

        //UNFINISHED TEST
    //     await fireEvent.changeText(screen.getByLabelText('nombre'), primerNombre)
    //     await fireEvent.changeText(screen.getByLabelText('apellido'), apellido)

    //     // When
    //     await fireEvent(screen.getByText('Guardar'), 'touchEnd');

    //     // Then
    //     const expectedOutput = primerNombre + " " + apellido;

    //     await render(
    //         <NavigationContainer>
    //             <Stack.Navigator>
    //                 <Stack.Screen name="/listarPersonas" component={ListarPersonasScreen} />
    //             </Stack.Navigator>
    //         </NavigationContainer>
    //     );

    //     await waitFor(() => {
    //         expect(screen.getByText(expectedOutput)).toBeTruthy();
    //     }, { timeout: 5000 });
    })

})

