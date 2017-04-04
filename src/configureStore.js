import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
//import createLogger from 'redux-logger';
import rootReducer from './reducers/reducers';

//const loggerMiddelware = createLogger();

export default function configureStore(preloadedSate) {
    return createStore(
        rootReducer,
        preloadedSate,
        applyMiddleware(
            thunkMiddleware,
//            loggerMiddelware
        )
    );
}
