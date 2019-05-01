import { StyleSheet, Platform, Dimensions } from 'react-native';
const WINDOW = Dimensions.get('window');
import StyleConfig from '../../assets/StyleConfig'

const styles = StyleSheet.create({
    rootContainer: {
        flex:1,
        backgroundColor:StyleConfig.COLOR.WHITE,
    },
    container: {
        backgroundColor:StyleConfig.COLOR.WHITE,
    },
    content: {
        flex: 1,
        backgroundColor: StyleConfig.COLOR.WHITE,
        paddingHorizontal: StyleConfig.countPixelRatio(20)
    },
    scrollView: {
        width: WINDOW.width,
        height: WINDOW.height - 40 - (Platform.OS === 'android' ? 24 : 0),
        backgroundColor: StyleConfig.COLOR.WHITE
    },
    contentContainerStyle: {
        flexGrow: 1,
        backgroundColor: StyleConfig.COLOR.WHITE,
        paddingHorizontal: StyleConfig.countPixelRatio(20)
    },
    titleText: {
        color: StyleConfig.COLOR.THEME,
        fontSize: StyleConfig.countPixelRatio(20),
        lineHeight: StyleConfig.countPixelRatio(26),
        letterSpacing:0.25
    },
    bodyText: {
        color: StyleConfig.COLOR.WHITE,
        fontSize: StyleConfig.countPixelRatio(12),
        letterSpacing:0.25,
        lineHeight: StyleConfig.countPixelRatio(18)
    },
    mainGrid: {
        width:WINDOW.width,
        justifyContent:'center',
        alignItems:'center',
        marginHorizontal: StyleConfig.countPixelRatio(20)
    },
    inputStyle: {
        flex: 1,
        color:StyleConfig.COLOR.WHITE,
        fontSize: StyleConfig.countPixelRatio(10),
        letterSpacing:0.25,
        padding: 0,
        marginBottom: StyleConfig.countPixelRatio(8),
        marginTop: StyleConfig.countPixelRatio(5),
        lineHeight: StyleConfig.countPixelRatio(25)
    },
    labelInput: {
        color:StyleConfig.COLOR.THEME_DARK,
        fontFamily:StyleConfig.fontRegular,
        fontSize: StyleConfig.countPixelRatio(15),
        letterSpacing:1,
        lineHeight: StyleConfig.countPixelRatio(20),
        padding: 0,
        backgroundColor: 'transparent',
        marginTop: StyleConfig.countPixelRatio(5)
    },

    labelInputSuccess: {
        color:StyleConfig.COLOR.WHITE,
        fontFamily:StyleConfig.fontRegular,
        fontSize: StyleConfig.countPixelRatio(15),
        letterSpacing:1,
        lineHeight: StyleConfig.countPixelRatio(20),
        padding: 0,
        backgroundColor: 'transparent',
        marginTop: StyleConfig.countPixelRatio(5)
    },

    labelInputError: {
        color: StyleConfig.COLOR.RED_LIGHT,
        fontFamily: StyleConfig.fontRegular,
        fontSize: StyleConfig.countPixelRatio(15),
        letterSpacing:1,
        lineHeight: StyleConfig.countPixelRatio(20),
        padding: 0,
        backgroundColor: 'transparent',
        marginTop: StyleConfig.countPixelRatio(5)
    },

    formFieldIcon:{
        resizeMode:'contain'
    },

    infoStyle:{
        color: '#FFFFFF',
        marginTop: StyleConfig.countPixelRatio(5),
        padding: 0,
        letterSpacing: 0.25,
        fontSize: StyleConfig.countPixelRatio(10)
    },

    headerSmallLabel:{
        color:StyleConfig.COLOR.WHITE,
        fontSize: StyleConfig.countPixelRatio(10),
        letterSpacing:1
    },

    headerLabelView: {
        alignItems: 'center',
        backgroundColor:StyleConfig.COLOR.WHITE,
        paddingLeft: StyleConfig.countPixelRatio(12),
        height: StyleConfig.countPixelRatio(30),
        shadowColor: StyleConfig.COLOR.WHITE,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: StyleConfig.countPixelRatio(2),
        shadowOpacity: 0.25,
        elevation: StyleConfig.countPixelRatio(2)
    },

    headerLabelText: {
        color: StyleConfig.COLOR.WHITE,
        fontSize: StyleConfig.countPixelRatio(15),
        lineHeight: StyleConfig.countPixelRatio(20),
        letterSpacing: 0.25
    },

    headerLabelRed: {
        alignItems: 'center',
        backgroundColor: StyleConfig.COLOR.WHITE,
        paddingLeft: StyleConfig.countPixelRatio(16),
        height: StyleConfig.countPixelRatio(30),
        shadowColor: StyleConfig.COLOR.BLACK,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: StyleConfig.countPixelRatio(2),
        shadowOpacity: 0.25,
        elevation: StyleConfig.countPixelRatio(2)
    },

    headerLabelNoColor: {
        color:StyleConfig.COLOR.WHITE,
        fontSize: StyleConfig.countPixelRatio(15),
        letterSpacing: 1.5,
        lineHeight: StyleConfig.countPixelRatio(20),
        backgroundColor: 'transparent'
    },
    sideErrorInput: {
        color:StyleConfig.COLOR.WHITE,
        marginTop:StyleConfig.countPixelRatio(5),
        padding: 0,
        letterSpacing: 0.25,
        fontSize: StyleConfig.countPixelRatio(10)
    },

    sideInputInfo: {
        color:StyleConfig.COLOR.WHITE,
        marginTop:StyleConfig.countPixelRatio(5),
        padding: 0,
        letterSpacing: 0.25,
        fontSize: StyleConfig.countPixelRatio(10)
    },

    sideInputView: {
        flexDirection:'row',
        justifyContent:'space-between',
    },

    labelInputView: {
        flexDirection:'row'
    },

    placeholder: {
        letterSpacing:1,
        fontFamily:StyleConfig.fontRegular,
        fontSize: StyleConfig.countPixelRatio(10),
    },

    itemInput: {
        borderColor:StyleConfig.COLOR.THEME_DARK,
        borderBottomWidth: 1,
        lineHeight:StyleConfig.countPixelRatio(25),
        marginLeft:0
    },

    itemInputError: {
        borderColor:StyleConfig.COLOR.RED_LIGHT,
        borderBottomWidth: 1,
        lineHeight:StyleConfig.countPixelRatio(25),
        marginLeft:0
    },

    itemInputSuccess: {
        borderColor:StyleConfig.COLOR.THEME_DARK,
        borderBottomWidth: 1,
        lineHeight:StyleConfig.countPixelRatio(25),
        marginLeft:0
    },

    labelInfo: {
        fontSize: StyleConfig.countPixelRatio(15),
        color:StyleConfig.COLOR.WHITE,
        letterSpacing:1
    },

    mainContainerWithLoader: {
        position:'absolute',
        height: WINDOW.height,
        width: WINDOW.width,
        zIndex:999999
    },
    mainContainer: {
        position:'absolute',
        right:0,
        left:0,
        height:0,
        width:WINDOW.width,
        zIndex:999,
    },
    empty:{
        height:0,
        width:0
    },
    serviceImage: {
        width: StyleConfig.countPixelRatio(38),
        height: StyleConfig.countPixelRatio(38),
        resizeMode:'contain'
    },

    serviceBigImage: {
        width: StyleConfig.countPixelRatio(62),
        height: StyleConfig.countPixelRatio(62),
        resizeMode:'contain'
    },

    serviceSmallImage: {
        width: StyleConfig.countPixelRatio(20),
        height: StyleConfig.countPixelRatio(20),
        resizeMode:'contain'
    },

    disabled: {
        opacity:0.5
    },

    personalAccountBg: {
        backgroundColor:StyleConfig.COLOR.WHITE,
    },

    businessAccountBg: {
        backgroundColor:StyleConfig.COLOR.WHITE,
    },

    personalAccountText: {
        color:StyleConfig.COLOR.WHITE,
    },

    businessAccountText: {
        color: StyleConfig.COLOR.WHITE,
    },

    buttonH1: {
        justifyContent:'center',
        alignItems:'center',
        width:'100%',
        height: StyleConfig.countPixelRatio(18),
        shadowColor:StyleConfig.COLOR.WHITE,
        shadowOffset:{ width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: StyleConfig.countPixelRatio(2),
        borderRadius: StyleConfig.countPixelRatio(8),
        backgroundColor: StyleConfig.COLOR.WHITE,
        elevation: 1
    },

    buttonH1Text: {
        fontSize: StyleConfig.countPixelRatio(15),
        lineHeight: StyleConfig.countPixelRatio(20),
        letterSpacing:1.5,
        color:StyleConfig.COLOR.WHITE,
        backgroundColor: 'transparent'
    },

    buttonH2: {
        justifyContent:'center',
        alignItems:'center',
        width:'100%',
        height: StyleConfig.countPixelRatio(15),
        shadowColor: StyleConfig.COLOR.BLACK,
        shadowOffset:{ width: 0, height: 1 },
        shadowOpacity: 0.25,
        shadowRadius: StyleConfig.countPixelRatio(2),
        borderWidth: 1,
        borderRadius:StyleConfig.countPixelRatio(8),
        backgroundColor: StyleConfig.COLOR.WHITE,
        borderColor:StyleConfig.COLOR.WHITE,
        padding: 0,
        elevation: 1
    },

    buttonH2Text: {
        fontSize: StyleConfig.countPixelRatio(15),
        lineHeight: StyleConfig.countPixelRatio(20),
        letterSpacing:1.5,
        color:StyleConfig.COLOR.WHITE,
        backgroundColor: 'transparent'
    },

    scalarSpace: {
        marginRight: StyleConfig.countPixelRatio(15)
    },

    cancelBtnRow:{
        position: 'absolute',
        bottom: 0,
        marginBottom: StyleConfig.countPixelRatio(30),
        backgroundColor: 'transparent'
    },

    cancelBtnCol:{
        alignItems:'center'
    },

    cancelBtnText:{
        color:StyleConfig.COLOR.WHITE,
        fontSize: StyleConfig.countPixelRatio(15),
        letterSpacing: 1.5,
        height: StyleConfig.countPixelRatio(20),
        textAlign: 'center'
    },

    cancelButton: {
        backgroundColor: 'transparent',
        justifyContent:'center',
        alignItems:'center',
        width:'100%',
        height: StyleConfig.countPixelRatio(15)
    },

    cancelButtonText: {
        backgroundColor:'transparent',
        ...(Platform.OS == 'ios') ? {lineHeight: 1.5} : {},
        fontSize: StyleConfig.countPixelRatio(15),
        letterSpacing:1,
        color:StyleConfig.COLOR.WHITE
    },

    swapRow: {
        borderBottomWidth: 0
    },

    listDownArrow: {
        color:StyleConfig.COLOR.WHITE,
        fontSize: StyleConfig.countPixelRatio(20)
    },
    labelView:{
        backgroundColor:StyleConfig.COLOR.WHITE,
        height: StyleConfig.countPixelRatio(30),
        width: StyleConfig.countPixelRatio(4),
        justifyContent:'center',
        alignItems:'center',
        shadowColor: "#000",
        shadowOffset:{ width: 1, height: 1 },
        shadowOpacity: 0.5,
        shadowRadius: StyleConfig.countPixelRatio(2),
        elevation: StyleConfig.countPixelRatio(2)
    },
    labelViewTxt:{
        textAlign:'center',
        color:StyleConfig.COLOR.WHITE,
        fontSize: StyleConfig.countPixelRatio(15),
        lineHeight: StyleConfig.countPixelRatio(20),
        letterSpacing:1
    },
    dropdownTextView: {
        flexDirection: 'row',
        alignItems: 'center',
        borderColor:StyleConfig.COLOR.WHITE,
        borderBottomWidth: 1
    },
    dropdownText: {
        flex: 1,
        padding: 0,
        color: StyleConfig.COLOR.WHITE,
        fontSize: StyleConfig.countPixelRatio(15),
        letterSpacing: 0.25,
        lineHeight: StyleConfig.countPixelRatio(20),
        marginBottom: StyleConfig.countPixelRatio(5)
    },
    dropdownArrow: {
        flex: 1,
        textAlign: 'right',
        color: StyleConfig.COLOR.WHITE,
        fontSize: StyleConfig.countPixelRatio(24),
        height: StyleConfig.countPixelRatio(25),
    },
    itemListView:{
        position: 'absolute',
        bottom: StyleConfig.countPixelRatio(55),
        alignItems: 'center',
        justifyContent: 'center',
        width:WINDOW.width,
        backgroundColor: StyleConfig.COLOR.WHITE,
        shadowColor: StyleConfig.COLOR.WHITE,
        shadowOffset: { width: 1, height: 2},
        shadowOpacity: 0.5,
        shadowRadius: StyleConfig.countPixelRatio(2),
        zIndex: 99,
        elevation: StyleConfig.countPixelRatio(3)
    },
    itemRow: {
        height: StyleConfig.countPixelRatio(48),
        width: WINDOW.width,
        backgroundColor: StyleConfig.COLOR.WHITE,
        flexDirection: 'row',
        alignItems: 'center',
    },
    itemSelectedRow: {
        backgroundColor: StyleConfig.COLOR.WHITE
    },
    itemText: {
        marginLeft: StyleConfig.countPixelRatio(22),
        fontSize: StyleConfig.countPixelRatio(10),
        color:StyleConfig.COLOR.WHITE,
        lineHeight: StyleConfig.countPixelRatio(16)
    },
    itemSelectedText: {
    },
    dropdownLabelRow:{
        flexDirection: 'row'
    },
    dropdownLabel:{
        color:StyleConfig.COLOR.WHITE,
    }
});

export default styles;
