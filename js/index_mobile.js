function toggleSkillMobile(skill) {
    body.classList.toggle('stop_scroll');
    Array.from(document.getElementsByTagName('section'))
        .forEach(item => {
            item.animate([
                {
                    filter: 'blur(0px)'
                },
                {
                    filter: 'blur(4px)'
                }
            ], { duration: 200, fill: 'forwards' });
        });
    setTimeout(function() {
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
        ], { duration: 200 })
    }, 100);
    skill_preview_popup.style.display = null;
    skill_preview_popup.animate([
        {
            opacity: 0
        },
        {
            opacity: 1
        }
    ], { duration: 200 });
    skill_preview_popup.appendChild(skill_preview);
    setSkill(skill);
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
}