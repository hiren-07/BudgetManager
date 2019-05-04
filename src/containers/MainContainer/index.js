import React from 'react'
import {
    View
} from 'react-native'
import Loader from '../../components/reduxComponent/Loader'
import Toast from '../../components/reduxComponent/Toast'
import StyleConfig from '../../assets/styles/StyleConfig'
class MainContainer extends React.PureComponent{
    render(){
        return(
            <View style={{
                flex:1,
                position:'absolute',
                right:0,
                left:0,
                width:StyleConfig.width,
                zIndex:9999
            }}>
                <Loader/>
                <Toast/>
            </View>
        )
    }
}

export default MainContainer
