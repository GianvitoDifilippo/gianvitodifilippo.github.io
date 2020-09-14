import React from 'react';
import ReactDOM from 'react-dom';

import ReactCSSTransitionReplace from 'react-css-transition-replace';

import { ModalContext } from '../../../context';

import './modal.scss';

class Modal extends React.PureComponent
{
    render()
    {
        return ReactDOM.createPortal(
            <ReactCSSTransitionReplace transitionName="cross-fade" transitionEnterTimeout={400} transitionLeaveTimeout={400}>
                {this.props.isOpen
                ?
                <div className="modal" id={this.props.id}>
                    {this.props.children}
                </div>
                :
                null
            }
            </ReactCSSTransitionReplace>
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
    }
}

Modal.contextType = ModalContext;

export default Modal;