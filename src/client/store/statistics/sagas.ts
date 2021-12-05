import {SagaIterator} from "redux-saga";
import {put, select, takeLatest} from "redux-saga/effects";
import {
    onTasksBoardInitializedFailed,
    onTasksBoardInitializedSuccess
} from "store/tasks/actions";
import {ON_STATISTICS_INITIALIZED} from "store/statistics/actions";
import {makeHttpCall} from "store/sagas";
import {onEntitiesFetchedSuccessful, onEntitiesShouldBeCleaned} from "store/entities/actions";
import {KEY_STATISTICS} from "store/entities/schemas";
import {IStatistics} from "services/api/statistics/interfaces";
import {getUser} from "store/users/selectors";

export function* watchStatisticsInitialized(statistics: IStatistics): SagaIterator {
    try {
        const user = yield select(getUser);
        // @ts-ignore
        const response = yield makeHttpCall([statistics, statistics.get], user.id);
        yield put(onEntitiesShouldBeCleaned(KEY_STATISTICS));
        // @ts-ignore
        yield put(onTasksBoardInitializedSuccess(response));
        // @ts-ignore
        yield put(onEntitiesFetchedSuccessful(response, KEY_STATISTICS));
    } catch (e) {
        yield put(onTasksBoardInitializedFailed());
    }
}

export default function* ({ statistics }: {statistics: IStatistics}): SagaIterator {
    yield takeLatest(ON_STATISTICS_INITIALIZED, watchStatisticsInitialized, statistics);
}