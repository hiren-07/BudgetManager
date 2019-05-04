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
        // THEME_LIGHT:'#39796b',
        // THEME:'#004d40',
        // THEME_DARK:'#00251a',
        THEME_LIGHT:'#5eb8ff',
        THEME:'#0288d1',
        THEME_DARK:'#005b9f',

        WHITE:'#fff',
        BLACK:'#000',
        WHITE2: '#ddd',
        BLACK2: '#333',
        GREY_LIGHT:'#CFCFCF',
        GREY:'#9E9E9E',
        GREY_DARK:'#707070',
        RED_LIGHT:'#f9683a',
        RED:'#bf360c',
        RED_DARK:'#870000',
        GREEN_LIGHT:'#4c8c4a',
        GREEN:'#1b5e20',
        GREEN_DARK:'#003300'
    }
}
