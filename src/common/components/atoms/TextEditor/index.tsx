import React, {Component} from "react";
import { Editor } from "@tinymce/tinymce-react";

import Input from "atoms/Input";
import {tinyMceApiKey} from "client/config";

interface IProps {
    input: {
        onChange: (data: any) => void,
        value: any
    },
    meta: {
        initial: any
    },
    disabled?: boolean
}

class TextEditor extends Component<IProps> {
    render() {
        const disabled = this.props.disabled ? this.props.disabled : false;

        if (typeof window === 'undefined') {
            return (
                <Input type='textarea' {...this.props} />
            );
        }

        return <Editor
            apiKey={tinyMceApiKey}
            initialValue={this.props.input.value}
            init={{
                menubar: false,
                plugins: [
                    'advlist autolink lists link image charmap print preview anchor',
                    'searchreplace visualblocks code fullscreen',
                    'insertdatetime media table paste code help wordcount'
                ],
                toolbar:
                    'undo redo | formatselect | bold italic backcolor | \
                    alignleft aligncenter alignright alignjustify | \
                    bullist numlist outdent indent | removeformat | help'
            }}
            onEditorChange={(content) => {
                this.props.input.onChange(content)
            }}
            disabled={disabled}
        />
    }
}

export default TextEditor;

