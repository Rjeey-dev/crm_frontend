// import {BrowserRouter} from "react-router-dom";
import {ConnectedRouter} from "connected-react-router";
import { createBrowserHistory as createHistory } from 'history'
import React from "react";
import {LocalizeProvider} from "react-localize-redux";
import {Provider} from "react-redux";
// @ts-ignore
import {ThroughProvider} from 'react-through';

import App from "components/App";
import configureStore from "store/configure";

const history = createHistory();
const store = configureStore(history);

const initApp = () => {
    return <Provider store={store}>
        <ConnectedRouter history={history}>
            <LocalizeProvider store={store}>
                <ThroughProvider>
                    <App/>
                </ThroughProvider>
            </LocalizeProvider>
        </ConnectedRouter>
    </Provider>
};

export default initApp;