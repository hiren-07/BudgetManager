import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";

import AppIntro from '../containers/AuthContainer/AppIntro'
import LoginContainer from '../containers/AuthContainer/LoginContainer'
import RegisterContainer from '../containers/AuthContainer/RegisterContainer'
import StyleConfig from '../assets/styles/StyleConfig'


import SplashScreen from '../containers/URContainer/SplashScreen'
import MobileInputScreen from '../containers/URContainer/MobileInputScreen'
import OTPInputScreen from '../containers/URContainer/OTPInputScreen'
import MenuScreen from '../containers/URContainer/MenuScreen'

const AuthStack = createStackNavigator({
    SplashScreen:{screen:SplashScreen},
    MobileInputScreen: {screen:MobileInputScreen},
    OTPInputScreen: {screen:OTPInputScreen},
    MenuScreen:{screen:MenuScreen}
}, {
    headerMode: 'none'
})

const AppNavigator = createStackNavigator({
        AuthStack
}, {
    headerMode: 'none'
});

export default createAppContainer(AppNavigator);
