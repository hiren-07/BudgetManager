import React, { Component } from 'react'
import {
    View,
    StyleSheet,
    ImageBackground
} from 'react-native'
import withToast from "../../redux/actionCreator/withToast";
import withLoader from "../../redux/actionCreator/withLoader";
import CText from '../../components/CText'
import AppImages from '../../assets/images'
import StyleConfig from '../../assets/StyleConfig'
import LoginForm from './LoginForm'
class LoginContainer extends Component{

    // componentWillMount(){
    //     this.props.navigation.setParams({title: 'Login'})
    // }

    static navigationOptions = ({ navigation }) => {
        return {
           // title: navigation.getParam('title', 'Title'),
            title: 'Login'
        };
    };
    onLoader=()=>{
        this.props.loader(true)
        // const that = this
        // this.setTimeout(function(){
        //     that.props.loader(false)
        // },5000)
    }
    _onSubmit=(values)=>{
        //alert(JSON.stringify(values))
        this.props.navigation.navigate('Register')
    }
    render(){
        return(
            <ImageBackground source = {AppImages.appBack2} style={styles.container}>
                <View style={styles.content}>
                    <LoginForm onSubmit={this._onSubmit}/>
                </View>

            </ImageBackground>
        )
    }
}

export default withLoader(withToast(LoginContainer))
const styles=StyleSheet.create({
    container:{
        flex:1
    },
    content:{flex:1, backgroundColor:'rgba(250,250,250,0.5)', paddingHorizontal:StyleConfig.countPixelRatio(16)},
    textStyle:{
        fontSize:StyleConfig.countPixelRatio(22),
        marginTop:StyleConfig.countPixelRatio(12),
        color:'white'
    }
})
