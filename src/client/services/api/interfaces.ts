import ApiException from "services/api/exceptions";

export interface IApiSettings {
    headers: object,
    data: object
}

export interface IApi {
    setToken: (token?: string) => void,
    unsetToken: () => void,
    parseEndpoint:  (endpoint: string, params: object) => string,
    parseSettings: (settings: IParseSettings) => RequestInit,
    // checkStatus: (response: IResponse) => IResponse | ApiException,
    // parseJSON: (response: IResponse) => object,
    request: (endpoint: string, settings?: object) => object | ApiException,
    delete: (endpoint: string, settings?: object) => object | ApiException,
    get: (endpoint: string, settings?: object) => object | ApiException,
    post: (endpoint: string, data?: object, settings?: object) => object | ApiException,
    put: (endpoint: string, data: object, settings?: object) => object | ApiException,
    patch: (endpoint: string, data: object, settings?: object) => object | ApiException
}

export interface IResponse extends Response {
    json: () => Promise<any>
}

export interface IParseSettings {
    headers?: object,
    method?: string,
    data?: object,
    locale?: string,
    params?: object
}