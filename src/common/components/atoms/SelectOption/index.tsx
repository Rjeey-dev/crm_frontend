import React from 'react';

export interface IOption {
    value: string,
    text: string,
    selected?: boolean
}

function SelectOption(props: IOption) {
    return <option selected={props.selected} value={props.value}>{props.text}</option>;
}

export default SelectOption;