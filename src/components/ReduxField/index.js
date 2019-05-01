import React, { Component } from "react";
import { View, Text, TextInput, TouchableOpacity, Platform } from 'react-native';
import { Field } from 'redux-form';
import styles from './styles';
import StyleConfig from '../../assets/StyleConfig'

class CustomField extends Component {
    focusInput() {
        if(this.input) {
            this.input.focus();
        }
    }

    _doFormat = (mask, reference) => {
        const { onChangeText } = this.props;
        let newReference = mask;
        let ignoreCount = 0;
        for (let n = 0; n < reference.length; n++) {
            if (reference.charAt(n) != mask.charAt(n)) {
                newReference = newReference.replace('X', reference.charAt(n));
                mask.charAt(n) != 'X' && ignoreCount++;
            }
        }
        newReference = newReference.substr(0, reference.length + ignoreCount);
        onChangeText(newReference);
    }

    render() {
        const { refProp, input, multiline, keyboardType, inputFormat, onChangeText, info, infoIcon, onInfoPress, showSideError, sideErrorInputStyle, changeSuccessColor, placeholder, labelIcon, labelIconSource, labelIconStyle, label, secureTextEntry, errorInputStyle, rightIcon, labelInputStyle, labelInputSuccess, labelInfo, _onFocus, _onBlur, _onChange,
            selectTextOnFocus, containerStyle, onLayout, ellipsizeMode, numberOfLines, returnKeyType, autoFocus, onEndEditing, inputHeight, autoGrow, maxLength, infoStyle, labelInfoStyle, autoCapitalize, placeholderTextColor, autoCorrect, style, placeholderStyle, disabled, meta: { touched, error, warning }, leftSideComponent, noInfo, onSubmitEditing
        } = this.props;
        const hasError = (typeof error !== 'undefined' ? true : false);
        const itemStyle = (hasError && touched)
            ? styles.itemInputError
            : (changeSuccessColor && touched)
                ? styles.itemInputSuccess
                : styles.itemInput;
        const labelInput = (!hasError && touched && changeSuccessColor) ? [styles.labelInputSuccess, labelInputSuccess] : [styles.labelInput, labelInputStyle];
        let returnKey = (returnKeyType) ? (Platform.OS === 'android') ? returnKeyType : (keyboardType && keyboardType === 'numeric') ? 'done' : returnKeyType : null;

        return (
            <View onLayout={onLayout} style={[{marginBottom:22}, containerStyle]}>
                <View style={itemStyle} underline>
                    {
                        (leftSideComponent) &&
                        <View style={styles.leftSideComponent}>
                            {leftSideComponent}
                        </View>
                    }
                    {
                        label != null &&
                        !noInfo && ((showSideError)
                                ? (hasError && touched)
                                    ? <View style={styles.sideInputView}>
                                        <View style={styles.labelInputView}>
                                            {
                                                labelIcon
                                                    ? labelIcon
                                                    : null
                                            }
                                            <Text style={[styles.labelInputError, errorInputStyle]}>{label}</Text>
                                        </View>
                                        <Text style={[styles.sideErrorInput, sideErrorInputStyle]}>{error}</Text>
                                    </View>
                                    : (!hasError && touched && changeSuccessColor)
                                        ? <View style={styles.sideInputView}>
                                            <View style={styles.labelInputView}>
                                                {
                                                    labelIcon
                                                        ? labelIcon
                                                        : null
                                                }
                                                <Text style={[labelInput]}>
                                                    <Text style={[labelInput, labelInputStyle]}>{label}</Text>
                                                    <Text style={[styles.labelInfo, labelInfoStyle]}>
                                                        {labelInfo}
                                                    </Text>
                                                </Text>
                                            </View>
                                            {(info) && <Text style={[styles.sideInputInfo, infoStyle, sideErrorInputStyle]}>{info}</Text>}
                                        </View>
                                        : <View style={styles.sideInputView}>
                                            <View style={styles.labelInputView}>
                                                {
                                                    labelIcon
                                                        ? labelIcon
                                                        : null
                                                }
                                                <Text style={[labelInput]}>
                                                    <Text style={[labelInput, labelInputStyle]}>{label}</Text>
                                                    <Text style={[styles.labelInfo, labelInfoStyle]}>
                                                        {labelInfo}
                                                    </Text>
                                                </Text>
                                            </View>
                                            {(info) && <Text style={[styles.sideInputInfo, infoStyle, sideErrorInputStyle]}>{info}</Text>}
                                        </View>
                                : (hasError && touched)
                                    ? <View style={styles.sideInputView}>
                                        <Text style={[styles.labelInputError, errorInputStyle]}>{error}</Text>
                                        {(info) && <TouchableOpacity disabled={!onInfoPress} onPress={(onInfoPress) ? onInfoPress : () => { }} style={{ flexDirection: 'row' }}>
                                            <Text style={[styles.sideInputInfo, infoStyle, sideErrorInputStyle]}>{info}</Text>
                                            {infoIcon}
                                        </TouchableOpacity>}
                                    </View>
                                    : (!hasError && touched && changeSuccessColor)
                                        ? <View style={styles.sideInputView}>
                                            <View style={styles.labelInputView}>
                                                {
                                                    labelIcon
                                                        ? labelIcon
                                                        : null
                                                }
                                                <Text style={[labelInput]}>
                                                    <Text style={[labelInput, labelInputStyle]}>{label}</Text>
                                                    <Text style={[styles.labelInfo, labelInfoStyle]}>
                                                        {labelInfo}
                                                    </Text>
                                                </Text>
                                            </View>
                                            {(info) && <TouchableOpacity disabled={!onInfoPress} onPress={(onInfoPress) ? onInfoPress : () => { }} style={{ flexDirection: 'row' }}>
                                                <Text style={[styles.sideInputInfo, infoStyle, sideErrorInputStyle]}>{info}</Text>
                                                {infoIcon}
                                            </TouchableOpacity>}
                                        </View>
                                        : <View style={styles.sideInputView}>
                                            <View style={styles.labelInputView}>
                                                {
                                                    labelIcon
                                                        ? labelIcon
                                                        : null
                                                }
                                                <Text style={[labelInput]}>
                                                    <Text style={[labelInput, labelInputStyle]}>{label}</Text>
                                                    <Text style={[styles.labelInfo, labelInfoStyle]}>
                                                        {labelInfo}
                                                    </Text>
                                                </Text>
                                            </View>
                                            {(info) && <TouchableOpacity disabled={!onInfoPress} onPress={(onInfoPress) ? onInfoPress : () => { }} style={{ flexDirection: 'row' }}>
                                                <Text style={[styles.sideInputInfo, infoStyle, sideErrorInputStyle]}>{info}</Text>
                                                {infoIcon}
                                            </TouchableOpacity>}
                                        </View>
                        )
                    }
                    <TextInput {...input}
                               ref={refProp ? refProp : (node) => this.input = node}
                               multiline={multiline}
                               keyboardType={keyboardType}
                               placeholder={placeholder}
                               secureTextEntry={secureTextEntry}
                               selectTextOnFocus={selectTextOnFocus}
                               placeholderTextColor={placeholderTextColor ? placeholderTextColor : StyleConfig.COLOR.WHITE}
                               style={Object.assign([styles.inputStyle, style])}
                               placeholderStyle={styles.placeholder}
                               autoCapitalize={autoCapitalize}
                               autoCorrect={autoCorrect}
                               autoGrow={autoGrow}
                               returnKeyType={returnKey}
                               autoFocus={autoFocus}
                               onEndEditing={onEndEditing}
                               onSubmitEditing={onSubmitEditing}
                               numberOfLines={numberOfLines}
                               ellipsizeMode={ellipsizeMode}
                               maxLength={maxLength}
                               editable={!disabled}
                               underlineColorAndroid={Platform.OS === 'android' ? 'transparent' : null}
                               onChangeText={(typeof inputFormat != 'undefined') ? this._doFormat.bind(this, inputFormat) : onChangeText}
                               {...(_onFocus) ? { onFocus: () => { _onFocus() } } : {}}
                               {...(_onBlur) ? { onBlur: () => { _onBlur() } } : {}}
                    />
                    {rightIcon}
                </View>

            </View>
        )
    }
}

class ReduxField extends Component {

    focus() {
        this.customField.getRenderedComponent().focusInput()
    }

    render() {
        return (
            <Field
                {...this.props}
                component={CustomField}
                ref={node => this.customField = node}
                withRef
            />
        );
    }

}

export default ReduxField;
