import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";

import AppIntro from '../containers/AuthContainer/AppIntro'
import LoginContainer from '../containers/AuthContainer/LoginContainer'
import RegisterContainer from '../containers/AuthContainer/RegisterContainer'
import StyleConfig from '../assets/styles/StyleConfig'

const AuthStack = createStackNavigator({
     AppIntro: { screen: AppIntro },
    Login: { screen : LoginContainer },
    Register: { screen: RegisterContainer }
},
    // {defaultNavigationOptions: {
    //     headerStyle: {
    //         backgroundColor: StyleConfig.COLOR.THEME,
    //     },
    //     headerTintColor: '#fff',
    //     headerTitleStyle: {
    //         fontWeight: 'bold',
    //     },
    // }},
    {
    headerMode: 'none'
})

const AppNavigator = createStackNavigator({
        AuthStack
}, {
    headerMode: 'none'
});

export default createAppContainer(AppNavigator);
