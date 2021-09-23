import React, {Component, ComponentType, FormEvent} from 'react';

import ReactModal from "atoms/Modal";

import {WithModalOpenHoFProps, WithModalOpenNative} from "./interfaces";
import Span from "atoms/Span";

function withModalForm<T extends WithModalOpenNative>(WrappedComponent: ComponentType<T>) {
    class WithModal extends Component<WithModalOpenHoFProps & T, {}> {
        public state = {
            modalIsOpen: false
        };

        constructor(props: any) {
            super(props);

            this.handleOpenClick = this.handleOpenClick.bind(this);
            this.closeModal = this.closeModal.bind(this);
        }

        public handleOpenClick = (event: FormEvent<HTMLSpanElement>) => {
            event.preventDefault();

            this.setState({modalIsOpen: true});
        };

        private closeModal() {
            this.setState({modalIsOpen: false});
        }

        public render() {
            const childrenWithProps = React.Children.map(this.props.children, child => {
                if (React.isValidElement(child)) {
                    // @ts-ignore
                    return React.cloneElement(child, { handleCloseModal: this.closeModal });
                }
                return child;
            });

            return <WrappedComponent {...this.props}>
                <Span onClick={this.handleOpenClick}>
                    {this.props.button}
                </Span>
                <ReactModal formMode={true} handleClose={this.closeModal} isOpen={this.state.modalIsOpen}>
                    {childrenWithProps}
                </ReactModal>
            </WrappedComponent>
        }
    }

    return WithModal;
}

export default withModalForm;


