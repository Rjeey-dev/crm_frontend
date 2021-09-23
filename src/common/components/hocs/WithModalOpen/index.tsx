import React, {Component, ComponentType, FormEvent} from 'react';

import ReactModal from "atoms/Modal";

import {WithModalOpenHoFProps, WithModalOpenNative} from "./interfaces";
import Span from "atoms/Span";

function withModalOpen<T extends WithModalOpenNative>(WrappedComponent: ComponentType<T>) {
    class WithModal extends Component<WithModalOpenHoFProps & T, {}> {
        public state = {
            modalIsOpen: false
        };

        constructor(props: any) {
            super(props);

            this.handleClick = this.handleClick.bind(this);
            this.handleOpenClick = this.handleOpenClick.bind(this);
            this.closeModal = this.closeModal.bind(this);
        }

        public handleClick = (event: FormEvent<HTMLButtonElement>) => {
            event.preventDefault();

            this.setState({modalIsOpen: false});
            this.props.handler();
        };

        public handleOpenClick = (event: FormEvent<HTMLSpanElement>) => {
            event.preventDefault();

            this.setState({modalIsOpen: true});
        };

        private closeModal() {
            this.setState({modalIsOpen: false});
        }

        public render() {
            return <WrappedComponent {...this.props}>
                <Span onClick={this.handleOpenClick}>
                    {this.props.children}
                </Span>
                <ReactModal handleClick={this.handleClick} handleClose={this.closeModal} isOpen={this.state.modalIsOpen}>
                    {this.props.modalText}
                </ReactModal>
            </WrappedComponent>
        }
    }

    return WithModal;
}

export default withModalOpen;


