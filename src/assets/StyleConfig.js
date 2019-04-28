import {Dimensions, Platform, NativeModules, PixelRatio} from 'react-native';
var RNDeviceInfo = NativeModules.RNDeviceInfo;
const {width,height} = Dimensions.get('window');
const widthPer = width /100 ;
const heightPer = height /100 ;
const ratioCount = Math.sqrt(height * height + width * width) /1000 ;
const pixelDensity = PixelRatio.get();
const adjustedWidth = width * pixelDensity ;
const adjustedHeight = height * pixelDensity ;
const isTablet=()=> {
    if ( Platform.OS === 'ios' ){
        return Platform.isPad ;
    }else {
        return (height/width) <= 1.6
    }
}
export default {
    countPixelRatio:(size) => size * ratioCount ,
    responsiveHeight: (size) => size * heightPer ,
    responsiveWidth: (size) => size * widthPer ,
    getFont:(type)=>{
        switch (type) {
            case "light":
                return "Lato-Light"
            case "regular":
                return "Lato-Regular"
            case "medium":
                return "Lato-Medium"
            case "bold":
                return "Lato-Bold"
            case "italic":
                return "Lato-Italic"
            default:
                return "Lato-Regular"
        }
    },
    fontLight: "Lato-Light",
    fontRegular: "Lato-Regular",
    fontMedium: "Lato-Medium",
    fontBold: "Lato-Bold",
    fontItalic: "Lato-Italic",

    width,
    height,
    isPhone: !isTablet(),
    isTab: isTablet(),
}
