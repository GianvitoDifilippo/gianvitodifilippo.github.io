import React from 'react';
import ReactDOM from 'react-dom';

import { ModalContext } from '../../../context';

import './modal.scss';

class Modal extends React.Component
{
    constructor(props)
    {
        super(props);

        this.state = {
            isOpen: props.isOpen
        };
    }

    render()
    {
        return ReactDOM.createPortal(
            this.state.isOpen
            ?
            <div className={`modal${this.props.isOpen ? '' : ' closing'}`} id={this.props.id}>
                {this.props.children}
            </div>
            :
            null
        , this.props.parent ? this.props.parent : document.body);
    }
    
    componentDidUpdate()
    {
        if (this.context.modal !== this.props.id && this.props.isOpen) {
            this.context.setModal(this.props.id);
        }

        if (this.context.modal === this.props.id && !this.props.isOpen) {
            this.context.setModal(null);
        }

        if (this.props.isOpen && !this.state.isOpen) {
            this.setState({
                isOpen: true
            });
        }
        else if (!this.props.isOpen && this.state.isOpen) {
            setTimeout(() => this.setState({
                isOpen: false
            }), 200);
        }
    }

    shouldComponentUpdate(nextProps, nextState)
    {
        return (
            nextProps.children !== this.props.children ||
            nextProps.parent !== this.props.parent ||
            !nextProps.isOpen ||
            nextState !== this.state
        );
    }
}

Modal.contextType = ModalContext;

export default Modal;