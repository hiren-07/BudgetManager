import React from 'react'
import firebase from 'react-native-firebase';
import {Alert, Image, TouchableOpacity, View, Keyboard,  ImageBackground, StyleSheet, TextInput} from 'react-native'
import AppImages from '../../assets/images'
import StyleConfig from "../../assets/styles/StyleConfig";
import CText from "../../components/CText";
const ITEMS=["","","",""]
export default class OTPInputScreen extends React.PureComponent {
    constructor(props){
        super(props)
        this.state={otp1:'',otp2:'',otp3:'',otp4:'',otp5:'',otp6:''}

    }
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

    componentDidMount(){
        //this.requestForOtp()
    }

    requestForOtp=()=>{
        const {otp1,otp2,otp3,otp4,otp5,otp6} = this.state
        const {navigation} = this.props
        const phone = navigation.getParam('phone', '');
        let otp = Number(otp1+otp2+otp3+otp4+otp5+otp6)
        console.log(otp,typeof  otp)
        firebase.auth().signInWithPhoneNumber('+91'+phone)
            .then(confirmResult => {
                confirmResult.confirm(''+otp)
                    .then(user => Alert.alert('OTP Verified.',JSON.stringify(user),
[{text: 'OK', onPress: () => navigation.navigate('MenuScreen'),}]
                        ))
                    .catch(error => console.log('error in OTP',error));
            })// save confirm result to use with the manual verification code)
            .catch(error => console.log('ERROR',error) );
    }

    render() {
        console.log('RENDER',this.state.otp1)
        return (
            <View style={styles.container}>
                <ImageBackground source={AppImages.header_back} resizeMode={'contain'} style={styles.headerContent}>
                    <View style={styles.headerRowFirst}>
                        <TouchableOpacity onPress={this.requestForOtp} style={styles.nextParent}>
                            <Image source={AppImages.ic_next} style={styles.imageStyle}/>
                        </TouchableOpacity>
                    </View>
                    <View style={{flex:1}}/>
                    <CText style={styles.headerText3}>{'Verify your phone number'}</CText>
                    <CText style={styles.headerText4}>{'We\'ve sent an OTP to  +91 77991 45959'}</CText>
                </ImageBackground>
                <View style={styles.content}>
                    <View style={styles.row1}>
                            <TextInput
                                ref="input1"
                                style={styles.inputStyle}
                                onChangeText={(otp1)=>{
                                    this.setState({otp1})
                                    this.refs.input2.focus();
                                } }
                                value={this.state.otp1}
                                autoFocus={true}
                                underlineColorAndroid={'transparent'}
                                keyboardType={'phone-pad'}
                                maxLength={1}
                            />
                        <TextInput
                            ref="input2"
                            style={styles.inputStyle}
                            onChangeText={(otp2)=>{
                                this.setState({otp2})
                                this.refs.input3.focus()

                            } }
                            value={this.state.otp2}
                            underlineColorAndroid={'transparent'}
                            keyboardType={'phone-pad'}
                            maxLength={1}
                        />
                        <TextInput
                            ref="input3"
                            style={styles.inputStyle}
                            onChangeText={(otp3)=> {
                                this.setState({otp3})
                                this.refs.input4.focus();
                            }}
                            value={this.state.otp3}
                            underlineColorAndroid={'transparent'}
                            keyboardType={'phone-pad'}
                            maxLength={1}
                        />
                        <TextInput
                            ref="input4"
                            style={styles.inputStyle}
                            onChangeText={(otp4)=>{
                                this.setState({otp4})
                                this.refs.input5.focus();
                            } }
                            value={this.state.otp4}
                            underlineColorAndroid={'transparent'}
                            keyboardType={'phone-pad'}
                            maxLength={1}
                        />
                        <TextInput
                            ref="input5"
                            style={styles.inputStyle}
                            onChangeText={(otp5)=>{
                                this.setState({otp5})
                                this.refs.input6.focus();
                            } }
                            value={this.state.otp5}
                            underlineColorAndroid={'transparent'}
                            keyboardType={'phone-pad'}
                            maxLength={1}
                        />
                        <TextInput
                            ref="input6"
                            style={styles.inputStyle}
                            onChangeText={(otp6)=>{
                                this.setState({otp6})
                                Keyboard.dismiss()
                            } }
                            value={this.state.otp6}
                            underlineColorAndroid={'transparent'}
                            keyboardType={'phone-pad'}
                            maxLength={1}
                        />


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
    row1:{ flexDirection:'row', marginTop:StyleConfig.countPixelRatio(20), alignItems:'center', justifyContent: 'center' },
    textPrefix:{ fontSize:StyleConfig.countPixelRatio(22)},
    inputStyle:{ textAlign: 'center',marginLeft:StyleConfig.countPixelRatio(12), borderColor: StyleConfig.COLOR.RED_LIGHT, borderBottomWidth: 1,height:40, minWidth: 24,  fontFamily:StyleConfig.fontMedium, fontSize:StyleConfig.countPixelRatio(22), },
    errorText:{color:'red'}

})

