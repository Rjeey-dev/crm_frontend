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
import {ON_TASKS_BOARD_INITIALIZED, onTasksBoardInitialized} from "store/tasks/actions";
import withPreloader, {PRELOADER_TASK_BOARD} from "containers/hocs/WithPreloader";
import AddTask from "containers/forms/AddTask";
import withModalForm from "hocs/WithModalForm";
import Span from "atoms/Span";

const WithModal = withModalForm(Span);

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
        const WithPreloader = withPreloader(TasksBoard, ON_TASKS_BOARD_INITIALIZED, PRELOADER_TASK_BOARD);

        return <>
            <WithPreloader tasks={this.props.tasks}/>
            <div className="d-block text-right card-footer">
                <WithModal classes="btn btn-primary btn-success" button='Add task'><AddTask/></WithModal>
            </div>
        </>;
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TasksBoardBlock);