import React from 'react';
import ReactDOM from 'react-dom';

import './modal.scss';
import { ModalContext } from '../../../context';

class Modal extends React.PureComponent
{
    constructor(props)
    {
        super(props);

        this.state = {
            isOpen: props.isOpen
        };

        this.id = props.id;
    }

    render()
    {
        let className = 'modal';
        if (this.state.isOpen && !this.props.isOpen) {
            className += ' closing';
        }

        return this.state.isOpen
        ?
        ReactDOM.createPortal(
            <div className={className}>
                {this.props.children}
            </div>
        , this.props.parent ? this.props.parent : document.body) :
        null
        ;
    }

    componentDidUpdate()
    {
        if (!this.state.isOpen && this.props.isOpen) {
            this.setState({
                isOpen: true
            });
            this.context.setModal(this.id);
        } else if (this.state.isOpen && !this.props.isOpen) {
            this.context.setModal(null);
            setTimeout(() => {
                this.setState({
                    isOpen: false
                })
            }, 100);
        }
    }
}

Modal.contextType = ModalContext;

export default Modal;