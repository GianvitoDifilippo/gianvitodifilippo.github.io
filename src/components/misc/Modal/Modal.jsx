import React from 'react';
import ReactDOM from 'react-dom';

import ReactCSSTransitionReplace from 'react-css-transition-replace';

import { ModalContext } from '../../../context';

import './modal.scss';

const Modal = props => {
    const { modal, setModal } = React.useContext(ModalContext);

    if (props.isOpen && modal !== props.id) {
        setModal(props.id);
    } else if (!props.isOpen && modal === props.id) {
        setModal(null);
    }

    return ReactDOM.createPortal(
        <ReactCSSTransitionReplace transitionName="cross-fade" transitionEnterTimeout={400} transitionLeaveTimeout={400}>
            {props.isOpen
            ?
            <div className="modal">
                {props.children}
            </div>
            :
            null
            }
        </ReactCSSTransitionReplace>
    , props.parent ? props.parent : document.body);
};

export default Modal;