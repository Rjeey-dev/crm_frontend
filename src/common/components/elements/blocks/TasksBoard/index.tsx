import React from 'react';

import {IProps} from "./interfaces";
import {ITask, TASK_STATUS_DOING, TASK_STATUS_DONE, TASK_STATUS_TODO} from "store/tasks/interfaces";
import Task from "containers/blocks/Task";

const renderTasks = (tasks: ITask[], status: number) => {
    const tasksFiltered = tasks.filter((task: ITask) => {
        return task.status === status;
    });

    return tasksFiltered.map((task: ITask, key: number) => {
        return <Task task={task} key={key}/>
    })
}

export default function TasksBoard(props: IProps) {
    return <div className="card-hover-shadow-2x mb-3 card">
        <div className="card-header-tab card-header">
            <div className="card-header-title font-size-lg text-capitalize font-weight-normal"><i className="fa fa-battery-empty"/>&nbsp;Todo</div>
            <div className="card-header-title font-size-lg text-capitalize font-weight-normal"><i className="fa fa-battery-quarter"/>&nbsp;Doing</div>
            <div className="card-header-title font-size-lg text-capitalize font-weight-normal"><i className="fa fa-battery-full"/>&nbsp;Done</div>
        </div>
        <div className="scroll-area-sm">
            <div className="ps-show-limits">
                <div className="ps ps--active-y">
                    <div className="ps-content">
                        <ul className="list-group list-group-flush">
                            <li className='list-group-item'>
                                {renderTasks(props.tasks, TASK_STATUS_TODO)}
                            </li>
                            <li className='list-group-item'>
                                {renderTasks(props.tasks, TASK_STATUS_DOING)}
                            </li>
                            <li className='list-group-item'>
                                {renderTasks(props.tasks, TASK_STATUS_DONE)}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
}