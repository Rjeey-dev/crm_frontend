import ReactDOM, { hydrate } from 'react-dom';

import initApp from "client/init";
import * as serviceWorker from './serviceWorker';

const root = document.getElementById('app');
ReactDOM.render(initApp(), root);

if (module.hot) {
    module.hot.accept('common/components/App', () => {
        require('common/components/App');
        hydrate(initApp(), root);
    })
}

serviceWorker.register();
