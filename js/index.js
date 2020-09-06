/* ------------------------------------------------     COMMON ELEMENTS     ------------------------------------------------ */
const body = document.body;
const html = document.documentElement;
const neon_activator_items = document.querySelectorAll('.neon_activator');
const project_thumbnail = document.querySelector('.project-thumbnail');
const footer = document.getElementById('footer');
const options_icon = document.getElementById('options-button');

/* ------------------------------------------------     HEADER ELEMENTS     ------------------------------------------------ */
const header = document.getElementsByTagName('header')[0];
const navbar = document.getElementById('navbar');
const navlist = document.getElementById('navlist');
const hamburger = document.getElementById('hamburger');
const menu_items = document.querySelectorAll('#navlist li');
const header_brand = document.querySelector('#navbar .brand');

/* ------------------------------------------------      HERO ELEMENTS      ------------------------------------------------ */
const hero = document.getElementById('hero');
const hero_brand = document.getElementById('hero-main');
const hero_h1 = document.querySelector('#hero-main h1');
const hero_h2 = document.querySelector('#hero-main h2');
const hero_a = document.querySelectorAll('#hero-main a');

/* ------------------------------------------------     ABOUT ELEMENTS      ------------------------------------------------ */
const phonenumber = document.getElementById('phonenumber');
const emailaddress = document.getElementById('emailaddress');

/* ------------------------------------------------     SKILLS ELEMENTS     ------------------------------------------------ */
const skill_preview = document.getElementById('skill-preview');
const skill_message = document.getElementById('skill-message');
const skill_content = document.getElementById('skill-content');
const skill_details_title = document.getElementById('skill-details-title');
const skill_projects_content = document.getElementById('skill-projects-content');
const skill_projects_none = document.getElementById('skill-projects-none');
const skill_icon = document.querySelector('#skill-details-content .skill-item .skill-icon');
const skill_name = document.querySelectorAll('#skill-preview .skill-name');
const skill_exp_value = document.querySelector('#skill-experience .value');
const skill_since_value = document.querySelector('#skill-since .value');
const skill_descr = document.getElementById('skill-descr');
const skill_back = document.querySelector('#skill-preview-popup .fa-angle-double-left');

/* ------------------------------------------------      CSS VARIABLES      ------------------------------------------------ */
const navigationPosition = parseInt(getComputedStyle(document.body).getPropertyValue('--navigation_position'));
const neonAnimationDuration = parseInt(getComputedStyle(document.body).getPropertyValue('--neon_animation_duration'));
const fadeinAnimationDuration = parseInt(getComputedStyle(document.body).getPropertyValue('--fadein_animation_duration'));

/* ------------------------------------------------  VARS/CONSTS/FUNCTIONS  ------------------------------------------------ */
const desktopMinWidth = 1366;
const tabletMinWidth = 600;
const canHover = parseInt(getComputedStyle(document.body).getPropertyValue('--canHover')) == 1;
var headerPopinHandle = null;
var currentSkill = null;
var skillContentAnimation = null;
var skill_projects_list = null;
var skill_projects_list_old = null;
var skill_popup = null;

const projectThumbnails = {
    audioengineer: { id: 'audioengineer', name: 'AudioEngineer', options: { backgroundPositionX: 'center' } },
    magicbet: { id: 'magicbet', name: 'MagicBet', options: { backgroundScale: 1.1 } },
    voicenotes: { id: 'voicenotes', name: 'Voice Notes', options: { backgroundPositionX: '-70px' } },
    supermario: { id: 'supermario', name: 'Super Mario Clone', options: { backgroundPositionY: '-144px' } },
    portfolio: { id: 'portfolio', name: 'Questo sito!', options: { backgroundPositionX: 'center', data_lang: 'misc:thiswebsite' } }
};

function deviceType(width = window.innerWidth) { return width > desktopMinWidth ? 'desktop' : width > tabletMinWidth ? 'tablet' : 'phone'; }
function isMobile(width = window.innerWidth) { return deviceType(width) === 'tablet' || deviceType(width) === 'phone'; }

const device = deviceType();
const mobile = isMobile();

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

function phonenumberOnClick()
{
    copyToClipboard('phonenumber');

    let selector = 'messages:copied';
    let text = translateText(selector);
    if (text === null) text = 'Copiato!';
    let message = document.createElement('div', { is: 'popin-message' }).from(
        text,
        device === 'phone' ? 'center' : { value: 'center', relativeTo: phonenumber },
        { value: 'bottom-top,-6px', relativeTo: phonenumber });
    message.setAttribute('data-lang', selector);
    message.show();
}

function emailOnClick()
{
    copyToClipboard('emailaddress');

    let selector = 'messages:copied';
    let text = translateText(selector);
    if (text === null) text = 'Copiato!';
    let message = document.createElement('div', { is: 'popin-message' }).from(
        text,
        device === 'phone' ? 'center' : { value: 'center', relativeTo: emailaddress },
        { value: 'bottom-top,-6px', relativeTo: emailaddress });
    message.setAttribute('data-lang', selector);
    message.show();
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

function setSkill(skill) {
    function setDetails(name, since, imgExt, projects) {
        skill_icon.style.backgroundImage = `url(./assets/img/skills/${skill}.${imgExt})`;
        skill_name.forEach(item => item.textContent = name);
        skill_exp_value.setAttribute('data-lang', `skills:preview:experience:values:${skill}`);
        skill_exp_value.textContent = translateText(`skills:preview:experience:values:${skill}`);
        skill_since_value.textContent = String(since);
        skill_descr.setAttribute('data-lang', `skills:preview:descr:${skill}`);
        skill_descr.textContent = translateText(`skills:preview:descr:${skill}`);

        if (projects != undefined) {
            skill_projects_none.style.display = 'none';
            skill_projects_content.style.position = null;
            skill_projects_list = new ProjectList(projects);
            skill_projects_list.element.classList.add('skill-projects-list');
            skill_projects_content.appendChild(skill_projects_list.element);
        }
        else {
            skill_projects_content.style.position = 'absolute';
            skill_projects_none.style.display = null;
            skill_projects_list = null;
        }
    }
    
    switch(skill) {
        case 'cplusplus':
            setDetails('C++', 2014, 'svg', [
                projectThumbnails.audioengineer
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
                projectThumbnails.magicbet,
                projectThumbnails.voicenotes,
                projectThumbnails.supermario
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
                projectThumbnails.portfolio
            ]);
            break;
        case 'css':
            setDetails('CSS', 2020, 'svg', [
                projectThumbnails.portfolio
            ]);
            break;
        case 'javascript':
            setDetails('JavaScript', 2020, 'svg', [
                projectThumbnails.portfolio
            ]);
            break;
    }
    currentSkill = skill;
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

// Screen resize listener
window.addEventListener('resize', function() {
    if (deviceType() !== device) {
        location.reload();
    }
});

// Session settings
if (window.sessionStorage.getItem('session') === null) {
    launchAnimation();
    window.sessionStorage.setItem('session', 'session');
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
    let code = window.sessionStorage.getItem('lang');
    if (code === null) code = navigator.language.split('-')[0];
    window.sessionStorage.setItem('lang', code);
    await translatePage(code);
})().then(() => {
    // Shows the page when everything is done
    body.classList.add('visible');
});