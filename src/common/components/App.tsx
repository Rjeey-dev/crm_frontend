import React from 'react';
// @ts-ignore
import { renderRoutes } from 'react-router-config';
import {Switch} from 'react-router-dom';

import Routes from 'common/routes/index';

class App extends React.Component {
    public render() {
        return <Switch>
            {renderRoutes(Routes)}
        </Switch>
    }
}

export default App;
