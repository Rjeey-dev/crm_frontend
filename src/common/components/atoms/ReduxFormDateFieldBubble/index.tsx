import React, {Component} from "react";
// @ts-ignore
import { Calendar } from 'react-date-range';
// @ts-ignore
import {de, enUS, ru} from 'react-date-range/src/locale';
import {withLocalize} from "react-localize-redux";

import Error from "atoms/Error";
import Input from "atoms/Input";
import Translation from "atoms/Translation";
import {defaultLanguage} from "client/config";
import {formatDate} from "services/common/dates";
import {IProps} from "./interfaces";
import {getDefaultImagePath} from "services/common/files";
import Img from "atoms/Img";
import Span from "atoms/Span";

const locales = {en: enUS, de, ru};

class ReduxFormDateFieldBubble extends Component<IProps> {
    public state = {
        date: new Date(),
        isOpen: false
    };

    public constructor(props: IProps) {
        super(props);

        this.handleSelect = this.handleSelect.bind(this);
    }

    private handleSelect = (date: Date) => {
        const dateFormatted = formatDate(date, this.props.activeLanguage.code);

        this.setState({
            date,
            isOpen: false
        }, () => {
            this.props.input.onChange({
                dateFormatted,
                date
            });
        });
    };

    componentDidMount() {
        this.setState({
            date: this.props.input.value
        });
    }

    private handleOpen = () => {
        this.setState({
            isOpen: true
        });
    }

    private handleClose = () => {
        this.setState({
            isOpen: false
        });
    }

    public render() {
        let errors;
        const lang = this.props.activeLanguage ? this.props.activeLanguage.code : defaultLanguage;

        const value = formatDate(this.state.date, lang);

        const bubbleClasses = ['bubble', 'date'];

        if (!this.state.isOpen) {
            bubbleClasses.push('hidden');
        }

        if (this.props.meta.invalid) {
            errors = <Error>
                <Translation source={this.props.meta.error}/>
            </Error>
        }

        return <div className='range-wrapper form-group'>
            <div onClick={this.handleOpen}>
                <Input type='text' name={this.props.input.name} value={value} disabled={true}/>
                {errors}
            </div>
            <div className={bubbleClasses.join(' ')}>
                <Span classes='close' onClick={this.handleClose}>
                    <Img classes='cross' src={getDefaultImagePath('close.svg')}/>
                </Span>
                <div className='items-wrapper'>
                    <Calendar
                        date={this.state.date}
                        onChange={this.handleSelect}
                        locale={locales[lang]}
                        minDate={new Date()}
                    />
                </div>
            </div>
        </div>;
    }
}

// @ts-ignore
export default withLocalize(ReduxFormDateFieldBubble);