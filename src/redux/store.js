import {createStore, applyMiddleware, compose, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import {
    loader,
    toast,
    internetConn
} from './reducers';
import {reducer as formReducer} from 'redux-form';

const store = createStore(
    combineReducers({
        loader,
        toast,
        internetConn,
        form: formReducer
    }),
    undefined,
    compose(applyMiddleware(thunk))
);

export default store;
