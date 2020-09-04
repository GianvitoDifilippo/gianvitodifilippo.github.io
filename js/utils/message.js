class Message
{
    constructor(text, x, y)
    {
        this.element = document.createElement('div');
        this.element.textContent = text;
        this.element.classList.add('message');
        this.element.addEventListener('animationend', this.element.remove);

        if (x !== undefined) {
            this.element.style.left = x;
        }
        if (y !== undefined) {
            this.element.style.top = y;
        }
        
        document.body.appendChild(this.element);
    }

    setX(x, parent)
    {
        let left = 0;
        let width = this.element.getBoundingClientRect().width;
        
        let parentWidth, parentLeft, parentRight;
        if (parent === undefined) {
            parentWidth = window.innerWidth;
            parentLeft = 0;
            parentRight = parentWidth;
        }
        else {
            let parentRect = parent.getBoundingClientRect();
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
        this.element.style.left = `${left}px`;
    }

    setY(y, parent)
    {
        let top = 0;
        let height = this.element.getBoundingClientRect().height;

        let parentHeight, parentTop, parentBottom;
        if (parent === undefined) {
            parentHeight = window.innerHeight;
            parentTop = 0;
            parentBottom = parentHeight;
        }
        else {
            let parentRect = parent.getBoundingClientRect();
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
        this.element.style.top = `${top}px`;
    }
}