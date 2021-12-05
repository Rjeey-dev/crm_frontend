export interface IStatistics {
    my_tasks: ITaskStatisticsItem[],
    created_tasks: ITaskStatisticsItem[]
}

export interface ITaskStatisticsItem {
    status: number,
    number: number
}