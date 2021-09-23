import {IStates} from "store/interfaces";
import {getInitialState} from "./users/selectors";

export class States implements IStates {
    constructor() {
        this.getState = this.getState.bind(this);
    }

    public getState() {
        try {
            const serializedState = window.localStorage.getItem('store');

            const parse = !serializedState ? {
                users: getInitialState(),
            } : serializedState;

            return JSON.parse(String(parse));
        } catch (err) {
            return undefined;
        }
    };
}

const states = new States();

export default states;