import React, {Component, ReactNode, ReactNodeArray} from "react";

import Icon from 'common/components/atoms/Icon/index';
import Label from "common/components/atoms/Label/index";

interface IProps {
    classes?: string,
    children?: ReactNodeArray | ReactNode,
    checked?: boolean,
    disabled?: boolean,
    onChange: (data: any) => void,
}

class Checkbox extends Component<IProps> {
    public state = {
        checked: false
    };

    componentWillReceiveProps(props: IProps): void {
        if (props.checked) {
            this.setState({
                checked: props.checked
            })
        }
    }

    componentDidMount(): void {
        if (this.props.checked) {
            this.setState({
                checked: this.props.checked
            })
        }
    }

    render() {
        const disabled = this.props.disabled ? this.props.disabled : false;

        return <div className="form-check form-check-flat mt-0">
            <Label classes="form-check-label">
                <input type="checkbox" disabled={disabled} onChange={() => {
                    this.setState({
                        checked: !this.state.checked
                    }, () => {
                        this.props.onChange(this.state.checked)
                    })
                }}
                       className={this.props.classes}
                       checked={this.state.checked}/>{this.props.children}<Icon classes="input-helper"/>
            </Label>
        </div>;
    }
}

export default Checkbox;

