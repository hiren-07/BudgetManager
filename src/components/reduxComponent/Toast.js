import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text } from 'react-native';
import Toast from 'react-native-simple-toast';
class MyToast extends Component {
    constructor() {
        super(...arguments);
        this.state = {
            toast:''
        }
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.toast.text != prevState.toast.text) {
            Toast.showWithGravity(nextProps.toast.text,Toast.SHORT,Toast.BOTTOM);
            return ({
                toast: nextProps.toast.text
            })
        } else {
            return null
        }
    }

    render() {
        return (
            <Text style={{ height:0,
                width:0}}/>
        );
    }
}

const mapStateToProps = state => ({
    toast: state.toast != '' ? state.toast : ''
});

export default connect(mapStateToProps)(MyToast);
