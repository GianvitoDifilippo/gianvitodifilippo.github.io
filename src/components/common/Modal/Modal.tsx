import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { faAngleDoubleLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { ModalContext } from '../../../shared/context';

import './modal.scss';


type PropsType = {
    id: string,
    isOpen: boolean,
    parent?: Element,
    children?: React.ReactNode,
    onClose?(): void
};
type StateType = {
    isOpen: boolean
};


class Modal extends React.PureComponent<PropsType, StateType>
{
    constructor(props: Readonly<PropsType>)
    {
        super(props);

        this.state = {
            isOpen: props.isOpen
        };
    }

    render(): JSX.Element
    {
        let parent = this.props.parent;
        if (!parent) {
            if (typeof document !== 'undefined') parent = document.body;
        }
        
        return ReactDOM.createPortal(
            this.state.isOpen
            ?
            <div className={`modal ${this.props.isOpen ? '' : 'closing'}`} id={this.props.id}>
                <div className="modal-container">
                    {this.props.children}
                </div>
                <div className="back-container">
                    <FontAwesomeIcon className="fa-icon" icon={faAngleDoubleLeft} onClick={this.props.onClose}/>
                </div>
            </div>
            :
            null
        , parent);
    }
    
    componentDidUpdate(): void
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
}

Modal.contextType = ModalContext;

export default Modal;