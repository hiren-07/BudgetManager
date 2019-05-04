import React, { Component } from 'react';
import { connect } from "react-redux";
import { View, ActivityIndicator, Modal,StyleSheet, Text, Platform } from 'react-native';
import StyleConfig from '../../assets/styles/StyleConfig'
class Loader extends Component {
    constructor() {
        super(...arguments);
    }

    render() {
        const { loader } = this.props;
        return (
        <Modal
            transparent={true}
            animationType={'none'}
            visible={loader}
            onRequestClose={() => {console.log('close modal')}}>
            <View style={styles.container}>
                <View style={styles.overlay}>
                    <ActivityIndicator
                        color={'#f5f5f5'}
                        size={(Platform.OS == 'ios') ? 1 : 14}
                        animating={loader} style={styles.progressBar}/>
                    <Text style={styles.text}>
                        Loading
                    </Text>
                </View>
            </View>
        </Modal>
        );
    }
}

const mapStateToProps = state => ({
    loader: state.loader ? state.loader : false
});

export default connect(mapStateToProps)(Loader);

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        backgroundColor: 'rgba(0,0,0,0.3)',
        justifyContent: 'center',
        alignItems: 'center',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        flex: 1
    },
    progressBar: {
        margin: StyleConfig.countPixelRatio(10),
        justifyContent: 'center',
        alignItems: 'center',
        padding: StyleConfig.countPixelRatio(10)
    },
    overlay: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: StyleConfig.countPixelRatio(10),
        padding: StyleConfig.countPixelRatio(10),
        width: StyleConfig.countPixelRatio(120),
        height: StyleConfig.countPixelRatio(100),
        backgroundColor: '#333333',
    },
    text: {
        fontFamily:StyleConfig.montRegular,
        marginTop: StyleConfig.countPixelRatio(8),
        color: '#f5f5f5',
        fontSize: StyleConfig.fontSizeParagraph,
    },
    noContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: 0.001,
        height: 0.001
    },
    empty:{
        height:0,
        width:0
    },
});
