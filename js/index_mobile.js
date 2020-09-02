function toggleSkillMobile(skill) {
    body.classList.toggle('stop_scroll');
    skill_preview_popup.style.display = null;
    skill_preview.style.display = 'initial';
    skill_preview_popup.appendChild(skill_preview);
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
}