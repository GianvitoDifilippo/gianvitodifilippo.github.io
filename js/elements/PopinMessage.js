class PopinMessageDivElement extends HTMLDivElement
{
    static keyframesIn = [
        {
            opacity: 0,
            transform: 'translateY(-80%)'
        },
        {
            opacity: 1,
            transform: 'translateY(0%)'
        }
    ];

    static keyframesOut = [
        {
            opacity: 1,
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

    from(text, x, y)
    {
        this.textContent = text;
        this.x = x;
        this.y = y;
        return this;
    }

    show(onfinish = function() { })
    {
        document.body.appendChild(this);
        this.style.left = this.computeLeftPx();
        this.style.top = this.computeTopPx();
        this.animate(PopinMessageDivElement.keyframesIn, { duration: 500, easing: 'ease' });
        setTimeout(() => {
            this.animate(PopinMessageDivElement.keyframesOut, { duration: 500, easing: 'linear' }).onfinish = () => {
                onfinish();
                this.remove();
            }
        }, 2000);
    }

    computeLeftPx()
    {
        let left = 0;
        let width = this.getBoundingClientRect().width;
        
        let parentWidth, parentLeft, parentRight;
        if (typeof this.x === 'string' || this.x.relativeTo === undefined) {
            parentWidth = window.innerWidth;
            parentLeft = 0;
            parentRight = parentWidth;
        }
        else {
            let parentRect = this.x.relativeTo.getBoundingClientRect();
            parentWidth = parentRect.width;
            parentLeft = parentRect.left;
            parentRight = parentRect.right;
        }

        let rules = typeof this.x === 'string' ? this.x.split(',') : this.x.value.split(',');
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

    computeTopPx()
    {
        let top = 0;
        let height = this.getBoundingClientRect().height;
        
        let parentHeight, parentTop, parentBottom;
        if (typeof this.y === 'string' || this.y.relativeTo === undefined) {
            parentHeight = window.innerWidth;
            parentTop = 0;
            parentBottom = parentHeight;
        }
        else {
            let parentRect = this.y.relativeTo.getBoundingClientRect();
            parentHeight = parentRect.height;
            parentTop = parentRect.top;
            parentBottom = parentRect.bottom;
        }

        let rules = typeof this.y === 'string' ? this.y.split(',') : this.y.value.split(',');
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
}

window.customElements.define('popin-message', PopinMessageDivElement, { extends: 'div' });