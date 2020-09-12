import React from 'react';
import ReactDOM from 'react-dom'

import './message.scss';

class Message extends React.PureComponent
{
    constructor(props)
    {
        super(props);

        this.state = {
            isOpen: false
        };

        this.open = this.open.bind(this);
        this.close = this.close.bind(this);
    }

    open()
    {
        this.setState({
            isOpen: true
        });
    }

    close()
    {
        this.setState({
            isOpen: false
        });
    }

    render() {
        if (this.state.isOpen) console.log('MESSAGE being rendered');
        return this.state.isOpen
        ?
        ReactDOM.createPortal(
            <div ref="div" className="message animated" onAnimationEnd={this.close}>
                {this.props.children}
            </div>
            , document.body)
        :
        null;
    }

    componentDidUpdate()
    {
        if (this.state.isOpen) {
            this.refs.div.style.left = computeLeftPx(this.props.x, this.refs.div.getBoundingClientRect().width, this.props.xParent);
            this.refs.div.style.top = computeTopPx(this.props.y, this.refs.div.getBoundingClientRect().height, this.props.yParent);
        }
    }
}

export default Message;

function computeLeftPx(x, width, relativeTo)
{
    if (!x) return '0px';
    let left = 0;

    let parentWidth, parentLeft, parentRight;
    if (relativeTo === undefined) {
        parentWidth = window.innerWidth;
        parentLeft = 0;
        parentRight = parentWidth;
    }
    else {
        let parentRect = relativeTo.getBoundingClientRect();
        parentWidth = parentRect.width;
        parentLeft = parentRect.left;
        parentRight = parentRect.right;
    }

    let rules = x.split(',');
    rules.forEach(rule => {
        if (rule.endsWith('px')) {
            left += Number(rule.replace('px', ''));
            return;
        }
        switch (rule) {
            case 'center-left':
                left += parentLeft + parentWidth * 0.5;
                break;
            case 'center-right':
                left += parentLeft + parentWidth * 0.5 - width;
                break;
            case 'center':
            case 'center-center':
                left += parentLeft + (parentWidth - width) * 0.5;
                break;
            case 'right-left':
                left += parentRight;
                break;
            case 'right-center':
                left += parentRight - width * 0.5;
                break;
            case 'right':
            case 'right-right':
                left += parentRight - width;
                break;
            case 'left-center':
                left += parentLeft - width * 0.5;
                break;
            case 'left-right':
                left += parentLeft - width;
                break;
            case 'left':
            case 'left-left':
            default:
                left += parentLeft;
                break;
        }
    });
    left += window.scrollX;
    return `${left}px`;
}

function computeTopPx(y, height, relativeTo)
{
    if (!y) return '0px';
    let top = 0;
    
    let parentHeight, parentTop, parentBottom;
    if (relativeTo === undefined) {
        parentHeight = window.innerWidth;
        parentTop = 0;
        parentBottom = parentHeight;
    }
    else {
        let parentRect = relativeTo.getBoundingClientRect();
        parentHeight = parentRect.height;
        parentTop = parentRect.top;
        parentBottom = parentRect.bottom;
    }

    let rules = y.split(',');
    rules.forEach(rule => {
        if (rule.endsWith('px')) {
            top += Number(rule.replace('px', ''));
            return;
        }
        switch (rule) {
            case 'center-top':
                top += parentTop + parentHeight * 0.5;
                break;
            case 'center-bottom':
                top += parentTop + parentHeight * 0.5 - height;
                break;
            case 'center':
            case 'center-center':
                top += parentTop + (parentHeight - height) * 0.5;
                break;
            case 'bottom-top':
                top += parentBottom;
                break;
            case 'bottom-center':
                top += parentBottom - height * 0.5;
                break;
            case 'bottom':
            case 'bottom-bottom':
                top += parentBottom - height;
                break;
            case 'top-center':
                top += parentTop - height * 0.5;
                break;
            case 'top-bottom':
                top += parentTop - height;
                break;
            case 'top':
            case 'top-top':
            default:
                top += parentTop;
                break;
        }
    });
    top += window.scrollY;
    return `${top}px`;
}