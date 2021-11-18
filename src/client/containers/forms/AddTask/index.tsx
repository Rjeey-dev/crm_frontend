import {Dispatch} from "redux";
import {reduxForm} from 'redux-form';

import AddTaskForm from "elements/forms/AddTask";
import {onCreateNewTask} from "store/tasks/actions";
import {connect} from "react-redux";
import {getEntitiesState, getList} from "store/entities/selectors";
import {KEY_USERS} from "store/entities/schemas";
import {IBaseState} from "store/interfaces";

export const ADD_NEW_TASK_FORM = 'addNewTask';

const onSubmit = (data: any, dispatch: Dispatch) => {
    dispatch(onCreateNewTask(data['name'], data['recipient'], data['start_date']));
};

const AddTask = reduxForm({
    form: ADD_NEW_TASK_FORM,
    destroyOnUnmount: true,
    onSubmit,
    enableReinitialize: true,
    keepDirtyOnReinitialize: true,
    updateUnregisteredFields: true,
    touchOnChange: true
// @ts-ignore
})(AddTaskForm);

export default connect((state: IBaseState) => ({ users: getList(getEntitiesState(state), KEY_USERS)}))(AddTask);