class SkillPopupDivElement extends BasePopupDivElement
{
    static iconKeyframes = [
        {
            transform: 'translateY(200%)'
        },
        {
            transform: 'translateY(0%)'
        }
    ];

    constructor()
    {
        super();

        this.classList.add('skill-popup');
        this.skill_popup_container = document.createElement('div');
        this.skill_popup_container.classList.add('skill-popup-container');
        this.skill_popup_container.appendChild(skill_preview);
        this.icon = document.createElement('i');
        this.icon.classList.add('fas');
        this.icon.classList.add('fa-angle-double-left');
        this.icon.onclick = toggleSkill;

        this.appendChild(this.skill_popup_container);
        this.appendChild(this.icon);
    }

    open()
    {
        super.open();
        this.icon.animate(SkillPopupDivElement.iconKeyframes, { duration: 300 });
    }

    close(onfinish = function() { })
    {
        super.close(() => {
            onfinish();
            this.skill_popup_container.removeChild(skill_preview);
        });
        this.icon.animate(SkillPopupDivElement.iconKeyframes, { duration: 300, direction: 'reverse' });
    }
}

window.customElements.define('skill-popup', SkillPopupDivElement, { extends: 'div' });