import {HTTP_OK} from "services/api";

class ApiException extends Error {
    public response: {};
    public status: number;

    constructor(message: string) {
        super(message);

        this.response = {};
        this.status = HTTP_OK;
    }

    public setResponse = (response: any) => {
        this.response = response;
    }
}

export default ApiException;
