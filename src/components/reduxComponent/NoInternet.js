import React, { Component } from 'react';
import { TouchableOpacity, View, Text } from 'react-native';

class NoInternet extends Component {

    _onInternetConnectionCheck = () => {
        const $this = this;
    }

    render() {
        return(
           <View>
               <Text>{'No Internet'}</Text>
           </View>
        )
    }
}

export default NoInternet;
