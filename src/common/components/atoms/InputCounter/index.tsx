import React from 'react';
// @ts-ignore
import CounterInput from "react-counter-input";
import {IProps} from "./interfaces";

const InputCounter = (props: IProps) => {
    return <CounterInput
        min={props.min}
        max={props.max}
        count={props.count}
        onCountChange={(count: any) => props.onChange(count)}
    />
};

export default InputCounter;