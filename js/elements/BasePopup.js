class BasePopup extends HTMLDivElement
{
    static keyframes = [
        {
            opacity: 0
        },
        {
            opacity: 1
        }
    ];

    constructor()
    {
        super();
        
        this.className = 'popup';
    }

    open()
    {
        document.body.appendChild(this);
        this.animate(BasePopup.keyframes, { duration: 200 });
    }

    close(onfinish = () => this.ondismiss())
    {
        this.animate(BasePopup.keyframes, { duration: 200, direction: 'reverse' }).onfinish = onfinish;
    }

    ondismiss()
    {
        document.body.removeChild(this);
    }
}

window.customElements.define('base-popup', BasePopup, { extends: 'div' });