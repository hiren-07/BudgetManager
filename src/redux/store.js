import {createStore, applyMiddleware, compose, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import {
    loader,
    toast,
    internetConn
} from './reducers';

const store = createStore(
    combineReducers({
        loader,
        toast,
        internetConn
    }),
    undefined,
    compose(applyMiddleware(thunk))
);

export default store;
