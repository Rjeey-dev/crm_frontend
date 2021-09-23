import React from 'react';
import {InitializeOptions, Translate, TranslatePlaceholderData, withLocalize} from "react-localize-redux";

import {IProps} from "./interfaces";

function Translation(props: IProps) {
    const data = [] as unknown as TranslatePlaceholderData;

    if (props.source.data) {
        const source = props.source.data;

        Object.keys(props.source.data).map((element: any) => {

            const item = source[element];

            data[element] = <b className='highlighted'>{item}</b>;
        });
    }

    return <Translate id={props.source.id} data={data} options={{ renderInnerHtml: true } as InitializeOptions}/>;
}

export default withLocalize(Translation);

