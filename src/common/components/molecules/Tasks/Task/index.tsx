import React from "react";
import {faCheckCircle, faPlay, faTrash} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import {IProps} from "./interfaces";
import Button from "atoms/Button";
import Img from "atoms/Img";
import Span from "atoms/Span";
import withCurrentUser from "containers/hocs/WithCurrentUser";
import {ITask} from "store/tasks/interfaces";
import {IUser} from "store/users/interfaces";
import {isTaskDoing, isTaskDone} from "store/tasks/selectors";

const renderActionButton = (onTaskChangeStatus: any, task: ITask, currentUser: IUser) => {
    if (isTaskDone(task)) {
        return '';
    }

    if (currentUser.id !== task.recipient.id) {
        return '';
    }

    let icon = faPlay;

    if (isTaskDoing(task)) {
        icon = faCheckCircle;
    }

    return <Button classes="border-0 btn-transition btn btn-outline-success" handleClick={onTaskChangeStatus}>
        <FontAwesomeIcon icon={icon}/>
    </Button>;
}

const renderDeleteButton = (onTaskDelete: any, task: ITask, currentUser: IUser) => {
    if (currentUser.id !== task.owner.id) {
        return '';
    }

    return <Button classes="border-0 btn-transition btn btn-outline-danger" handleClick={onTaskDelete}>
        <FontAwesomeIcon icon={faTrash}/>
    </Button>
}

function Task(props: IProps) {
    return <div className='task'>
        <div className="todo-indicator bg-warning"/>
        <div className="widget-content p-0">
            <div className='top'>
                <Img src={props.task.recipient.image}/>
                <Span classes='name'>{props.task.recipient.name}</Span>
            </div>
            <div className="widget-content-wrapper">
                <div className="widget-content-left">
                    <div className='upper'>
                        <div className="widget-heading bold">{props.task.name}</div>
                    </div>
                </div>
                <div className="widget-content-right">
                    {renderActionButton(props.onTaskChangeStatus, props.task, props.currentUser)}
                    {renderDeleteButton(props.onTaskDelete, props.task, props.currentUser)}
                </div>
            </div>
        </div>
    </div>;
}

// @ts-ignore
export default withCurrentUser(Task);