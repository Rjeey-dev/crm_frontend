import React from "react";
import {Component} from "react";
import {Dispatch} from "redux";
import {connect} from "react-redux";

import {IMapDispatchToProps, IMapStateToProps, IProps} from "./interfaces";
import TasksBoard from "elements/blocks/TasksBoard";
import {IBaseState} from "store/interfaces";
import {getEntitiesState, getList} from "store/entities/selectors";
import {KEY_TASKS} from "store/entities/schemas";
import {ITask} from "store/tasks/interfaces";
import {onTasksBoardInitialized} from "store/tasks/actions";

const mapDispatchToProps = (dispatch: Dispatch): IMapDispatchToProps => {
    return {
        onTasksBoardInitialized: () => dispatch(onTasksBoardInitialized())
    }
}

const mapStateToProps = (state: IBaseState): IMapStateToProps => {
    return {
        tasks: getList(getEntitiesState(state), KEY_TASKS) as ITask[]
    }
}

export class TasksBoardBlock extends Component<IProps> {
    public componentDidMount() {
        this.props.onTasksBoardInitialized();
    }

    public render() {
        return <TasksBoard tasks={this.props.tasks}/>;
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TasksBoardBlock);