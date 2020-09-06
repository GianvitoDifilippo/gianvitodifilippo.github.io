class BasePopupDivElement extends HTMLDivElement
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
        this.animate(BasePopupDivElement.keyframes, { duration: 200 });
    }

    close(onfinish = function() { })
    {
        this.animate(BasePopupDivElement.keyframes, { duration: 200, direction: 'reverse' }).onfinish = () => {
            onfinish();
            this.remove();
        };
    }
}

window.customElements.define('base-popup', BasePopupDivElement, { extends: 'div' });