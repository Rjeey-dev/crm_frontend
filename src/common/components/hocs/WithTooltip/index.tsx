import React, {Component, ComponentType} from 'react';

import {WithTooltipHoFProps, WithTooltipNative} from "./interfaces";
import Translation from "atoms/Translation";
import Tooltip from "@material-ui/core/Tooltip/Tooltip";
import {translation} from "services/common/translations";

function withTooltip<T extends WithTooltipNative>(WrappedComponent: ComponentType<T>, textId: string, data?: any) {
    class WithTooltip extends Component<WithTooltipHoFProps & T, {}> {
        public render() {
            return <Tooltip title={<Translation source={translation(textId, data)}/>}>
                <WrappedComponent {...this.props}/>
            </Tooltip>
        }
    }

    return WithTooltip;
}

export default withTooltip;


