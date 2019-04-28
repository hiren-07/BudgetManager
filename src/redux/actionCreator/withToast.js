import {connect} from "react-redux";
import { toastSet } from "../actions";

const mapDispatchToProps = dispatch => ({
    toast: text => {
        dispatch(toastSet(text));
    }
});

export default connect(null, mapDispatchToProps);
