import React, { Component } from 'react'
import {
    View,
    Text,
    TouchableOpacity
} from 'react-native'

class RegisterContainer extends Component{
    static navigationOptions = ({ navigation }) => {
        return {
            title: 'Register'
        };
    };
    render(){
        return(
            <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                <Text>{'Register Container'}</Text>
            </View>
        )
    }
}

export default RegisterContainer
