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
const skill_preview = document.querySelector('#skill-preview');
const skill_message = document.querySelector('#skill-message');
const skill_content = document.querySelector('#skill-content');
const skill_details_title = document.querySelector('#skill-details-title');
const skill_projects_content_wrapper = document.querySelector('#skill-projects-content-wrapper');
var skill_projects_content = document.querySelector('#skill-projects-content-wrapper .skill-projects-content');
const skill_icon = document.querySelector('#skill-details-content .skill-item .skill-icon');
const skill_name = document.querySelectorAll('#skill-preview .skill-name');
const skill_exp_value = document.querySelector('#skill-experience .value');
const skill_since_value = document.querySelector('#skill-since .value');
const skill_descr = document.querySelector('#skill-details-content .skill-descr');
const skill_noprojects = document.querySelector('#skill-noprojects');

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
var skillDetailsShown = false;
var skillContentAnimation = null;

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
    let new_project = project_thumbnail.cloneNode(true);
    new_project.style = null;

    let background = new_project.getElementsByClassName('project-background')[0];
    background.style.backgroundImage = `url(./assets/img/projects/${project.id}_thumbnail.jpg)`;
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

    return new_project;
}

function toggleSkill(skill) {
    function setDetails(name, since, ext, projects) {
        skill_icon.style.backgroundImage = `url(./assets/img/skills/${skill}.${ext})`;
        skill_name.forEach(item => item.textContent = name);
        skill_exp_value.setAttribute('data-lang', `skills:skill-preview:experience:values:${skill}`);
        skill_exp_value.textContent = translateText(`skills:skill-preview:experience:values:${skill}`);
        skill_since_value.textContent = String(since);
        skill_descr.setAttribute('data-lang', `skills:skill-preview:descr:${skill}`);
        skill_descr.textContent = translateText(`skills:skill-preview:descr:${skill}`);

        let new_skill_projects_content = skill_projects_content.cloneNode(false);
        let width = skill_projects_content.getBoundingClientRect().width;
        let height = skill_projects_content.getBoundingClientRect().height;
        skill_projects_content.style.position = 'absolute';
        skill_projects_content.style.zIndex = 100;
        skill_projects_content.style.width = `${width}px`;
        skill_projects_content.style.height = `${height}px`;

        if (projects != undefined) {
            skill_noprojects.style.display = 'none';
            projects.forEach(project => {
                new_skill_projects_content.appendChild(createProject(project));
            });
        }
        else {
            skill_noprojects.style.display = null;
        }

        skill_projects_content_wrapper.appendChild(new_skill_projects_content);
        skill_projects_content.animate([
            {
                opacity: 1
            },
            {
                opacity: 0
            }
        ], { duration: 150 }).onfinish = () => {
            skill_projects_content_wrapper.removeChild(skill_projects_content);
            skill_projects_content = new_skill_projects_content;
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

    function animateHeight(element, startHeight, endHeight, duration, onfinish) {
        if (skillContentAnimation != null) {
            skillContentAnimation.cancel();
        }
        skillContentAnimation = element.animate([
            {
                height: startHeight
            },
            {
                height: endHeight
            }
        ], { duration: duration });
        if (onfinish != undefined) {
            skillContentAnimation.onfinish = function() {
                onfinish();
                skillContentAnimation = null;
            }
        }
    }

    function hideSkillDetails() {
        skill_message.style.display = null;
        skill_details_title.style.display = 'none';
        skillDetailsShown = false;
    }

    function showSkillDetails() {
        skill_message.style.display = 'none';
        skill_details_title.style.display = null;

        skillDetailsShown = true;
    }

    function changeSkillDetails() {
        setSkill();
    }

    let oldHeight = null;
    let newHeight = null;
    let onfinish = null;
    
    if (!skillDetailsShown) {
        if (currentSkill !== skill) {
            changeSkillDetails();
        }
        showSkillDetails();
        oldHeight = '0px';
        newHeight = `${skill_content.scrollHeight}px`;
        onfinish = () => skill_content.style.height = null;
    }
    else {
        oldHeight = `${skill_content.scrollHeight}px`;
        if (currentSkill === skill) {
            hideSkillDetails();
            newHeight = '0px';
            onfinish = () => skill_content.style.height = '0px';
        }
        else {
            changeSkillDetails();
            newHeight = `${skill_content.clientHeight}px`;
            onfinish = () => skill_content.style.height = null;
        }
    }
    animateHeight(skill_content, oldHeight, newHeight, 400, onfinish);
}


/* ------------------------------------------------         SCRIPT          ------------------------------------------------ */

skill_content.style.height = '0px';
skill_details_title.style.display = 'none';

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