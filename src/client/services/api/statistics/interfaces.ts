import ApiException from "services/api/exceptions";
import {IStatistics as IStatisticsDTO} from "store/statistics/interfaces";

export interface IStatistics {
    get: (userId: string) => IStatisticsDTO | ApiException,
}