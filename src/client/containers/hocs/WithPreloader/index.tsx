import React, {PureComponent} from "react";
import { connect } from 'react-redux';

import SimplePreloader from "elements/blocks/Preloaders/SimplePreloader";
import {IBaseState} from "store/interfaces";
import {buildComplexPreloaderInitialActionName} from "store/settings/preloader";
import {getPreloaders, normalizeState} from "store/settings/selectors";
import {IMapStateToProps, IProps} from "./interfaces";
import TaskBoard from "elements/blocks/Preloaders/TaskBoard";

export const PRELOADER_SIMPLE_PRELOADER = 'PRELOADER_SIMPLE_PRELOADER';
export const PRELOADER_TASK_BOARD = 'PRELOADER_TASK_BOARD';

function withPreloader(WrappedComponent: any, action: string, type?: string, id?: string): any {
    const mapStateToProps = (state: IBaseState): IMapStateToProps => {
        return {
            preloaders: getPreloaders(normalizeState(state)),
        };
    };

    class PreloaderContainer extends PureComponent<IProps> {
        public render() {
            const actionName = buildComplexPreloaderInitialActionName(action, id);

            if (this.props.preloaders[actionName] === true) {
                if (!type || type === PRELOADER_SIMPLE_PRELOADER) {
                    return <SimplePreloader/>;
                }

                if (!type || type === PRELOADER_TASK_BOARD) {
                    return <TaskBoard/>;
                }
            }

            // @ts-ignore
            return <WrappedComponent {...this.props} />;
        }
    }

    return connect(mapStateToProps)(PreloaderContainer);
}

export default withPreloader;