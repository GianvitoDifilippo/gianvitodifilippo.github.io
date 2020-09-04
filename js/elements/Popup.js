class Popup
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
        this.element = document.createElement('div');
        this.element.classList.add('popup');
    }

    open()
    {
        document.body.appendChild(this.element);
        this.element.animate(Popup.keyframes, { duration: 200 });
    }

    close()
    {
        this.element.animate(Popup.keyframes, { duration: 200, direction: 'reverse' }).onfinish = () => document.body.removeChild(this.element);
    }
}