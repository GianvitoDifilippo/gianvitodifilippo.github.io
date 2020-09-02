/* ------------------------------------------------     COMMON ELEMENTS     ------------------------------------------------ */
const body = document.body;
const neon_activator_items = document.querySelectorAll('.neon_activator');
const message = document.querySelector('.message');
const project_thumbnail = document.querySelector('.project-thumbnail');

/* ------------------------------------------------     HEADER ELEMENTS     ------------------------------------------------ */
const header = document.querySelector('#header');
const navbar = document.querySelector('#navbar');
const navlist = document.querySelector('#navlist');
const hamburger = document.querySelector('#hamburger');
const menu_items = document.querySelectorAll('#navlist li');
const header_brand = document.querySelector('#navbar .brand');

/* ------------------------------------------------      HERO ELEMENTS      ------------------------------------------------ */
const hero = document.querySelector('#hero');
const hero_brand = document.querySelector('#hero-main');
const hero_h1 = document.querySelector('#hero-main h1');
const hero_h2 = document.querySelector('#hero-main h2');
const hero_a = document.querySelectorAll('#hero-main a');

/* ------------------------------------------------     SKILLS ELEMENTS     ------------------------------------------------ */
const skill_preview_popup = document.getElementById('skill-preview-popup');
const skill_preview = document.getElementById('skill-preview');
const skill_message = document.getElementById('skill-message');
const skill_content = document.getElementById('skill-content');
const skill_details_title = document.getElementById('skill-details-title');
const skill_projects_content_wrapper = document.getElementById('skill-projects-content');
const skill_projects_none = document.getElementById('skill-projects-none');
const skill_icon = document.querySelector('#skill-details-content .skill-item .skill-icon');
const skill_name = document.querySelectorAll('#skill-preview .skill-name');
const skill_exp_value = document.querySelector('#skill-experience .value');
const skill_since_value = document.querySelector('#skill-since .value');
const skill_descr = document.querySelector('#skill-details-content .skill-descr');

/* ------------------------------------------------      CSS VARIABLES      ------------------------------------------------ */
const navigationPosition = parseInt(getComputedStyle(document.body).getPropertyValue('--navigation_position'));
const neonAnimationDuration = parseInt(getComputedStyle(document.body).getPropertyValue('--neon_animation_duration'));
const fadeinAnimationDuration = parseInt(getComputedStyle(document.body).getPropertyValue('--fadein_animation_duration'));

/* ------------------------------------------------       VARS/CONSTS       ------------------------------------------------ */
const desktopMinWidth = 1366;
const mobile = window.innerWidth <= desktopMinWidth;
const canHover = parseInt(getComputedStyle(document.body).getPropertyValue('--canHover')) == 1;
var headerPopinHandle = null;
var currentSkill = null;
var skillContentAnimation = null;
var skill_projects_content = null;
var skill_projects_content_old = null;

/* ------------------------------------------------        FUNCTIONS        ------------------------------------------------ */

function headerPopin()
{
    header.style.transition = 'transform .5s';
    hamburger.style.transition = 'transform .5s';
    header.classList.remove('hidden');
    header.classList.add('translation');
    headerPopinHandle = null;
    setTimeout(() => {
        header.style = null;
        hamburger.style = null;
    }, 500);
}

function launchAnimation()
{
    function fadeIn(element, timeout) {
        setTimeout(() => {
            element.classList.remove('hidden');
            element.classList.add('fadein');
            setTimeout(() => element.classList.remove('fadein'), fadeinAnimationDuration);
        }, timeout);
    }

    header.classList.add('hidden');

    hero_h1.classList.add('hidden');
    hero_h2.classList.add('hidden');
    hero_a.forEach(item => item.classList.add('hidden'));

    fadeIn(hero_h1, 1000);
    fadeIn(hero_h2, 2500);
    hero_a.forEach(item => fadeIn(item, 4000));

    headerPopinHandle = setTimeout(headerPopin, 4500);
}

function phonenumberOnClick(x, y)
{
    let selector = 'messages:copied';
    copyToClipboard('phonenumber');
    displayMessage(translateText(selector), x, y, document.getElementById('phonenumber')).setAttribute('data-lang', selector);
}

function emailOnClick(x, y)
{
    let selector = 'messages:copied';
    copyToClipboard('emailaddress');
    displayMessage(translateText(selector), x, y, document.getElementById('emailaddress')).setAttribute('data-lang', selector);
}

function scrollCallback(scrollY)
{
    // Navbar navigation color
    if (scrollY > navigationPosition) {
        navbar.classList.add('navigating');
    }
    else {
        navbar.classList.remove('navigating');
    }

    // Hero background parallax effect
    hero.style.backgroundPositionY = `${scrollY * 0.7}px`;
}

function createProject(project) {
    let project_new = project_thumbnail.cloneNode(true);
    project_new.style = null;

    let background = project_new.getElementsByClassName('project-background')[0];
    let project_name = project_new.getElementsByClassName('project-name')[0];
    background.style.backgroundImage = `url(./assets/img/projects/${project.id}_thumbnail.jpg)`;
    project_name.textContent = project.name != undefined ? project.name : project.id.toUpperCase();
    if (project.backgroundPositionX != undefined) {
        background.style.backgroundPositionX = project.backgroundPositionX;
    }
    if (project.backgroundPositionY != undefined) {
        background.style.backgroundPositionY = project.backgroundPositionY;
    }
    if (project.backgroundScale != undefined && !isNaN(project.backgroundScale) && project.backgroundScale > 1) {
        background.style.width = `${project.backgroundScale * 100}%`;
        background.style.height = `${project.backgroundScale * 100}%`;
        background.style.left = `${-(project.backgroundScale - 1) * 50}%`;
        background.style.top = `${-(project.backgroundScale - 1) * 50}%`;
    }

    return project_new;
}

function toggleSkill(skill) {
    if (mobile) {
        toggleSkillMobile(skill);
    }
    else {
        toggleSkillDesktop(skill);
    }
}

/* ------------------------------------------------         SCRIPT          ------------------------------------------------ */

// Session cookie settings
if (!getCookie('session')) {
    launchAnimation();
    setCookie('session', 'session');
}

// Adds neon animation on click
neon_activator_items.forEach(item => item.addEventListener('click', () => {
    let children = Array.from(item.getElementsByClassName('neon'))
        .concat(   Array.from(item.getElementsByClassName('neon_secondary')));

    if (item.classList.contains('neon') || item.classList.contains('neon_secondary')) {
        children.push(item);
    }
    children.forEach(child => {
        child.classList.add('neon_animation');
        setTimeout(() => child.classList.remove('neon_animation'), neonAnimationDuration);
    });
}));

// Scroll effects
document.addEventListener('scroll', () => {
    scrollCallback(window.scrollY);

    // Shows header on scrolling if not popped in
    if (headerPopinHandle != null) {
        clearTimeout(headerPopinHandle);
        headerPopin();
    }
});

// Device-specific scripts
if (mobile) {
    indexMobile();
}
else {
    indexDesktop();
}

// Ensures correct scrolling settings
scrollCallback(window.scrollY);

// Async code
(async () => {
    // Translates page in preferred browser language
    let code = getCookie('lang');
    if (!code) code = navigator.language.split('-')[0];
    setCookie('lang', code);
    await translatePage(code);
})().then(() => {
    // Shows the page when everything is done
    body.classList.add('visible');
});