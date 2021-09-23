const req = require.context('.', true, /\.\/.+\/selectors\.ts$/);
const initialAppState = {};

req.keys().forEach((key: string) => {
    const storeName = key.replace(/\.\/(.+)\/.+$/, '$1');
    const selectors = req(key);

    initialAppState[storeName] = selectors.initialState;
});

export default initialAppState;