import React from 'react'
import {Alert, Image, TouchableOpacity, View,FlatList} from 'react-native'
import AppImages from '../../assets/images'
import StyleConfig from "../../assets/styles/StyleConfig";
import firebase from 'react-native-firebase';
import CText from "../../components/CText";
export default class MenuScreen extends React.PureComponent {
    constructor(props){
        super(props);
        this.state={data:'',selected:'0'}
    }
    componentDidMount = async() =>{
        let res = null, data = [];
        let brandsRef = firebase.database().ref("/");
        await brandsRef.once()
            .then(function (snapshot) {
                res = snapshot._value;
            });
        for (let obj in res) {
            data.push(res[obj])
        }
        for (let obj in res) {
            data.push(res[obj])
        }
        console.log(JSON.stringify(data))
        this.setState({data})
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
//
    _renderItem = ({ item }) => (
                <TouchableOpacity onPress={()=> this.setState({selected:item.uid})}>
                <Image source={{uri:item.imageSource}} style={{width:StyleConfig.responsiveWidth(25), height:StyleConfig.responsiveWidth(25),}}/>
                    { this.state.selected === item.uid &&  <View style={{width:StyleConfig.responsiveWidth(20), height:StyleConfig.responsiveWidth(20),marginTop:8, alignSelf:'center', justifySelf:'center', borderRadius: StyleConfig.responsiveWidth(25)/2, borderWidth:0, backgroundColor:'rgba(255,0,0,0.2)',position:'absolute'}}>
                        <Image source={AppImages.ic_right} resizeMode={'center'} style={{width:StyleConfig.responsiveWidth(20), height:StyleConfig.responsiveWidth(20),}} />

                    </View>}
                </TouchableOpacity>)

    _keyExtractor = (item, index) => item.uid;
    render() {
        const {navigation} = this.props
        return (
            <View style={{flex: 1}}>
                <View style={{height:StyleConfig.countPixelRatio(60), backgroundColor:'#f00', justifyContent:'center'}}>
                    <CText style={{color:'#fff', paddingHorizontal:StyleConfig.countPixelRatio(16)}} onPress={()=> navigation.goBack()}>Back</CText>
                </View>
                <View style={{flex:1, backgroundColor: '#fff'}}>
                     <FlatList
                        extraData={this.state}
                        keyExtractor={this._keyExtractor}
                        data={this.state.data}
                        renderItem={this._renderItem}
                        numColumns={4}
                    />
                </View>
            </View>
        )
    }
}
