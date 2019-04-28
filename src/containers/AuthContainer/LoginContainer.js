import React, { Component } from 'react'
import {
    View,
    StyleSheet
} from 'react-native'
import withToast from "../../redux/actionCreator/withToast";
import withLoader from "../../redux/actionCreator/withLoader";
import CText from '../../components/CText'

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
    render(){
        return(
            <View style={style.container}>
                <CText style={styles.textStyle} onPress={()=> this.props.toast({text: 'This is Toast'})}>{'Toast Test'}</CText>
                <CText style={styles.textStyle} onPress={()=> this.onLoader()}>{'Loader Test'}</CText>
                <CText style={styles.textStyle} onPress={()=> this.props.navigation.navigate('Register')}>{'goto REGISTER'}</CText>

                <CText type={'light'} style={styles.textStyle}>{'Login Container Light'}</CText>
                <CText type={'regular'} style={styles.textStyle}>{'Login Container Regular'}</CText>
                <CText type={'medium'} style={styles.textStyle}>{'Login Container Medium'}</CText>
                <CText type={'italic'} style={styles.textStyle}>{'Login Container Italic'}</CText>
                <CText type={'bold'} style={styles.textStyle}>{'Login Container Bold'}</CText>


            </View>
        )
    }
}

export default withLoader(withToast(LoginContainer))
const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    textStyle:{
        fontSize:16,
        marginTop:16
    }
})
