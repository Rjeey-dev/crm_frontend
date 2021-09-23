import {apiUrl} from 'client/config';
import lodash from 'lodash';
import { stringify } from 'query-string';

import ApiException from './exceptions';

import {IApi, IApiSettings, IParseSettings, IResponse} from "./interfaces";

export const HTTP_ERR_CONNECTION_REFUSED = 102;
export const HTTP_OK = 200;

export class Api implements IApi {
    private readonly settings = {
        headers: {},
        data: {}
    };

    constructor(settings: IApiSettings, token?: string) {
        this.settings = settings;

        this.setToken(token);
    }

    public setToken = (token?: string): void => {
        this.settings.headers = {
            ...this.settings.headers,
            'X-Auth-Token': token,
        };
    };

    public unsetToken = () => {
        this.settings.headers = {
            ...this.settings.headers,
            'X-Auth-Token': undefined
        }
    };

    public parseEndpoint = (endpoint: string, params?: any) => {
        const url = endpoint.indexOf('http') === 0 ? endpoint : apiUrl + endpoint;
        const querystring = params ? `?${stringify(params)}` : '';

        return `${url}${querystring}`;
    };

    public parseSettings = ({method = 'get', data, locale, ...otherSettings}: IParseSettings): RequestInit => {
        const headers = {
            'Accept': 'application/json',
            'Accept-Language': locale,
            'Content-Type': 'application/json',
        };
        const body = data && method !== 'GET' ? JSON.stringify(data) : undefined;

        return lodash.merge({
            body,
            headers,
            method,
        }, otherSettings) as RequestInit
    };

    public checkStatus = (response: IResponse): IResponse | ApiException => {
        if (response.ok) {
            return response;
        }

        const error = new ApiException(response.status + response.statusText);
        error.response = response.json().then(apiError => apiError);
        error.status = response.status;

        throw error;
    };

    public parseJSON = (response: IResponse): object => {
        if (response.ok) {
            return response.json();
        }

        const error = new ApiException(response.status + response.statusText);
        error.status = response.status;
        error.response = response.json();

        throw error;
    };

    public request = (endpoint: string, { params, ...settings }: IParseSettings = {}): IResponse | ApiException => {
        const currentSettings = {
            ...this.settings,
            data: undefined
        };

        const requestSettings = lodash.merge(currentSettings, settings) as IParseSettings;

        // @ts-ignore
        return fetch(this.parseEndpoint(endpoint, params), this.parseSettings(requestSettings))
            .catch(message => {
                const error = new ApiException(message);
                error.status = HTTP_ERR_CONNECTION_REFUSED;

                throw error;
            })
            // .then(this.checkStatus)
            .then(this.parseJSON)
    };

    public delete = (endpoint: string, settings: IParseSettings = {}): IResponse | ApiException => {
        return this.request(endpoint, { method: 'DELETE', ...settings });
    };

    public get = (endpoint: string, settings: object = {}): IResponse | ApiException => {
        return this.request(endpoint, { method: 'GET', ...settings });
    };

    public post = (endpoint: string, data: object, settings: object = {}): IResponse | ApiException => {
        return this.request(endpoint, { method: 'POST', data, ...settings })
    };

    public put = (endpoint: string, data: object, settings: object = {}): IResponse | ApiException => {
        return this.request(endpoint, { method: 'PUT', data, ...settings })
    };

    public patch = (endpoint: string, data: object, settings: object = {}): IResponse | ApiException => {
        return this.request(endpoint, { method: 'PATCH', data, ...settings })
    };
}

export default Api;
