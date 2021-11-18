import React, {Component} from 'react';
// @ts-ignore
import Modal from 'react-modal';

import Button from "atoms/Button";
import Span from "atoms/Span";
import Translation from "atoms/Translation";
import {translation} from "services/common/translations";
import {IProps} from "./interfaces";
import {ReactComponent as Close} from './images/close.svg';

const customStyles = {
    content : {
        top                   : '20%',
        left                  : '10%',
        right                 : 'auto',
        bottom                : 'auto',
        marginRight           : '-10%',
    }
};

Modal.setAppElement('#app');

const renderFooter = (withoutButtonsEnabled: boolean, handleClose: any, handleClick: any) => {
    if (withoutButtonsEnabled) {
        return '';
    }

    return <div className='footer'>
        <Button handleClick={handleClose} classes='btn btn-error'><Translation source={translation('common.cancel')}/></Button>
        <Button handleClick={handleClick} classes='btn btn-success'><Translation source={translation('common.lets_do_it')}/></Button>
    </div>
};

const renderChildren = (children: any, isFormMode: boolean, handleCloseModal: any) => {
    /*if (isFormMode) {
        return React.cloneElement(children, { handleCloseModal })
    }*/

    return children;
};

class ReactModal extends Component<IProps> {
    public render() {
        const {children, classes, overlayClasses, isOpen, handleClick, handleClose, withoutButtons} = this.props;
        const withoutButtonsEnabled = withoutButtons ? withoutButtons : false;

        const modalClasses = [classes, 'modal-block'].join(' ');

        return <Modal
            isOpen={isOpen}
            style={customStyles}
            className={modalClasses}
            overlayClassName={overlayClasses}
        >
            <Button handleClick={handleClose} classes='close'>
                <Span classes='text'>
                    <Translation source={translation('common.close')}/>
                </Span>
                <Close/>
            </Button>
            <div className='content-wrapper'>{renderChildren(children, withoutButtonsEnabled, handleClose)}</div>
            {renderFooter(withoutButtonsEnabled, handleClose, handleClick)}
        </Modal>;
    }
}

export default ReactModal;