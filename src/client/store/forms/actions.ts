import {IFormEvent} from "store/interfaces";

export const onFormSubmitted = (type: string, payload: object, formName: string): IFormEvent => ({payload, type, formName});
export const onFormSubmitResult = (type: string, payload?: object): {type: string, payload: any} => ({type, payload});

export const getFormSubmittedActionName = (formName: string): string => {
    return 'ON_' + formName.toUpperCase() + '_FORM_SUBMITTED';
};

export const getSuccessSubmittedResultActionName = (formName: string): string => {
    return 'ON_SUCCESSFUL_' + formName.toUpperCase() + '_SUBMIT_RESULT';
};

export const getFailedSubmittedResultActionName = (formName: string): string => {
    return 'ON_FAILED_' + formName.toUpperCase() + '_SUBMIT_RESULT';
};