import camelCase from 'lodash/camelCase';
import { combineReducers } from 'redux'

const reducers = {};

const req = require.context('.', true, /\.\/.+\/reducer\.ts/);

req.keys().forEach((key: string) => {
    const storeName = camelCase(key.replace(/\.\/(.+)\/.+$/, '$1'));
    if (storeName !== 'forms' && storeName !== 'users') {
        reducers[storeName] = req(key).default;
    }
});



export default combineReducers(reducers)