import React from 'react';
import ReactDOM from 'react-dom';

import './modal.scss';
import { ModalContext } from '../../../context';

const Modal = props => {
    const { modal, setModal } = React.useContext(ModalContext);
    const [ isOpen, setOpen ] = React.useState(false);

    let className = 'modal';

    if (!isOpen && modal === props.id) {
        setOpen(true);
    }
    else if (isOpen && modal === null) {
        className += ' closing';
        setTimeout(() => setOpen(false), 100);
    }

    return isOpen
    ?
    ReactDOM.createPortal(
        <div className={className} onClick={() => setModal(null)}>
            <div onClick={e => e.stopPropagation()}>
                {props.children}
            </div>
        </div>
    , props.parent ? props.parent : document.body) :
    null
    ;
};

export default Modal;