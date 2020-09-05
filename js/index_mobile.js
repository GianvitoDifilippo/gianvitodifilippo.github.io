function toggleSkillMobile(skill) {
    let skill_previewKeyframes = [
        {
            opacity: 0,
            transform: 'scale(0)'
        },
        {
            opacity: 1,
            transform: 'scale(1)'
        }
    ];

    function showSkillPopup() {
        body.classList.add('stop_scroll');
        skill_preview.style.display = null;
        skill_preview.animate(skill_previewKeyframes, { duration: 300 });
        skill_popup = new SkillPopup(skill_preview);
        setSkill(skill);
        skill_popup.open();
    }

    function hideSkillPopup() {
        body.classList.remove('stop_scroll');
        currentSkill = null;
        skill_popup.close();
        skill_preview.animate(skill_previewKeyframes, { duration: 300, direction: 'reverse' }).onfinish = function() {
            skill_preview.style.display = 'none';
            if (skill_projects_list != null) {
                skill_projects_content.removeChild(skill_projects_list.element);
                skill_projects_list = null;
                skill_popup = null;
            }
        }
    }

    if (currentSkill === null) {
        showSkillPopup();
    }
    else {
        hideSkillPopup();
    }
}

function indexMobile()
{
    // Shows/hides nav-list, disables scrolling, disables header brand button
    function toggleNavlistActive() {
        header_brand.classList.toggle('inactive');
        navlist.classList.toggle('active');
        options_icon.classList.toggle('active');
        hamburger.classList.toggle('active');
        body.classList.toggle('stop_scroll');
    }

    // Toggles navlist when clicking on hamburger
    hamburger.addEventListener('click', toggleNavlistActive);
    
    // Toggles navlist when clicking on list items
    menu_items.forEach(item => item.addEventListener('click', toggleNavlistActive));

    // Prevents #skill-preview from displaying in the document flow.
    skill_preview.style.display = 'none';
}