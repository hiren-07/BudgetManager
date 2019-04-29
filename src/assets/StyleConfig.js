import {Dimensions, Platform, NativeModules, PixelRatio} from 'react-native';
var RNDeviceInfo = NativeModules.RNDeviceInfo;
const {width,height} = Dimensions.get('window');
const isIphone = Platform.OS === "ios"
const widthPer = width /100 ;
const heightPer = height /100 ;
const ratioCount = Math.sqrt(height * height + width * width) /1000 ;
const pixelDensity = PixelRatio.get();
const adjustedWidth = width * pixelDensity ;
const adjustedHeight = height * pixelDensity ;
const isTablet=()=> {
    if ( isIphone ){
        return Platform.isPad ;
    }else {
        return (height/width) <= 1.6
    }
}
const APP_FONTS = {
    LATO_LIGHT: isIphone ? "Lato-Light" : 'lato_light',
    LATO_REGULAR: isIphone ? "Lato-Regular" : 'lato_regular',
    LATO_MEDIUM: isIphone ? "Lato-Medium" : 'lato_medium',
    LATO_BOLD: isIphone ? "Lato-Bold" : "lato_bold",
    LATO_ITALIC: isIphone ? "Lato-Italic" : 'lato_italic'

}
export default {
    countPixelRatio:(size) => size * ratioCount ,
    responsiveHeight: (size) => size * heightPer ,
    responsiveWidth: (size) => size * widthPer ,
    getFont:(type)=>{
        switch (type) {
            case "light":
                return APP_FONTS.LATO_LIGHT
            case "regular":
                return APP_FONTS.LATO_REGULAR
            case "medium":
                return APP_FONTS.LATO_MEDIUM
            case "bold":
                return APP_FONTS.LATO_BOLD
            case "italic":
                return APP_FONTS.LATO_ITALIC
            default:
                return APP_FONTS.LATO_REGULAR
        }
    },
    fontLight: APP_FONTS.LATO_LIGHT,
    fontRegular: APP_FONTS.LATO_REGULAR,
    fontMedium: APP_FONTS.LATO_MEDIUM,
    fontBold: APP_FONTS.LATO_BOLD,
    fontItalic: APP_FONTS.LATO_ITALIC,

    width,
    height,
    isPhone: !isTablet(),
    isTab: isTablet(),
    isIphone,
    COLOR:{
        THEME:'#0093BA'
    }
}
