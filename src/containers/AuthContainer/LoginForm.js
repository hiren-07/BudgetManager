import React, {Component} from 'react'
import {
    StyleSheet,
    View,
    TouchableOpacity,
    Text,
    ScrollView
} from 'react-native'
import StyleConfig from '../../assets/styles/StyleConfig'
import Styles from '../../assets/styles/Styles'
import emailRegex from '../../helper/utils/index'
import ReduxField from '../../components/ReduxField'
import {reduxForm} from 'redux-form';
class LoginForm extends Component {

    // componentWillMount(){
    //     this.props.navigation.setParams({title: 'Login'})
    // }

    render() {
        const { handleSubmit, onSubmit, onSignUp } = this.props;
        return (
            <ScrollView>
            <View>
                <View style={styles.screenTitleRow}>
                    <Text style={styles.screenTitle}>{'SIGN IN'}</Text>
                </View>
                <ReduxField
                    name="email"
                    placeholder="Email"
                    label="Email"
                    refProp={(ref) => this.emailRef = ref}
                    type={'text'}
                    autoCapitalize="none"
                    autoCorrect={false}
                    autoFocus={true}
                    returnKeyType={"next"}
                    style={styles.inputStyle}
                    keyboardType={"email-address"}
                    ellipsizeMode='tail'
                    numberOfLines={1}
                    onEndEditing={() => {
                        this.passwordRef.focus();
                        // this._scrollTo(this.passwordRef)
                    }}
                    onSubmitEditing={() => this.passwordRef.focus()}
                />
                <ReduxField
                    refProp={(ref) => this.passwordRef = ref}
                    name="password"
                    placeholder="Password"
                    label="Password"
                    secureTextEntry={true}
                    autoCapitalize="none"
                    style={styles.inputStyle}
                    autoCorrect={false}
                    type={'text'}
                    returnKeyType={"done"}
                    onSubmitEditing={() => {
                        // this.scrollRef.scrollTo({y: 0})
                    }}
                />
                <View style={styles.buttonRow}>
                    <TouchableOpacity style={Styles.buttonContainer} onPress={handleSubmit(onSubmit)}>
                        <Text style={Styles.buttonText}>{'Sign In'}</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.buttonRow}>
                    <TouchableOpacity style={Styles.buttonContainer} onPress={()=>alert('Register')}>
                        <Text style={Styles.buttonText}>{'Sign Up'}</Text>
                    </TouchableOpacity>
                </View>
                {/*<View style={styles.forgotRow}>*/}
                    {/*<Text style={styles.forgotText}>{'Forgot your password?'}</Text>*/}
                {/*</View>*/}
            </View>
            </ScrollView>
        )
    }
}

const initialValues = {
    email: 'hiren@gmail.com',
    password: '123456'
};
const validate = values => {
    let errors = {};

    errors.email = !values.email
        ? 'Required'
        : !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
            ? 'Invalid Email'
            : undefined;

    errors.password = !values.password
        ? 'Required'
        : undefined;

    return errors;
};

const withForm = reduxForm({
    form: 'loginForm',
    validate,
    initialValues
})
export default withForm(LoginForm)
const styles = StyleSheet.create({
    screenTitleRow:{
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: StyleConfig.countPixelRatio(10)
    },
    screenTitle:{
        color: StyleConfig.COLOR.THEME_DARK,
        fontFamily:StyleConfig.fontRegular,
        fontSize: StyleConfig.countPixelRatio(22),
    },
    inputStyle:{
        flex: 1,
        color:StyleConfig.COLOR.WHITE,
        fontFamily:StyleConfig.fontRegular,
        fontSize: StyleConfig.countPixelRatio(14),
        letterSpacing:0.25,
        padding: 0,
        marginBottom: StyleConfig.countPixelRatio(8),
        lineHeight: StyleConfig.countPixelRatio(20)
    },
    buttonRow:{
        marginVertical: StyleConfig.countPixelRatio(10)
    },
    forgotRow: {
        justifyContent:'center',
        alignItems:'center',
        width:'100%',
        marginVertical: StyleConfig.countPixelRatio(20)
    },
    forgotText:{
        color:StyleConfig.COLOR.WHITE,
        fontFamily:StyleConfig.fontRegular,
        fontSize: StyleConfig.countPixelRatio(14) ,
        lineHeight: StyleConfig.countPixelRatio(20),
        letterSpacing:1
    }

})
