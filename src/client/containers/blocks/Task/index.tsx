import React from "react";
import {Component} from "react";
import {Dispatch} from "redux";
import {connect} from "react-redux";

import {IMapDispatchToProps, IProps} from "./interfaces";
import Task from "molecules/Tasks/Task";
import {isTaskDoing, isTaskTodo} from "store/tasks/selectors";
import {ITask, TASK_STATUS_DOING, TASK_STATUS_DONE} from "store/tasks/interfaces";
import {onTaskChangeStatus, onTaskDelete} from "store/tasks/actions";

const mapDispatchToProps = (dispatch: Dispatch): IMapDispatchToProps => {
    return {
        onTaskChangeStatus: (task: ITask, status: number) => dispatch(onTaskChangeStatus(task, status)),
        onTaskDelete: (task: ITask) => dispatch(onTaskDelete(task)),
    }
}

export class TaskBlock extends Component<IProps> {
    constructor(props: IProps) {
        super(props);

        this.onTaskChangeStatus = this.onTaskChangeStatus.bind(this);
        this.onTaskDelete = this.onTaskDelete.bind(this);
    }

    private onTaskDelete = () => {
        this.props.onTaskDelete(this.props.task);
    }

    private onTaskChangeStatus = () => {
        let status;

        if (isTaskTodo(this.props.task)) {
            status = TASK_STATUS_DOING;
        } else if (isTaskDoing(this.props.task)) {
            status = TASK_STATUS_DONE;
        } else {
            return;
        }

        this.props.onTaskChangeStatus(this.props.task, status);
    }

    public render() {
        return <Task task={this.props.task} onTaskChangeStatus={this.onTaskChangeStatus} onTaskDelete={this.onTaskDelete}/>;
    }
}

export default connect(null, mapDispatchToProps)(TaskBlock);