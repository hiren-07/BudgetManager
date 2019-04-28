import { connect } from "react-redux";
import { internetConnSet } from "../actions";

const mapDispatchToProps = dispatch => ({
    checkInternet: state => {
        dispatch(internetConnSet(state));
    }
});

const mapStateToProps = state => ({
    checkInternetState: state.internetConn ? state.internetConn : false
});

export default connect(mapStateToProps,mapDispatchToProps);
