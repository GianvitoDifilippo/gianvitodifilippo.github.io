class PopinMessage extends HTMLDivElement
{
    static keyframes = [
        {
            opacity: 0,
            transform: 'translateY(-80%)'
        },
        {
            opacity: 1,
            transform: 'translateY(0%)',
            offset: 0.15
        },
        {
            opacity: 1,
            transform: 'translateY(0%)',
            offset: 0.7
        },
        {
            opacity: 0
        }
    ];
    
    constructor()
    {
        super();

        this.className = 'message';
    }

    show()
    {
        document.body.appendChild(this);
        this.animate(PopinMessage.keyframes, { duration: 3000 }).onfinish = () => this.remove();
    }

    get x() { return this.style.left; }
    get y() { return this.style.top; }

    set x(value)
    {
        let x, relativeTo;
        if (typeof value === 'string') {
            x = value;
        }
        else {
            x = value.x;
            relativeTo = value.relativeTo;
        }

        let left = 0;
        let width = this.getBoundingClientRect().width;
        
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
        this.style.left = `${left}px`;
    }

    set y(value)
    {
        let y, relativeTo;
        if (typeof value === 'string') {
            y = value;
        }
        else {
            y = value.y;
            relativeTo = value.relativeTo;
        }

        let top = 0;
        let height = this.getBoundingClientRect().height;

        let parentHeight, parentTop, parentBottom;
        if (relativeTo === undefined) {
            parentHeight = window.innerHeight;
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
        this.style.top = `${top}px`;
    }
}

window.customElements.define('popin-message', PopinMessage, { extends: 'div' });