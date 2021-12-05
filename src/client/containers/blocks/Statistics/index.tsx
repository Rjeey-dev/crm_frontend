import React from "react";
import {Component} from "react";
import {Dispatch} from "redux";
import {connect} from "react-redux";

import {IMapDispatchToProps, IMapStateToProps, IProps} from "./interfaces";
import {IBaseState} from "store/interfaces";
import {getEntitiesState, getList} from "store/entities/selectors";
import {KEY_STATISTICS} from "store/entities/schemas";
import withPreloader, {PRELOADER_TASK_BOARD} from "containers/hocs/WithPreloader";
import {IStatistics} from "store/statistics/interfaces";
import {ON_STATISTICS_INITIALIZED, onStatisticsInitialized} from "store/statistics/actions";
import Statistics from "organisms/content/Statistics";

const mapDispatchToProps = (dispatch: Dispatch): IMapDispatchToProps => {
    return {
        onStatisticsInitialized: () => dispatch(onStatisticsInitialized())
    }
}

const mapStateToProps = (state: IBaseState): IMapStateToProps => {
    return {
        statistics: getList(getEntitiesState(state), KEY_STATISTICS) as IStatistics[]
    }
}

export class StatisticsBlock extends Component<IProps> {
    public componentDidMount() {
        this.props.onStatisticsInitialized();
    }

    public render() {
        const WithPreloader = withPreloader(Statistics, ON_STATISTICS_INITIALIZED, PRELOADER_TASK_BOARD);

        return <WithPreloader statistics={this.props.statistics[0]}/>;
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(StatisticsBlock);