import React from 'react'
import {
    Text
} from 'react-native'
import StyleConfig from "../../assets/StyleConfig";

 const CText = ({type, style, ...props})=>(
    <Text style={[{fontFamily: StyleConfig.getFont(type)},style]} {...props}>{props.children}</Text>
)
export default CText
