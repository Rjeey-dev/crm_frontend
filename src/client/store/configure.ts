// @ts-ignore
// import {connectRouter, routerMiddleware} from 'connected-react-router';
// import {History} from "history";
import {connectRouter, routerMiddleware} from "connected-react-router";
import {History} from "history";
import {localizeReducer} from "react-localize-redux";
import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import {reducer as formReducer} from 'redux-form';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import createSagaMiddleware from 'redux-saga';

import configureLocalization from "store/localization";
import {configureServices} from "services/index";
import abilities from './abilities';
import middlewares from './middlewares';
import reducer from './reducer';
import userReducer from './users/reducer';
import settingsReducer from './settings/reducer';
import sagas from './sagas';
import states from './states';
import {onAppIsInitializing} from "store/common/actions";

const localizePersistConfig = {
    key: 'localize',
    storage
};

// TODO - move it to common
const configureStore = (history: History) => {
    const rootReducer = combineReducers({
        app: reducer,
        users: userReducer,
        settings: settingsReducer,
        localize: persistReducer(localizePersistConfig, localizeReducer),
        router: connectRouter(history),
        form: formReducer
    });

    const sagaMiddleware = createSagaMiddleware();

    const enhancers = [
        applyMiddleware(
            routerMiddleware(history),
            ...middlewares,
            abilities,
            sagaMiddleware
        ),
        // @ts-ignore
        typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
    ];

    // Get actual state to build store.
    const store = createStore(rootReducer, states.getState(), compose(...enhancers));
    configureLocalization(store);

    // Instantiate all services.
    // @ts-ignore
    const services = configureServices(store.getState());

    let sagaTask = sagaMiddleware.run(sagas, services);

    store.subscribe(() => {
        localStorage.setItem('store', JSON.stringify({
            users: store.getState().users,
        }))
    });

    if (module.hot) {
        module.hot.accept('./reducer', () => {
            const nextReducer = require('./reducer').default;
            store.replaceReducer(nextReducer);
        });
        module.hot.accept('./sagas', () => {
            const nextSagas = require('./sagas').default;
            sagaTask.cancel();
            sagaTask.done.then(() => {
                sagaTask = sagaMiddleware.run(nextSagas, services)
            })
        })
    }

    store.dispatch(onAppIsInitializing());

    return store;
};

export default configureStore;