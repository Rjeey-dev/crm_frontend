import {IStatistics} from "store/statistics/interfaces";

export interface IMapDispatchToProps {
    onStatisticsInitialized: () => void
}

export interface IMapStateToProps {
    statistics: IStatistics[]
}

export interface IProps extends IMapStateToProps, IMapDispatchToProps {

}