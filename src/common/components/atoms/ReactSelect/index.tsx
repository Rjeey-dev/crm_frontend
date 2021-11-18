import React from 'react';
import Select from "react-select";
// @ts-ignore
import CreatableSelect from 'react-select/creatable';

import {IOption, IProps} from "./interfaces";
import Label from "atoms/Label";
import Translation from "atoms/Translation";

export const getSelectValue = (options: any[], defaultValueSource: number | string) => {
    const value = options.filter(option => option.value === defaultValueSource);

    return value[0];
};

export const ReactSelect = (props: IProps) => {
    const { input, options, classes, name, isMulti, placeholder, isDisabled, isCreatable } = props;
    const isCreatableSelect = isCreatable ? isCreatable : false;

    const onBlur = ('onBlur' in input) ? () => (event: any) => event.preventDefault() : null;

    let valueFormatted = '';

    const value = input.value;

    if (typeof value === 'string' || typeof value === 'number') {
        valueFormatted = getSelectValue(options, value);
        // @ts-ignore
    } else if (typeof value === 'object' && value.length > 0) {
        // @ts-ignore
        valueFormatted = [] as any[];

        value.map((item: any) => {
            if (typeof item === 'object') {
                // @ts-ignore
                return valueFormatted.push(item)
            }

            const option = isCreatableSelect ? {
                value: item,
                label: item.toLowerCase()
            } : getSelectValue(options, item);

            // @ts-ignore
            return valueFormatted.push(option)
        });

    } else {
        valueFormatted = value;
    }

    const selectProps = {
        ...input,
        name,
        onChange: (value: IOption | IOption[]) => {
            if (!value) {
                let result = isMulti ? [] : '';

                input.onChange(result);

                return;
            }

            if (value.hasOwnProperty('value')) {
                const result = value as IOption;

                input.onChange(result.value);

                return;
            }

            let result = [] as any[];
            const valueMap = value as IOption[];
            valueMap.map((value: IOption) => {
                result.push(value.value);
            });

            input.onChange(result);
        },
        onBlur,
        options,
        isMulti,
        isDisabled: isDisabled ? isDisabled : false,
        value: valueFormatted,
        className: classes,
        placeholder
    };

    if (isCreatableSelect) {
        return <CreatableSelect {...selectProps}/>
    }

    return <div className='form-group'>
        <Label classes='label'><Translation source={props.label}/></Label>
        <Select {...selectProps}/>
    </div>
};