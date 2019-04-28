import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";

import LoginContainer from '../containers/AuthContainer/LoginContainer'
import RegisterContainer from '../containers/AuthContainer/RegisterContainer'

const AuthStack = createStackNavigator({
    Login: { screen : LoginContainer },
    Register: {screen: RegisterContainer}
},{defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: '#008080',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
    }})

const AppNavigator = createStackNavigator({
        AuthStack
}, {
    headerMode: 'none'
});

export default createAppContainer(AppNavigator);
