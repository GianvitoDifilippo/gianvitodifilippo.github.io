function toggleSkillDesktop(skill) {
    function setDetails(name, since, imgExt, projects) {
        skill_icon.style.backgroundImage = `url(./assets/img/skills/${skill}.${imgExt})`;
        skill_name.forEach(item => item.textContent = name);
        skill_exp_value.setAttribute('data-lang', `skills:skill-preview:experience:values:${skill}`);
        skill_exp_value.textContent = translateText(`skills:skill-preview:experience:values:${skill}`);
        skill_since_value.textContent = String(since);
        skill_descr.setAttribute('data-lang', `skills:skill-preview:descr:${skill}`);
        skill_descr.textContent = translateText(`skills:skill-preview:descr:${skill}`);

        if (projects != undefined) {
            skill_projects_none.style.display = 'none';
            skill_projects_content_wrapper.style.position = null;
            skill_projects_content = document.createElement('ul');
            skill_projects_content.classList.add('skill-projects-list');
            projects.forEach(project => skill_projects_content.appendChild(createProject(project)));
            skill_projects_content_wrapper.appendChild(skill_projects_content);
        }
        else {
            skill_projects_content_wrapper.style.position = 'absolute';
            skill_projects_none.style.display = null;
            skill_projects_content = null;
        }
    }

    function setSkill() {
        switch(skill) {
            case 'cplusplus':
                setDetails('C++', 2014, 'svg', [
                    { id: 'audioengineer', name: 'AudioEngineer'}
                ]);
                break;
            case 'csharp':
                setDetails('C#', 2020, 'svg');
                break;
            case 'python':
                setDetails('Python', 2017, 'svg');
                break;
            case 'java':
                setDetails('Java', 2014, 'svg', [
                    { id: 'magicbet', name: 'MagicBet', backgroundScale: 1.1 },
                    { id: 'voicenotes', name: 'Voice Notes', backgroundPositionX: '-70px' },
                    { id: 'supermario', name: 'Super Mario Clone', backgroundPositionY: '-144px' }
                ]);
                break;
            case 'matlab':
                setDetails('Matlab', 2015, 'png');
                break;
            case 'labview':
                setDetails('LabVIEW', 2019, 'png');
                break;
            case 'docker':
                setDetails('Docker', 2020, 'svg');
                break;
            case 'dotnet':
                setDetails('.NET Core', 2020, 'svg');
                break;
            case 'postgresql':
                setDetails('PostgreSQL', 2020, 'svg');
                break;
            case 'html':
                setDetails('HTML', 2020, 'svg', [
                    { id: 'portfolio', name: 'This portfolio website', backgroundPositionX: 'center' }
                ]);
                break;
            case 'css':
                setDetails('CSS', 2020, 'svg', [
                    { id: 'portfolio', name: 'This portfolio website', backgroundPositionX: 'center' }
                ]);
                break;
            case 'javascript':
                setDetails('JavaScript', 2020, 'svg', [
                    { id: 'portfolio', name: 'This portfolio website', backgroundPositionX: 'center' }
                ]);
                break;
        }
        currentSkill = skill;
    }

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
        skill_projects_content_old = skill_projects_content;
        if (skill_projects_content_old != null) {
            console.log(skill_projects_content_old);
            let width = skill_projects_content_old.getBoundingClientRect().width;
            let height = skill_projects_content_old.getBoundingClientRect().height;
            skill_projects_content_old.style.position = 'absolute';
            skill_projects_content_old.style.zIndex = 10;
            skill_projects_content_old.style.width = `${width}px`;
            skill_projects_content_old.style.height = `${height}px`;
            skill_projects_content_old.animate([
                {
                    opacity: 1
                },
                {
                    opacity: 0
                }
            ], { duration: 200 }).onfinish = () => skill_projects_content_wrapper.removeChild(skill_projects_content_old);
        }
    }

    if (skillContentAnimation !== null) return;

    let oldHeight = skill_content.getBoundingClientRect().height;
    let newHeight = null;
    let onfinish = null;

    if (currentSkill === null) {
        setSkill();
        showSkillDetails();
        newHeight = skill_content.scrollHeight;
        onfinish = () => skill_content.style.height = null;
    }
    else {
        removeOldProjects();
        if (currentSkill === skill) {
            hideSkillDetails();
            currentSkill = null;
            skill_projects_content = null;
            newHeight = 0;
            onfinish = () => skill_content.style.height = '0px';
        }
        else {
            setSkill();
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