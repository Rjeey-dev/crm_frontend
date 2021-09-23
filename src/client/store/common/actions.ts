export const ON_APP_IS_INITIALIZING = 'ON_APP_IS_INITIALIZING';

export const ON_SERVER_IS_NOT_RESPONDING = 'ON_SERVER_IS_NOT_RESPONDING';
export const WS_CONNECTED = 'WS_CONNECTED';
export const WS_DISCONNECTED = 'WS_DISCONNECTED';
export const WS_SEND_MESSAGE = 'WS_SEND_MESSAGE';
export const WS_MESSAGE = 'WS_MESSAGE';

export const onAppIsInitializing = (): {type: string} => ({
    type: ON_APP_IS_INITIALIZING,
});

export const onWSConnected = (): {type: string} => ({
    type: WS_CONNECTED,
});

export const onWSMessage = (payload: any): {type: string, payload: any} => ({
    type: WS_MESSAGE,
    payload
});