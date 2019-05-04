import StyleConfig from './StyleConfig'

export default {
    buttonContainer: {
        justifyContent:'center',
        alignItems:'center',
        width:'100%',
        height: 40,
        shadowColor: StyleConfig.COLOR.THEME,
        shadowOffset:{ width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 2,
        backgroundColor:StyleConfig.COLOR.THEME,
        elevation: 1
    },
    buttonText:{
        fontFamily: StyleConfig.fontBold,
        fontSize: 18,
        lineHeight:20,
        letterSpacing:1.5,
        color:StyleConfig.COLOR.WHITE,
        backgroundColor: 'transparent'
    }

}
