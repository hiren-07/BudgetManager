import React from 'react'
import {Alert, Image, TouchableOpacity, View,ImageBackground} from 'react-native'
import AppImages from '../../assets/images'
import StyleConfig from "../../assets/styles/StyleConfig";

export default class OTPInputScreen extends React.PureComponent {
    _onNextPress = () => {
        const {navigation} = this.props
        Alert.alert('', 'We will be verifying the phone number:\n +91 12345 67899\n\nIs this OK, or would you like to edit the number?', [{
            text: 'EDIT',
            onPress: () => {

            }
        },{
            text:'OK',
            onPress:()=>{

            }
        }]);
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <ImageBackground source={AppImages.header_back} resizeMode={'contain'} style={{height: StyleConfig.responsiveHeight(35), backgroundColor:'#f00', paddingTop:StyleConfig.countPixelRatio(StyleConfig.isIphone?24:0) }}>
                    <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
                        <TouchableOpacity onPress={this._onNextPress} style={{
                            marginRight: StyleConfig.countPixelRatio(20),
                            marginTop: StyleConfig.countPixelRatio(24)
                        }}>
                            <Image source={AppImages.ic_next} style={{
                                width: StyleConfig.countPixelRatio(28),
                                height: StyleConfig.countPixelRatio(28)
                            }}/>
                        </TouchableOpacity>
                    </View>

                </ImageBackground>
                <View style={{height: '65%', backgroundColor: '#fff'}}>

                </View>
            </View>
        )
    }
}
