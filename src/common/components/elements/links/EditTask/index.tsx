import React from "react";
import {Component} from "react";
import {faPen} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import Span from "atoms/Span";
import withPreloader, {PRELOADER_SIMPLE_PRELOADER} from "containers/hocs/WithPreloader";
import {IProps} from "./interfaces";
import withTooltip from "hocs/WithTooltip";
import EditTaskForm from "containers/forms/EditTask";
import withModalForm from "hocs/WithModalForm";
import {ON_EDIT_TASK} from "store/tasks/actions";

export class EditTask extends Component<IProps> {
    public render() {
        const WithModal = withModalForm(Span);
        const WithPreloader = withPreloader(Span, ON_EDIT_TASK, PRELOADER_SIMPLE_PRELOADER);
        const WithTooltip = withTooltip(FontAwesomeIcon, 'common.edit_task');

        // @ts-ignore
        return <WithModal button={<WithPreloader><WithTooltip icon={faPen}/></WithPreloader>}><EditTaskForm/></WithModal>;
    }
}

export default EditTask;