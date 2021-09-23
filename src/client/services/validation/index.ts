// @ts-ignore
import pretty from 'prettysize';

import {translation} from "services/common/translations";
import isEmail from 'validator/lib/isEmail';
import isIn from 'validator/lib/isIn';
import isURL from 'validator/lib/isURL';
import matches from 'validator/lib/matches';

// const phoneUtil = require('google-libphonenumber').PhoneNumberUtil.getInstance();

const join = (rules: never[]) => (value: string | FileList, data: {}) => rules.map(rule => {
    if (Object.keys(data).length < 1) {
        return;
    }

    // @ts-ignore
    return rule(value, data);
}).filter(error => !!error)[0];

const isEmpty = (value: string) => value === undefined || value === null || value === '' || value.length === 0;

export const email = (value: string) => !isEmpty(value) && !isEmail(value) && translation('validation.invalid_email_address');

export const url = (value: string) => !isEmpty(value) && !isURL(value) && 'Invalid URL';

export const required = (value: string) => isEmpty(value) && translation('validation.required_field');

export const matchYoutubeUrl = (url: string): boolean => {
    const pattern = /^(?:https?:\/\/)?(?:m\.|www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/;

    if (url.match(pattern)) {
        const matchUrl = url.match(pattern);

        if (!matchUrl) {
            return false;
        }

        return matchUrl[1] !== null;
    }

    return false;
};

/*export const phone = (value: string) => {
    const number = phoneUtil.parseAndKeepRawInput('+375298034244');
    const number2 = phoneUtil.parseAndKeepRawInput(value);
    console.log(phoneUtil.isPossibleNumber(number));
    console.log(phoneUtil.isPossibleNumber(number2));

    if (!phoneUtil.isValidNumber(number2)) {
        return translation('validation.phone_is_not_valid');
    }

    return true;
}*/

export const minArrayLength = (min: number) => (value: any[]) => {
    return value.length < min && translation('validation.min_items_length', {min});
};

export const maxArrayLength = (max: number) => (value: any[]) => {
    return value.length > max && translation('validation.max_items_length', {max});
};

export const minLength = (min: number) => (value: string) => {
    return !isEmpty(value) && value.length < min && translation('validation.min_length', {min});
};

export const maxLength = (max: number) => (value: string) => !isEmpty(value) && value.length > max && translation('validation.max_length', {max});

export const integer = (value: string) => !isEmpty(value) && !/^\d+$/.test(value) && translation('validation.must_be_integer');

export const max = (max: number) => (value: string) => !isEmpty(value) && parseInt(value) > max && translation('validation.max', {max});

export const min = (min: number) => (value: string) => !isEmpty(value) && parseInt(value) < min && translation('validation.min', {min});

export const oneOf = (values: string[], value: string) => {
    if (!isIn(value, values)) {
        return translation('validation.must_be_one_of', {values: values.join(', ')});
    }

    return;
};

export const mapHasRoutes = (mapState: any) => !isEmpty(mapState) && !isEmpty(mapState.map) && mapState.map.commonCoordinates.length < 2 && translation('validation.map_should_have_at_least_two_points');

export const mapIsNotRendered = (mapState: any) => !isEmpty(mapState) && !isEmpty(mapState.map) && mapState.isRenderDirectionAvailable && translation('validation.map_should_be_rendered');

export const match = (field: string) => (value: string, data: []) => data && value !== data[field] && 'Must match';

export const noSpacesAllowed = (value: string) => !isEmpty(value) && !matches(value, /^\S*$/) && translation('validation.no_spaces_allowed');

export const fileSize = (max: string) => (value: FileList) => {
    const file = getFile(value);

    if (file) {
        if (('size' in file) && Number(file.size) > Number(max)) {
            return translation('validation.max_file_size', {max: pretty(max)});
        }
    }

    return;
};

export const fileExtension = (extensions: string[]) => (value: FileList) => {
    const file = getFile(value);

    if (file) {
        const extension = String(file.name.split('.').pop());

        return oneOf(extensions, extension);
    }

    return;
};

export const fileName = (max: number) => (value: FileList) => {
    const file = getFile(value);

    if (file) {
        if (file.name.length > max) {
            return translation('validation.max_length', {max});
        }
    }

    return;
};

const getFile = (files: FileList): File | null => {
    if (files && files.length > 0) {
        return files[0];
    }

    return null;
};

export const createPackageValidator = (rules: any) => (data: any) => {
    const errors = {};

    if (!data.hasOwnProperty('packages')) {
        return errors;
    }

    Object.keys(rules).forEach((key) => {
        const rule = join([].concat(rules[key]));

        const ruleValue = key === 'name' ? data[key] : data.packages[0][key];
        const error = rule(ruleValue, data);

        if (error) {
            if (key === 'name') {
                errors[key] = error;
            } else {
                errors['packages'] = [{
                    0: {}
                }];
                errors['packages'][0][key] = error;
            }
        }
    });

    return errors;
};

export const createValidator = (rules: any) => (data = {}) => {
    const errors = {};
    Object.keys(rules).forEach((key) => {
        const rule = join([].concat(rules[key]));
        const error = rule(data[key], data);
        if (error) {
            errors[key] = error
        }
    });

    return errors;
};
