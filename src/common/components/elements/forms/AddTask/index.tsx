import React, {Component, FormEvent} from 'react';
import {Field} from "redux-form";

import {translation} from "client/services/common/translations";
import Button from "common/components/atoms/Button/index";
import Translation from 'common/components/atoms/Translation/index';
import Form from 'common/components/molecules/Form/index';
import {IUser} from "store/users/interfaces";
import FormItem from "molecules/FormItem";
import withPreloader, {PRELOADER_SIMPLE_PRELOADER} from "containers/hocs/WithPreloader";
import {ON_CREATE_NEW_TASK} from "store/tasks/actions";
import DatePicker from "atoms/DatePicker";
import {ReactSelect} from "atoms/ReactSelect";
import {generateUsersIdsOptions} from "services/common/selectOptions";
import withCurrentUser from "containers/hocs/WithCurrentUser";

interface IProps {
    handleSubmit: (event: FormEvent<HTMLFormElement>) => void,
    handleCloseModal: () => void,
    submitting: boolean,
    pristine: boolean,
    currentUser: IUser,
    users: IUser[]
}

class AddTask extends Component<IProps> {
    private handleSubmit = (event: any) => {
        this.props.handleSubmit(event);

        this.props.handleCloseModal();
    }

    public render() {
        const WithPreloader = withPreloader(Button, ON_CREATE_NEW_TASK, PRELOADER_SIMPLE_PRELOADER);

        return <div className="auto-form-wrapper" id='add-review-to-user'>
                <Form onSubmit={this.handleSubmit}>
                    <Field name='name' component={FormItem} label={translation('common.name')} placeholder='name'/>
                    <Field name='recipient' component={ReactSelect} label={translation('common.recipient')} options={generateUsersIdsOptions(this.props.users, this.props.currentUser.id)}/>
                    <Field name='start_date' component={DatePicker} label={translation('common.start_date')} placeholder='5'/>
                    <div className='form-group'>
                        <WithPreloader disabled={this.props.submitting || this.props.pristine} classes='btn btn-success mr-2'>
                            <Translation source={translation('common.submit')}/>
                        </WithPreloader>
                    </div>
                </Form>
            </div>
    }
}

export default withCurrentUser(AddTask);