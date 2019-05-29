import React from 'react'
import {Alert, Image, TouchableOpacity, View,TextInput,StyleSheet} from 'react-native'
import AppImages from '../../assets/images'
import StyleConfig from "../../assets/styles/StyleConfig";
import CText from "../../components/CText";

export default class MobileInputScreen extends React.PureComponent {
    state={ text:'1112223331', msg:''}
    _onNextPress = () => {
        const {navigation} = this.props
        const { text } = this.state
        if(text.length > 12 || text.length < 10){
            this.setState({msg:'Invalid Phone Number'})
        }else{
            Alert.alert('', 'We will be verifying the phone number:\n +91 12345 67899\n\nIs this OK, or would you like to edit the number?', [{
                text: 'EDIT',
                onPress: () => {

                }
            },{
                text:'OK',
                onPress:()=>{
                    navigation.navigate('OTPInputScreen')
                }
            }]);
        }

    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.headerContent}>
                    <View style={styles.headerRowFirst}>
                        <TouchableOpacity onPress={this._onNextPress} style={styles.nextParent}>
                            <Image source={AppImages.ic_next} style={styles.imageStyle}/>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.headerTextView}>
                    <CText type={'medium'} style={styles.headerText1}>{'Welcome to\nNewProject Bisuness'}</CText>
                    </View>
                    <View style={{flex:1}} />
                    <CText type={'medium'} style={styles.headerText2}>{'Enter your phone number'}</CText>
                    <CText type={'medium'} style={styles.headerText3}>{'Use the number on this phone, we will be verifing the phone'}</CText>

                </View>
                <View style={styles.content}>
                    <View style={styles.row1}>
                    <CText style={styles.textPrefix}>+91</CText>
                    <TextInput
                        style={styles.inputStyle}
                        onChangeText={(text) => this.setState({text})}
                        value={this.state.text}
                        underlineColorAndroid={'transparent'}
                        keyboardType={'phone-pad'}
                    />
                    </View>
                    {this.state.msg.length > 0 && <CText style={styles.errorText}>{this.state.msg}</CText>}
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
    headerText3:{ marginTop:StyleConfig.countPixelRatio(8), marginLeft:StyleConfig.countPixelRatio(16) ,marginBottom:StyleConfig.countPixelRatio(24) , color:'white',fontSize:StyleConfig.countPixelRatio(14)},
    content:{height: '65%',  marginHorizontal:StyleConfig.countPixelRatio(20), backgroundColor: '#fff'},
    row1:{ flexDirection:'row', marginTop:StyleConfig.countPixelRatio(20), alignItems:'center', borderColor: StyleConfig.COLOR.RED_LIGHT, borderBottomWidth: 1},
    textPrefix:{ fontSize:StyleConfig.countPixelRatio(22)},
    inputStyle:{height:40,flex:1, marginLeft:StyleConfig.countPixelRatio(6), fontFamily:StyleConfig.fontMedium, fontSize:StyleConfig.countPixelRatio(22), },
    errorText:{color:'red'}

})
