import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Menulateral from '../src/components/UI/MenuLateral';
import LoginPage from "../src/pages/LogIn";
import useLoggedIn from './loggedIn';

const Stack = createStackNavigator();

const Home = () => {
    const { loggedIn } = useLoggedIn();
    const navigation = useNavigation();

    useEffect(() => {
        if (loggedIn) {
            navigation.navigate('MenuLateral');
        }
    }, [loggedIn]);

    return (
        <NavigationContainer independent={true}>
            <Stack.Navigator initialRouteName="Login">
                <Stack.Screen
                    name="Login"
                    component={LoginPage}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="MenuLateral"
                    component={Menulateral}
                    options={{ headerShown: false }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Home;
