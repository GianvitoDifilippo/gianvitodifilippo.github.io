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

    constructor(skill_preview)
    {
        super();
        this.element.classList.add('skill-popup');
        this.skill_preview = skill_preview;
        this.icon = document.createElement('i');
        this.icon.classList.add('fas');
        this.icon.classList.add('fa-angle-double-left');
        this.icon.onclick = toggleSkill;

        this.element.appendChild(skill_preview);
        this.element.appendChild(this.icon);
    }

    open()
    {
        super.open();
        this.icon.animate(SkillPopup.iconKeyframes, { duration: 300 });
    }

    close()
    {
        super.close();
        this.icon.animate(SkillPopup.iconKeyframes, { duration: 300, direction: 'reverse' }).onfinish = () => this.element.removeChild(this.skill_preview);
    }
}