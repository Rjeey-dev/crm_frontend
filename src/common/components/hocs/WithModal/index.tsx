import React, {Component, ComponentType, FormEvent} from 'react';

import ReactModal from "atoms/Modal";

import {WithModalOpenHoFProps, WithModalOpenNative} from "./interfaces";

function withSimpleModal<T extends WithModalOpenNative>(WrappedComponent: ComponentType<T>, onCloseCallback?: () => void) {
    class WithModal extends Component<WithModalOpenHoFProps & T, {}> {
        public state = {
            modalIsOpen: true
        };

        constructor(props: any) {
            super(props);

            this.handleOpenClick = this.handleOpenClick.bind(this);
            this.closeModal = this.closeModal.bind(this);
            this.closeModalWithCallback = this.closeModalWithCallback.bind(this);
        }

        public handleOpenClick = (event: FormEvent<HTMLSpanElement>) => {
            event.preventDefault();

            this.setState({modalIsOpen: true});
        };

        private closeModalWithCallback() {
            this.setState({modalIsOpen: false}, () => {
                onCloseCallback ? onCloseCallback() : undefined;
            });
        }

        private closeModal() {
            this.setState({modalIsOpen: false});
        }

        public render() {
            const classes = [];

            if (this.props.classes) {
                classes.push(this.props.classes)
            }

            return <ReactModal handleClose={this.closeModalWithCallback} isOpen={this.state.modalIsOpen} withoutButtons={true} classes={classes.join(' ')}>
                <WrappedComponent {...this.props} onClick={this.handleOpenClick} handleClose={this.closeModal} handleCloseWithCallback={this.closeModalWithCallback}/>
            </ReactModal>
        }
    }

    return WithModal;
}

export default withSimpleModal;


