import ApiException from '../exceptions';

import {IApi} from "services/api/interfaces";
import {IStatistics} from "services/api/statistics/interfaces";
import {IStatistics as IStatisticsDTO} from "store/statistics/interfaces";

class Statistics implements IStatistics {
    private state: { api: IApi; };

    constructor(api: IApi) {
        this.state = {api};
    }

    public get = (userId: string): IStatisticsDTO | ApiException => {
        return this.state.api.get('/v1/statistics?user_id=' + userId) as IStatisticsDTO;
    };
}

export default Statistics