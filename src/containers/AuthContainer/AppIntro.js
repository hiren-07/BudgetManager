import React, { Component } from 'react'
import {
    View,
    StyleSheet,
    Text
} from 'react-native'
import withToast from "../../redux/actionCreator/withToast";
import withLoader from "../../redux/actionCreator/withLoader";
import CText from '../../components/CText'
import AppImages from '../../assets/images'
import StyleConfig from '../../assets/styles/StyleConfig'
import Swiper from '../../components/SwiperView/index'
class AppIntro extends Component{


    render(){
        return(
            <Swiper
                style={styles.wrapper}
                smoothTransition
                loop
                stack
                swipeDirection={'left'}

            >
                <View style={styles.slide1}>
                    <Text style={styles.text}>Hello Swiper</Text>
                </View>
                <View style={styles.slide2}>
                    <Text style={styles.text}>Beautiful</Text>
                </View>
                <View style={styles.slide3}>
                    <Text style={styles.text}>And simple</Text>
                </View>
            </Swiper>
        )
    }
}

export default withLoader(withToast(AppIntro))
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



    wrapper: {
        backgroundColor: '#009688',
    },
    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#e91e63',
    },
    slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#673ab7',
    },
    slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#3f51b5',
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
    },
})
