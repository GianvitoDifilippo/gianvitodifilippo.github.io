function toggleSkillMobile(skill) {
    function showSkillPopup() {
        body.classList.add('stop_scroll');
        skill_preview.style.display = null;
        skill_preview.animate([
            {
                opacity: 0,
                transform: 'scale(0)'
            },
            {
                opacity: 1,
                transform: 'scale(1)'
            }
        ], { duration: 300 });
        skill_preview_popup.style.display = null;
        skill_preview_popup.animate([
            {
                opacity: 0
            },
            {
                opacity: 1
            }
        ], { duration: 200 });
        skill_back.animate([
            {
                transform: 'translateY(300%)'
            },
            {
                transform: 'translateY(0%)'
            }
        ], { duration: 400 });
        skill_preview_popup.prepend(skill_preview);
        setSkill(skill);
    }

    function hideSkillPopup() {
        body.classList.remove('stop_scroll');
        currentSkill = null;
        skill_preview_popup.animate([
            {
                opacity: 1
            },
            {
                opacity: 0
            }
        ], { duration: 200 }).onfinish = () => skill_preview_popup.style.display = 'none';
        skill_back.animate([
            {
                transform: 'translateY(0%)'
            },
            {
                transform: 'translateY(300%)'
            }
        ], { duration: 300 });
        skill_preview.animate([
            {
                opacity: 1,
                transform: 'scale(1)'
            },
            {
                opacity: 0,
                transform: 'scale(0)'
            }
        ], { duration: 300 }).onfinish = function() {
            skill_preview.style.display = 'none';
            skill_preview_popup.removeChild(skill_preview);
            if (skill_projects_content != null) {
                skill_projects_content_wrapper.removeChild(skill_projects_content);
                skill_projects_content = null;
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
        hamburger.classList.toggle('active');
        body.classList.toggle('stop_scroll');
    }

    // Toggles navlist when clicking on hamburger
    hamburger.addEventListener('click', toggleNavlistActive);
    
    // Toggles navlist when clicking on list items
    menu_items.forEach(item => item.addEventListener('click', toggleNavlistActive));

    skill_preview.style.display = 'none';
    skill_preview.onclick = event => event.stopPropagation();
}