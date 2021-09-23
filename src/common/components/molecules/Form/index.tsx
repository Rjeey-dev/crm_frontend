import React, {ReactNode, ReactNodeArray} from "react";

interface IProps {
    children: ReactNodeArray | ReactNode,
    action?: string,
    classes?: string,
    onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void,
}

function Form(props: IProps) {
    return <form onSubmit={props.onSubmit} action={props.action} className={props.classes}>
        {props.children}
    </form>
}

Form.defaultProps = {
    action: '#'
};

export default Form;
