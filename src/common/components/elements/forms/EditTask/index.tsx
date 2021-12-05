import React, {Component, FormEvent} from 'react';
import {Field} from "redux-form";

import {translation} from "client/services/common/translations";
import Button from "common/components/atoms/Button/index";
import Translation from 'common/components/atoms/Translation/index';
import Form from 'common/components/molecules/Form/index';
import {IUser} from "store/users/interfaces";
import FormItem from "molecules/FormItem";
import withPreloader, {PRELOADER_SIMPLE_PRELOADER} from "containers/hocs/WithPreloader";
import {ON_EDIT_TASK} from "store/tasks/actions";
import TextEditor from "atoms/TextEditor";

interface IProps {
    handleSubmit: (event: FormEvent<HTMLFormElement>) => void,
    handleCloseModal: () => void,
    submitting: boolean,
    pristine: boolean,
    currentUser: IUser,
    users: IUser[]
}

class EditTask extends Component<IProps> {
    private handleSubmit = (event: any) => {
        this.props.handleSubmit(event);

        this.props.handleCloseModal();
    }

    public render() {
        const WithPreloader = withPreloader(Button, ON_EDIT_TASK, PRELOADER_SIMPLE_PRELOADER);

        return <div className="auto-form-wrapper" id='add-review-to-user'>
                <Form onSubmit={this.handleSubmit}>
                    <Field name='id' component={FormItem} type='hidden' withoutStatus={true}/>
                    <Field name='name' component={FormItem} label={translation('common.name')} placeholder='name'/>
                    <Field name='text' component={TextEditor} label={translation('common.text')} placeholder='text'/>
                    <div className='form-group'>
                        <WithPreloader disabled={this.props.submitting || this.props.pristine} classes='btn btn-success mr-2'>
                            <Translation source={translation('common.submit')}/>
                        </WithPreloader>
                    </div>
                </Form>
            </div>
    }
}

export default EditTask;