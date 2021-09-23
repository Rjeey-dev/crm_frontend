import React from "react";

import {IProps} from "./interfaces";
import Button from "atoms/Button";

export default function Task(props: IProps) {
    return <div className='task'>
        <div className="todo-indicator bg-warning"/>
        <div className="widget-content p-0">
            <div className="widget-content-wrapper">
                <div className="widget-content-left">
                    <div className="widget-heading">{props.task.name}</div>
                </div>
                <div className="widget-content-right">
                    <Button classes="border-0 btn-transition btn btn-outline-success" handleClick={props.onTaskChangeStatus}><i className="fa fa-play"/></Button>
                    <button className="border-0 btn-transition btn btn-outline-success" data-toggle="modal" data-target="#modalEdit" ng-click="startEdit(task)">
                        <i className="fa fa-pencil-square-o"/>
                    </button>
                    <button className="border-0 btn-transition btn btn-outline-danger" data-toggle="modal" data-target="#modalDelete" ng-click="chooseCurrentTask(task)">
                        <i className="fa fa-trash"/>
                    </button>
                </div>
            </div>
        </div>
    </div>;
}