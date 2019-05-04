import React, { Component } from 'react'
import {
    View,
    StyleSheet,
    ImageBackground,
    Image, TouchableOpacity, Text
} from 'react-native'
import withToast from "../../redux/actionCreator/withToast";
import withLoader from "../../redux/actionCreator/withLoader";
import CText from '../../components/CText'
import AppImages from '../../assets/images'
import StyleConfig from '../../assets/styles/StyleConfig'
import LoginForm from './LoginForm'
import Styles from "../../assets/styles/Styles";
class LoginContainer extends Component{

    static navigationOptions = ({ navigation }) => {
        return {
           // title: navigation.getParam('title', 'Title'),
            title: 'Login'
        };
    };
    onLoader=()=>{
        this.props.loader(true)
    }
    _onSubmit=(values)=>{
        //alert(JSON.stringify(values))
        this.props.navigation.navigate('Register')
    }
    onSignUp=()=>{
        this.props.navigation.navigate('Register')
    }
    render(){
        return(
            <ImageBackground source = {AppImages.appBack2} style={styles.container}>
                {/*<CText style={{backgroundColor: 'white'}} onPress={()=> this.props.loader(true)}>Loader</CText>*/}
                {/*<CText style={{backgroundColor: 'white'}} onPress={()=> this.props.toast({text:'Data saved successfully'})}>Toast</CText>*/}

                <View style={styles.content}>
                    <View style={{flex:2, justifyContent:'center', alignItems:'center'}} >
                        <Image
                            source={AppImages.appLogo}
                            resizeMode={'cover'}
                            style={styles.image}
                        />
                    </View>
                    <LoginForm onSubmit={this._onSubmit} onSignUp ={this.onSignUp} />

                </View>
            </ImageBackground>
        )
    }
}

export default withLoader(withToast(LoginContainer))
const styles=StyleSheet.create({
    container:{
        flex:1,
    },
    content:{flex:1, backgroundColor:'rgba(250,250,250,0.5)', paddingHorizontal:StyleConfig.countPixelRatio(16)},
    textStyle:{
        fontSize:StyleConfig.countPixelRatio(22),
        marginTop:StyleConfig.countPixelRatio(12),
        color:'white'
    },
    image:{
        width: StyleConfig.responsiveWidth(50),
        height: StyleConfig.responsiveWidth(50),

    }
})
