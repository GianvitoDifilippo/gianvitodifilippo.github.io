function toggleSkillDesktop(skill) {
    function hideSkillDetails() {
        skill_message.style.display = null;
        skill_details_title.style.display = 'none';
    }

    function showSkillDetails() {
        skill_message.style.display = 'none';
        skill_details_title.style.display = null;
    }

    function removeOldProjects()
    {
        skill_projects_list_old = skill_projects_list;
        if (skill_projects_list_old != null) {
            let width = skill_projects_list_old.getBoundingClientRect().width;
            let height = skill_projects_list_old.getBoundingClientRect().height;
            skill_projects_list_old.style.position = 'absolute';
            skill_projects_list_old.style.zIndex = 10;
            skill_projects_list_old.style.width = `${width}px`;
            skill_projects_list_old.style.height = `${height}px`;
            skill_projects_list_old.animate([
                {
                    opacity: 1
                },
                {
                    opacity: 0
                }
            ], { duration: 200 }).onfinish = () => skill_projects_content.removeChild(skill_projects_list_old);
        }
    }

    if (skillContentAnimation !== null) return;

    let oldHeight = skill_content.getBoundingClientRect().height;
    let newHeight = null;
    let onfinish = null;

    if (currentSkill === null) {
        setSkill(skill);
        showSkillDetails();
        newHeight = skill_content.scrollHeight;
        onfinish = () => skill_content.style.height = null;
    }
    else {
        removeOldProjects();
        if (currentSkill === skill) {
            hideSkillDetails();
            currentSkill = null;
            skill_projects_list = null;
            newHeight = 0;
            onfinish = () => skill_content.style.height = '0px';
        }
        else {
            setSkill(skill);
            newHeight = skill_content.clientHeight;
            onfinish = () => skill_content.style.height = null;
        }
    }

    let duration = Math.abs((oldHeight - newHeight) * 0.7);
    skillContentAnimation = skill_content.animate([
        {
            height: `${oldHeight}px`
        },
        {
            height: `${newHeight}px`
        }
    ], { duration: duration });
    if (onfinish !== null) {
        skillContentAnimation.onfinish = () => {
            onfinish();
            skillContentAnimation = null;
        }
    }
}

function indexDesktop()
{
    skill_content.style.height = '0px';
    skill_details_title.style.display = 'none';
}