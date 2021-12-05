import {Dispatch} from "redux";
import {reduxForm} from 'redux-form';

import EditTaskForm from "elements/forms/EditTask";
import {onEditTask} from "store/tasks/actions";

export const EDIT_TASK_FORM = 'editTask';

const onSubmit = (data: any, dispatch: Dispatch) => {
    dispatch(onEditTask(data['id'], data['name'], data['text']));
};

const EditTask = reduxForm({
    form: EDIT_TASK_FORM,
    destroyOnUnmount: true,
    onSubmit,
    enableReinitialize: true,
    keepDirtyOnReinitialize: true,
    updateUnregisteredFields: true,
    touchOnChange: true
// @ts-ignore
})(EditTaskForm);

export default EditTask;