class SkillPopup extends Popup
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

        this.element.classList.add('skill-popup');
        this.skill_popup_container = document.createElement('div');
        this.skill_popup_container.classList.add('skill-popup-container');
        this.skill_popup_container.appendChild(skill_preview);
        this.icon = document.createElement('i');
        this.icon.classList.add('fas');
        this.icon.classList.add('fa-angle-double-left');
        this.icon.onclick = toggleSkill;

        this.element.appendChild(this.skill_popup_container);
        this.element.appendChild(this.icon);
    }

    open()
    {
        super.open();
        this.icon.animate(SkillPopup.iconKeyframes, { duration: 300 });
    }

    close(onfinish = () => this.ondismiss())
    {
        super.close(onfinish);
        this.icon.animate(SkillPopup.iconKeyframes, { duration: 300, direction: 'reverse' });
    }

    ondismiss()
    {
        super.ondismiss();
        this.skill_popup_container.removeChild(skill_preview);
    }
}