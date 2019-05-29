import React from 'react'
import {Alert, Image, TouchableOpacity, View, ImageBackground, StyleSheet, TextInput} from 'react-native'
import AppImages from '../../assets/images'
import StyleConfig from "../../assets/styles/StyleConfig";
import CText from "../../components/CText";
const ITEMS=["","","",""]
export default class OTPInputScreen extends React.PureComponent {
    state={otp:['','','','']}
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
    _onChangeText=(val,ind)=>{
        let {otp}=this.state
        otp[ind]=val
        console.log(JSON.stringify(otp))
        this.setState({otp})
    }

    render() {
        return (
            <View style={styles.container}>
                <ImageBackground source={AppImages.header_back} resizeMode={'contain'} style={styles.headerContent}>
                    <View style={styles.headerRowFirst}>
                        <TouchableOpacity onPress={this._onNextPress} style={styles.nextParent}>
                            <Image source={AppImages.ic_next} style={styles.imageStyle}/>
                        </TouchableOpacity>
                    </View>
                    <View style={{flex:1}}/>
                    <CText style={styles.headerText3}>{'Verify your phone number'}</CText>
                    <CText style={styles.headerText4}>{'We\'ve sent an OTP to  +91 77991 45959'}</CText>
                </ImageBackground>
                <View style={styles.content}>
                    <View style={styles.row1}>
                        {ITEMS.map((item,ind)=>
                            <TextInput
                                key={ind}
                                style={styles.inputStyle}
                                onChangeText={(val)=>this._onChangeText(val,ind)}
                                value={this.state.otp[ind]}
                                underlineColorAndroid={'transparent'}
                                keyboardType={'phone-pad'}
                                maxLength={1}
                            />
                        )}

                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{flex:1},
    headerContent:{height: '35%', backgroundColor: '#f00'},
    headerRowFirst:{flexDirection: 'row', justifyContent: 'flex-end'},
    nextParent:{
        marginRight: StyleConfig.countPixelRatio(20),
        marginTop: StyleConfig.countPixelRatio(StyleConfig.isIphone ? 48 : 24)
    },
    imageStyle:{
        width: StyleConfig.countPixelRatio(28),
        height: StyleConfig.countPixelRatio(28)
    },
    headerTextView:{alignItems:'center'},
    headerText1:{textAlign:'center', color:'white',fontSize:StyleConfig.countPixelRatio(30)},
    headerText2:{ marginLeft:StyleConfig.countPixelRatio(16) ,color:'white',fontSize:StyleConfig.countPixelRatio(20)},
    headerText3:{ marginLeft:StyleConfig.countPixelRatio(16) , color:'white',fontSize:StyleConfig.countPixelRatio(14)},
    headerText4:{ marginLeft:StyleConfig.countPixelRatio(16),marginTop:StyleConfig.countPixelRatio(8),marginBottom:StyleConfig.countPixelRatio(24) , color:'white',fontSize:StyleConfig.countPixelRatio(14)},
    content:{height: '65%',  marginHorizontal:StyleConfig.countPixelRatio(20), backgroundColor: '#fff'},
    row1:{ flexDirection:'row', marginTop:StyleConfig.countPixelRatio(20), alignItems:'center', },
    textPrefix:{ fontSize:StyleConfig.countPixelRatio(22)},
    inputStyle:{ textAlign: 'center', borderColor: StyleConfig.COLOR.RED_LIGHT, borderBottomWidth: 1,height:40, width: 24, marginLeft:StyleConfig.countPixelRatio(6), fontFamily:StyleConfig.fontMedium, fontSize:StyleConfig.countPixelRatio(22), },
    errorText:{color:'red'}

})

