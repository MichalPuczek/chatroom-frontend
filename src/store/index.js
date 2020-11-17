// == IMPORT from REDUX
import { createStore, compose, applyMiddleware } from 'redux';
import reducer from "./reducer";

// == IMPORT Middlewares
import ajaxMiddleware from './middlewares/ajaxMiddleware';
import socketMiddleware from './middlewares/socketMiddleware';

// == Enhancers
const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const enhancers = composeEnhancers(
    applyMiddleware(
        ajaxMiddleware,
        socketMiddleware
    )
);


// == STORE
const store = createStore(
    reducer,
    enhancers,
);

// == Export
export default store;