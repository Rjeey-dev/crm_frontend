export interface IPreloadChangedState {
    type: string,
    payload: {
        action: string
    }
}

export interface IPreloaderState {
    [key: string]: boolean
}

export interface ISettingsState {
    preloaders: IPreloaderState[],
}