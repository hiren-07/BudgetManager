import React from 'react'
import { ImageBackground } from 'react-native'
import AppImages from '../../assets/images'
export default class SplashScreen extends React.PureComponent {
    componentDidMount(){
        const {navigation} = this.props
        setTimeout(function(){
            navigation.navigate('MobileInputScreen')
        },1000)
    }
    render(){
        return (
            <ImageBackground resizeMode={'contain'} source={AppImages.splash} style={{flex:1, backgroundColor:'#f00'}}/>
        )
    }
}
