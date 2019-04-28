/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react'
import {View} from 'react-native'
import AppNavigator from './src/routers/AppNavigator'
import MainContainer from './src/containers/MainContainer'
import {Provider} from 'react-redux'
import Store from './src/redux/store'
export default class App extends Component<Props> {
  render() {
    return (
        <Provider store={Store}>
            <View style={{flex:1}}>
                <View style={{flex:1}}>
                    <AppNavigator/>
                </View>
                <MainContainer />
            </View>
        </Provider>
    );
  }
}
