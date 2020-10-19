import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { ModalContext } from '../../../shared/context';

import './modal.scss';


type PropsType = {
    id: string,
    isOpen: boolean,
    parent: Element, // cambiare
    children?: React.ReactNode
};
type StateType = {
    isOpen: boolean
};


class Modal extends React.Component<PropsType, StateType>
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
        return ReactDOM.createPortal(
            this.state.isOpen
            ?
            <div className={`modal${this.props.isOpen ? '' : ' closing'}`} id={this.props.id}>
                {this.props.children}
            </div>
            :
            null
        , this.props.parent);
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

    shouldComponentUpdate(nextProps: Readonly<PropsType>, nextState: Readonly<StateType>): boolean
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